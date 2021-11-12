import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

import { KategorijaVijesti1 } from '../models/KategorijaVijesti1';

@Injectable({
  providedIn: 'root'
})
export class KategorijeVijesti1Service {
  kategorijeVijesti1Collection: AngularFirestoreCollection<KategorijaVijesti1>;
  kategorijaVijesti1Doc: AngularFirestoreDocument<KategorijaVijesti1>;
  kategorijeVijesti1: Observable<KategorijaVijesti1[]>;
  kategorijaVijesti1: Observable<KategorijaVijesti1>;
  novaKategorijaVijesti1: KategorijaVijesti1;
  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) { }

getKategorijeVijesti1(): Observable<KategorijaVijesti1[]> {
      // tslint:disable-next-line: max-line-length
      const collection: AngularFirestoreCollection<KategorijaVijesti1> = this.afs.collection('kategorijeVijesti1');
      const collection$: Observable<KategorijaVijesti1[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as KategorijaVijesti1;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getKategorijaVijesti1(id: string): Observable<KategorijaVijesti1> {
    this.kategorijaVijesti1Doc = this.afs.doc<KategorijaVijesti1>(`kategorijeVijesti1/${id}`);
    this.kategorijaVijesti1 = this.kategorijaVijesti1Doc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as KategorijaVijesti1;
          data.Id = action.payload.id;
          return data;
        }
      })
    );
    return this.kategorijaVijesti1;
  }
  addkategorijaVijesti1(kategorija: KategorijaVijesti1) {
    const collection: AngularFirestoreCollection<KategorijaVijesti1> = this.afs.collection('kategorijeVijesti1');
    collection.add(kategorija);
  }
  updateKategorijaVijesti1(kategorija: KategorijaVijesti1, id: string) {
    this.kategorijaVijesti1Doc = this.afs.doc<KategorijaVijesti1>(`kategorijeVijesti1/${id}`);
    this.kategorijaVijesti1Doc.update(kategorija).catch(err => {
      console.log(err);
    });
  }
  deleteKategorijaVijesti1(id: string) {
    this.kategorijaVijesti1Doc = this.afs.doc(`kategorijeVijesti1/${id}`);
    this.kategorijaVijesti1Doc.delete();
  }
}
