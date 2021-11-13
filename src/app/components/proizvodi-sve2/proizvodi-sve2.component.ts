import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Proizvod2 } from 'src/app/models/Proizvod2';
import { Proizvodi2Service } from 'src/app/services/proizvodi2.service';

@Component({
  selector: 'app-proizvodi-sve2',
  templateUrl: './proizvodi-sve2.component.html',
  styleUrls: ['./proizvodi-sve2.component.css']
})
export class ProizvodiSve2Component implements OnInit {

  proizvodi2: Proizvod2[];
  pageOfItems: Array<any>;
  pageSize = 12;
  items = [];
  constructor(private proizvodiService: Proizvodi2Service,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.proizvodiService.getProizvodi2().subscribe(proizvodi2 => {
      this.proizvodi2 = proizvodi2;
      this.proizvodi2.forEach(doc => {
        const ref = this.storage.ref(`Proizvodi2/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
        doc.Sadrzaj = doc.Sadrzaj.substring(0, 400);
        doc.Sadrzaj = jQuery(doc.Sadrzaj).text();
      });
      // tslint:disable-next-line: max-line-length
      this.items = this.proizvodi2.map((x, i) => ({ id: (i + 1), Naslov: x.Naslov, Id: x.Id, Podnaslov: x.Podnaslov, Slika: x.Slika, Kategorija: x.Kategorija, Sadrzaj: x.Sadrzaj, Datum: x.Datum, Objava: x.Objava}));
    });
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
