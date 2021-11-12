import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { MyImageService } from '../services/my-image.service';
import { AngularFireAuth } from '@angular/fire/auth';

import { Vijest1 } from '../models/Vijest1';

@Injectable({
  providedIn: 'root'
})
export class Vijesti1Service {
  vijesti1Collection: AngularFirestoreCollection<Vijest1>;
  vijest1Doc: AngularFirestoreDocument<Vijest1>;
  vijesti1: Observable<Vijest1[]>;
  vijest1: Observable<Vijest1>;
  novaVijest1: Vijest1;
  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage,
              private imageService: MyImageService,
              private auth: AngularFireAuth) { }
  getVijesti1(): Observable<Vijest1[]> {
      // tslint:disable-next-line: max-line-length
      const collection: AngularFirestoreCollection<Vijest1> = this.afs.collection('vijesti1', ref => ref.orderBy('Datum', 'desc'));
      const collection$: Observable<Vijest1[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as Vijest1;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getFocused(): Observable<Vijest1[]> {
    // tslint:disable-next-line: max-line-length
    const collection: AngularFirestoreCollection<Vijest1> = this.afs.collection('vijesti1', ref => ref.orderBy('Datum', 'desc').where('Fokus', '==', true));
    const collection$: Observable<Vijest1[]> = collection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(action  => {
        const data = action.payload.doc.data() as Vijest1;
        data.Id = action.payload.doc.id;
        return data;
          });
        })
      );
    return collection$;
}
  getProducts(): Observable<Vijest1[]> {
      const user = this.auth.auth.currentUser.displayName;
      let collection: AngularFirestoreCollection<Vijest1>;
      if ( user === 'Rijad Dzanko') {
        collection = this.afs.collection('vijesti1', ref => ref.orderBy('Datum', 'desc'));
      } else {
        collection = this.afs.collection('vijesti1', ref => ref.orderBy('Datum', 'desc').where('Objava', '==', user));
      }
      const collection$: Observable<Vijest1[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as Vijest1;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getByKategorija(kategorija: string): Observable<Vijest1[]> {
    let collection: AngularFirestoreCollection<Vijest1>;
    if (kategorija !== 'Sve vijesti') {
      // tslint:disable-next-line: max-line-length
       collection = this.afs.collection('vijesti1', ref => ref.where('Kategorija', '==', kategorija));
    } else {
      collection = this.afs.collection('vijesti1');
    }
    const collection$: Observable<Vijest1[]> = collection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(action  => {
        const data = action.payload.doc.data() as Vijest1;
        data.Id = action.payload.doc.id;
        return data;
          });
        })
      );
    return collection$;
  }
  updateKategorija(vijest1: Vijest1, kategorija: string) {
    vijest1.Kategorija = kategorija;
    this.updateVijest1(vijest1.Id, vijest1);
  }
  getVijest1(category: string, id: string): Observable<Vijest1> {
    this.vijest1Doc = this.afs.doc<Vijest1>(`${category}/${id}`);
    this.vijest1 = this.vijest1Doc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Vijest1;
          data.Id = action.payload.id;
          return data;
        }
      })
    );
    return this.vijest1;
  }
  getVijest1Value(id: string) {
    return this.afs.doc<Vijest1>(`vijesti1/${id}`);
  }
  updateVijest1(id: string, vijest1: Vijest1) {
    this.vijest1Doc = this.afs.doc<Vijest1>(`vijesti1/${id}`);

    this.novaVijest1 = {
      Naslov: vijest1.Naslov,
      Podnaslov: vijest1.Podnaslov,
      Sadrzaj: vijest1.Sadrzaj,
      Kategorija: vijest1.Kategorija,
      Datum: vijest1.Datum,
      Fokus: vijest1.Fokus,
      Objava: vijest1.Objava
    };
    this.vijest1Doc.update(this.novaVijest1).catch(err => {
      console.log(err);
    });
  }
  DodajVijest1(vijest1: Vijest1) {
    const user = this.auth.auth.currentUser.displayName;
    const collection: AngularFirestoreCollection<Vijest1> = this.afs.collection('vijesti1');
    vijest1.Objava = user;
    collection.add(vijest1);
  }
  DeleteVijest1(vijest1: Vijest1) {
    this.vijest1Doc = this.afs.doc<Vijest1>(`vijesti1/${vijest1.Id}`);
    this.vijest1Doc.delete();
    this.imageService.deleteImage(vijest1.Podnaslov, 'Vijesti1');
  }
}
