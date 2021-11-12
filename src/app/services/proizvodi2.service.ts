import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { MyImageService } from '../services/my-image.service';
import { AngularFireAuth } from '@angular/fire/auth';

import { Proizvod2 } from '../models/Proizvod2';

@Injectable({
  providedIn: 'root'
})
export class Proizvodi2Service {
  proizvodi2Collection: AngularFirestoreCollection<Proizvod2>;
  proizvod2Doc: AngularFirestoreDocument<Proizvod2>;
  proizvodi2: Observable<Proizvod2[]>;
  proizvod2: Observable<Proizvod2>;
  novaProizvod2: Proizvod2;
  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage,
              private imageService: MyImageService,
              private auth: AngularFireAuth) { }
  getProizvodi2(): Observable<Proizvod2[]> {
      // tslint:disable-next-line: max-line-length
      const collection: AngularFirestoreCollection<Proizvod2> = this.afs.collection('proizvodi2', ref => ref.orderBy('Datum', 'desc'));
      const collection$: Observable<Proizvod2[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as Proizvod2;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getFocused(): Observable<Proizvod2[]> {
    // tslint:disable-next-line: max-line-length
    const collection: AngularFirestoreCollection<Proizvod2> = this.afs.collection('proizvodi2', ref => ref.orderBy('Datum', 'desc').where('Fokus', '==', true));
    const collection$: Observable<Proizvod2[]> = collection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(action  => {
        const data = action.payload.doc.data() as Proizvod2;
        data.Id = action.payload.doc.id;
        return data;
          });
        })
      );
    return collection$;
}
  getProducts(): Observable<Proizvod2[]> {
      const user = this.auth.auth.currentUser.displayName;
      let collection: AngularFirestoreCollection<Proizvod2>;
      if ( user === 'Rijad Dzanko') {
        collection = this.afs.collection('proizvodi2', ref => ref.orderBy('Datum', 'desc'));
      } else {
        collection = this.afs.collection('proizvodi2', ref => ref.orderBy('Datum', 'desc').where('Objava', '==', user));
      }
      const collection$: Observable<Proizvod2[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as Proizvod2;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getByKategorija(kategorija: string): Observable<Proizvod2[]> {
    let collection: AngularFirestoreCollection<Proizvod2>;
    if (kategorija !== 'Svi proizvodi') {
      // tslint:disable-next-line: max-line-length
       collection = this.afs.collection('proizvodi2', ref => ref.where('Kategorija', '==', kategorija));
    } else {
      collection = this.afs.collection('proizvodi2');
    }
    const collection$: Observable<Proizvod2[]> = collection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(action  => {
        const data = action.payload.doc.data() as Proizvod2;
        data.Id = action.payload.doc.id;
        return data;
          });
        })
      );
    return collection$;
  }
  updateKategorija(proizvod2: Proizvod2, kategorija: string) {
    proizvod2.Kategorija = kategorija;
    this.updateProizvod2(proizvod2.Id, proizvod2);
  }
  getProizvod2(category: string, id: string): Observable<Proizvod2> {
    this.proizvod2Doc = this.afs.doc<Proizvod2>(`${category}/${id}`);
    this.proizvod2 = this.proizvod2Doc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Proizvod2;
          data.Id = action.payload.id;
          return data;
        }
      })
    );
    return this.proizvod2;
  }
  getProizvod2Value(id: string) {
    return this.afs.doc<Proizvod2>(`proizvodi2/${id}`);
  }
  updateProizvod2(id: string, proizvod2: Proizvod2) {
    this.proizvod2Doc = this.afs.doc<Proizvod2>(`proizvodi2/${id}`);

    this.novaProizvod2 = {
      Naslov: proizvod2.Naslov,
      Podnaslov: proizvod2.Podnaslov,
      Sadrzaj: proizvod2.Sadrzaj,
      Kategorija: proizvod2.Kategorija,
      Datum: proizvod2.Datum,
      Fokus: proizvod2.Fokus,
      Objava: proizvod2.Objava
    };
    this.proizvod2Doc.update(this.novaProizvod2).catch(err => {
      console.log(err);
    });
  }
  DodajProizvod(proizvod2: Proizvod2) {
    const user = this.auth.auth.currentUser.displayName;
    const collection: AngularFirestoreCollection<Proizvod2> = this.afs.collection('proizvodi2');
    proizvod2.Objava = user;
    collection.add(proizvod2);
  }
  DeleteProizvod(proizvod2: Proizvod2) {
    this.proizvod2Doc = this.afs.doc<Proizvod2>(`proizvodi2/${proizvod2.Id}`);
    this.proizvod2Doc.delete();
    this.imageService.deleteImage(proizvod2.Podnaslov, 'Proizvodi2');
  }
}
