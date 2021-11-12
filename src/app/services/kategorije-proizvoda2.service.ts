import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

import { KategorijaProizvoda2 } from '../models/KategorijaProizvoda2';

@Injectable({
  providedIn: 'root'
})
export class KategorijeProizvoda2Service {
  kategorijeProizvodi2Collection: AngularFirestoreCollection<KategorijaProizvoda2>;
  kategorijaProizvodi2Doc: AngularFirestoreDocument<KategorijaProizvoda2>;
  kategorijeProizvodi2: Observable<KategorijaProizvoda2[]>;
  kategorijaProizvodi2: Observable<KategorijaProizvoda2>;
  novaKategorijaProizvodi2: KategorijaProizvoda2;
  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) { }

getKategorijeProizvodi(): Observable<KategorijaProizvoda2[]> {
      // tslint:disable-next-line: max-line-length
      const collection: AngularFirestoreCollection<KategorijaProizvoda2> = this.afs.collection('kategorijeProizvodi2');
      const collection$: Observable<KategorijaProizvoda2[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as KategorijaProizvoda2;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getKategorijaProizvodi2(id: string): Observable<KategorijaProizvoda2> {
    this.kategorijaProizvodi2Doc = this.afs.doc<KategorijaProizvoda2>(`kategorijeProizvodi2/${id}`);
    this.kategorijaProizvodi2 = this.kategorijaProizvodi2Doc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as KategorijaProizvoda2;
          data.Id = action.payload.id;
          return data;
        }
      })
    );
    return this.kategorijaProizvodi2;
  }
  addkategorijaProizvodi2(kategorija: KategorijaProizvoda2) {
    const collection: AngularFirestoreCollection<KategorijaProizvoda2> = this.afs.collection('kategorijeProizvodi2');
    collection.add(kategorija);
  }
  updateKategorijaProizvodi2(kategorija: KategorijaProizvoda2, id: string) {
    this.kategorijaProizvodi2Doc = this.afs.doc<KategorijaProizvoda2>(`kategorijeProizvodi2/${id}`);
    this.kategorijaProizvodi2Doc.update(kategorija).catch(err => {
      console.log(err);
    });
  }
  deleteKategorijaProizvodi2(id: string) {
    this.kategorijaProizvodi2Doc = this.afs.doc(`kategorijeProizvodi2/${id}`);
    this.kategorijaProizvodi2Doc.delete();
  }
}
