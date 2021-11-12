import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { MyImageService } from '../services/my-image.service';
import { AngularFireAuth } from '@angular/fire/auth';

import { Vijest2 } from '../models/Vijest2';

@Injectable({
  providedIn: 'root'
})
export class Vijesti2Service {
  vijesti2Collection: AngularFirestoreCollection<Vijest2>;
  vijest2Doc: AngularFirestoreDocument<Vijest2>;
  vijesti2: Observable<Vijest2[]>;
  vijest2: Observable<Vijest2>;
  novaVijest2: Vijest2;
  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage,
              private imageService: MyImageService,
              private auth: AngularFireAuth) { }
  getVijesti2(): Observable<Vijest2[]> {
      // tslint:disable-next-line: max-line-length
      const collection: AngularFirestoreCollection<Vijest2> = this.afs.collection('vijesti2', ref => ref.orderBy('Datum', 'desc'));
      const collection$: Observable<Vijest2[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as Vijest2;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getFocused(): Observable<Vijest2[]> {
    // tslint:disable-next-line: max-line-length
    const collection: AngularFirestoreCollection<Vijest2> = this.afs.collection('vijesti2', ref => ref.orderBy('Datum', 'desc').where('Fokus', '==', true));
    const collection$: Observable<Vijest2[]> = collection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(action  => {
        const data = action.payload.doc.data() as Vijest2;
        data.Id = action.payload.doc.id;
        return data;
          });
        })
      );
    return collection$;
}
  getProducts(): Observable<Vijest2[]> {
      const user = this.auth.auth.currentUser.displayName;
      let collection: AngularFirestoreCollection<Vijest2>;
      if ( user === 'Rijad Dzanko') {
        collection = this.afs.collection('vijesti2', ref => ref.orderBy('Datum', 'desc'));
      } else {
        collection = this.afs.collection('vijesti2', ref => ref.orderBy('Datum', 'desc').where('Objava', '==', user));
      }
      const collection$: Observable<Vijest2[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as Vijest2;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getByKategorija(kategorija: string): Observable<Vijest2[]> {
    let collection: AngularFirestoreCollection<Vijest2>;
    if (kategorija !== 'Sve vijesti') {
      // tslint:disable-next-line: max-line-length
       collection = this.afs.collection('vijesti2', ref => ref.where('Kategorija', '==', kategorija));
    } else {
      collection = this.afs.collection('vijesti2');
    }
    const collection$: Observable<Vijest2[]> = collection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(action  => {
        const data = action.payload.doc.data() as Vijest2;
        data.Id = action.payload.doc.id;
        return data;
          });
        })
      );
    return collection$;
  }
  updateKategorija(vijest2: Vijest2, kategorija: string) {
    vijest2.Kategorija = kategorija;
    this.updateVijest2(vijest2.Id, vijest2);
  }
  getVijest2(category: string, id: string): Observable<Vijest2> {
    this.vijest2Doc = this.afs.doc<Vijest2>(`${category}/${id}`);
    this.vijest2 = this.vijest2Doc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Vijest2;
          data.Id = action.payload.id;
          return data;
        }
      })
    );
    return this.vijest2;
  }
  getVijest2Value(id: string) {
    return this.afs.doc<Vijest2>(`vijesti2/${id}`);
  }
  updateVijest2(id: string, vijest2: Vijest2) {
    this.vijest2Doc = this.afs.doc<Vijest2>(`vijesti2/${id}`);

    this.novaVijest2 = {
      Naslov: vijest2.Naslov,
      Podnaslov: vijest2.Podnaslov,
      Sadrzaj: vijest2.Sadrzaj,
      Kategorija: vijest2.Kategorija,
      Datum: vijest2.Datum,
      Fokus: vijest2.Fokus,
      Objava: vijest2.Objava
    };
    this.vijest2Doc.update(this.novaVijest2).catch(err => {
      console.log(err);
    });
  }
  DodajVijest2(vijest2: Vijest2) {
    const user = this.auth.auth.currentUser.displayName;
    const collection: AngularFirestoreCollection<Vijest2> = this.afs.collection('vijesti2');
    vijest2.Objava = user;
    collection.add(vijest2);
  }
  DeleteVijest2(vijest2: Vijest2) {
    this.vijest2Doc = this.afs.doc<Vijest2>(`vijesti2/${vijest2.Id}`);
    this.vijest2Doc.delete();
    this.imageService.deleteImage(vijest2.Podnaslov, 'Vijesti1');
  }
}
