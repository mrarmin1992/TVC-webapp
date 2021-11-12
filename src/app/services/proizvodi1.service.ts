import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { MyImageService } from '../services/my-image.service';
import { AngularFireAuth } from '@angular/fire/auth';

import { Proizvod1 } from '../models/Proizvod1';

@Injectable({
  providedIn: 'root'
})
export class Proizvodi1Service {
  proizvodi1Collection: AngularFirestoreCollection<Proizvod1>;
  proizvod1Doc: AngularFirestoreDocument<Proizvod1>;
  proizvodi1: Observable<Proizvod1[]>;
  proizvod1: Observable<Proizvod1>;
  novaProizvod1: Proizvod1;
  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage,
              private imageService: MyImageService,
              private auth: AngularFireAuth) { }
  getProizvodi1(): Observable<Proizvod1[]> {
      // tslint:disable-next-line: max-line-length
      const collection: AngularFirestoreCollection<Proizvod1> = this.afs.collection('proizvodi1', ref => ref.orderBy('Datum', 'desc'));
      const collection$: Observable<Proizvod1[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as Proizvod1;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getFocused(): Observable<Proizvod1[]> {
    // tslint:disable-next-line: max-line-length
    const collection: AngularFirestoreCollection<Proizvod1> = this.afs.collection('proizvodi1', ref => ref.orderBy('Datum', 'desc').where('Fokus', '==', true));
    const collection$: Observable<Proizvod1[]> = collection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(action  => {
        const data = action.payload.doc.data() as Proizvod1;
        data.Id = action.payload.doc.id;
        return data;
          });
        })
      );
    return collection$;
}
  getProducts(): Observable<Proizvod1[]> {
      const user = this.auth.auth.currentUser.displayName;
      let collection: AngularFirestoreCollection<Proizvod1>;
      if ( user === 'Rijad Dzanko') {
        collection = this.afs.collection('proizvodi1', ref => ref.orderBy('Datum', 'desc'));
      } else {
        collection = this.afs.collection('proizvodi1', ref => ref.orderBy('Datum', 'desc').where('Objava', '==', user));
      }
      const collection$: Observable<Proizvod1[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as Proizvod1;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getByKategorija(kategorija: string): Observable<Proizvod1[]> {
    let collection: AngularFirestoreCollection<Proizvod1>;
    if (kategorija !== 'Svi proizvodi') {
      // tslint:disable-next-line: max-line-length
       collection = this.afs.collection('proizvodi1', ref => ref.where('Kategorija', '==', kategorija));
    } else {
      collection = this.afs.collection('proizvodi1');
    }
    const collection$: Observable<Proizvod1[]> = collection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(action  => {
        const data = action.payload.doc.data() as Proizvod1;
        data.Id = action.payload.doc.id;
        return data;
          });
        })
      );
    return collection$;
  }
  updateKategorija(proizvod1: Proizvod1, kategorija: string) {
    proizvod1.Kategorija = kategorija;
    this.updateProizvod1(proizvod1.Id, proizvod1);
  }
  getProizvod1(category: string, id: string): Observable<Proizvod1> {
    this.proizvod1Doc = this.afs.doc<Proizvod1>(`${category}/${id}`);
    this.proizvod1 = this.proizvod1Doc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Proizvod1;
          data.Id = action.payload.id;
          return data;
        }
      })
    );
    return this.proizvod1;
  }
  getProizvod1Value(id: string) {
    return this.afs.doc<Proizvod1>(`proizvodi1/${id}`);
  }
  updateProizvod1(id: string, proizvod1: Proizvod1) {
    this.proizvod1Doc = this.afs.doc<Proizvod1>(`proizvodi1/${id}`);

    this.novaProizvod1 = {
      Naslov: proizvod1.Naslov,
      Podnaslov: proizvod1.Podnaslov,
      Sadrzaj: proizvod1.Sadrzaj,
      Kategorija: proizvod1.Kategorija,
      Datum: proizvod1.Datum,
      Fokus: proizvod1.Fokus,
      Objava: proizvod1.Objava
    };
    this.proizvod1Doc.update(this.novaProizvod1).catch(err => {
      console.log(err);
    });
  }
  DodajProizvod1(proizvod1: Proizvod1) {
    const user = this.auth.auth.currentUser.displayName;
    const collection: AngularFirestoreCollection<Proizvod1> = this.afs.collection('proizvodi1');
    proizvod1.Objava = user;
    collection.add(proizvod1);
  }
  DeleteProizvod1(proizvod1: Proizvod1) {
    this.proizvod1Doc = this.afs.doc<Proizvod1>(`proizvodi1/${proizvod1.Id}`);
    this.proizvod1Doc.delete();
    this.imageService.deleteImage(proizvod1.Podnaslov, 'Proizvodi1');
  }
}
