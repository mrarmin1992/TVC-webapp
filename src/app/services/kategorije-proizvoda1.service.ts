import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

import { KategorijaProizvoda1 } from '../models/KategorijaProizvoda1';

@Injectable({
  providedIn: 'root'
})
export class KategorijeProizvoda1Service {
  kategorijeProizvodi1Collection: AngularFirestoreCollection<KategorijaProizvoda1>;
  kategorijaProizvodi1Doc: AngularFirestoreDocument<KategorijaProizvoda1>;
  kategorijeProizvodi1: Observable<KategorijaProizvoda1[]>;
  kategorijaProizvodi1: Observable<KategorijaProizvoda1>;
  novaKategorijaProizvodi1: KategorijaProizvoda1;
  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) { }

getKategorijeProizvodi(): Observable<KategorijaProizvoda1[]> {
      // tslint:disable-next-line: max-line-length
      const collection: AngularFirestoreCollection<KategorijaProizvoda1> = this.afs.collection('kategorijeProizvodi1');
      const collection$: Observable<KategorijaProizvoda1[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as KategorijaProizvoda1;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getKategorijaProizvodi1(id: string): Observable<KategorijaProizvoda1> {
    this.kategorijaProizvodi1Doc = this.afs.doc<KategorijaProizvoda1>(`kategorijeProizvodi/${id}`);
    this.kategorijaProizvodi1 = this.kategorijaProizvodi1Doc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as KategorijaProizvoda1;
          data.Id = action.payload.id;
          return data;
        }
      })
    );
    return this.kategorijaProizvodi1;
  }
  addkategorijaProizvodi1(kategorija: KategorijaProizvoda1) {
    const collection: AngularFirestoreCollection<KategorijaProizvoda1> = this.afs.collection('kategorijeProizvodi1');
    collection.add(kategorija);
  }
  updateKategorijaProizvodi1(kategorija: KategorijaProizvoda1, id: string) {
    this.kategorijaProizvodi1Doc = this.afs.doc<KategorijaProizvoda1>(`kategorijeProizvodi1/${id}`);
    this.kategorijaProizvodi1Doc.update(kategorija).catch(err => {
      console.log(err);
    });
  }
  deleteKategorijaProizvodi1(id: string) {
    this.kategorijaProizvodi1Doc = this.afs.doc(`kategorijeProizvodi1/${id}`);
    this.kategorijaProizvodi1Doc.delete();
  }
}
