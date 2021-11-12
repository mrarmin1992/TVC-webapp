import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

import { KategorijaVijesti2 } from '../models/KategorijaVijesti2';

@Injectable({
  providedIn: 'root'
})
export class KategorijeVijesti2Service {
  kategorijeVijesti2Collection: AngularFirestoreCollection<KategorijaVijesti2>;
  kategorijaVijesti2Doc: AngularFirestoreDocument<KategorijaVijesti2>;
  kategorijeVijesti2: Observable<KategorijaVijesti2[]>;
  kategorijaVijesti2: Observable<KategorijaVijesti2>;
  novaKategorijaVijesti2: KategorijaVijesti2;
  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) { }

getKategorijeVijesti2(): Observable<KategorijaVijesti2[]> {
      // tslint:disable-next-line: max-line-length
      const collection: AngularFirestoreCollection<KategorijaVijesti2> = this.afs.collection('kategorijeVijesti2');
      const collection$: Observable<KategorijaVijesti2[]> = collection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(action  => {
          const data = action.payload.doc.data() as KategorijaVijesti2;
          data.Id = action.payload.doc.id;
          return data;
            });
          })
        );
      return collection$;
  }
  getKategorijaVijesti2(id: string): Observable<KategorijaVijesti2> {
    this.kategorijaVijesti2Doc = this.afs.doc<KategorijaVijesti2>(`kategorijeVijesti2/${id}`);
    this.kategorijaVijesti2 = this.kategorijaVijesti2Doc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as KategorijaVijesti2;
          data.Id = action.payload.id;
          return data;
        }
      })
    );
    return this.kategorijaVijesti2;
  }
  addkategorijaVijesti2(kategorija: KategorijaVijesti2) {
    const collection: AngularFirestoreCollection<KategorijaVijesti2> = this.afs.collection('kategorijeVijesti2');
    collection.add(kategorija);
  }
  updateKategorijaVijesti2(kategorija: KategorijaVijesti2, id: string) {
    this.kategorijaVijesti2Doc = this.afs.doc<KategorijaVijesti2>(`kategorijeVijesti2/${id}`);
    this.kategorijaVijesti2Doc.update(kategorija).catch(err => {
      console.log(err);
    });
  }
  deleteKategorijaVijesti2(id: string) {
    this.kategorijaVijesti2Doc = this.afs.doc(`kategorijeVijesti2/${id}`);
    this.kategorijaVijesti2Doc.delete();
  }
}
