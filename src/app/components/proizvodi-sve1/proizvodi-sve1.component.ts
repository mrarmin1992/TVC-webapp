import { Component, OnInit } from '@angular/core';
import { Proizvod1 } from 'src/app/models/Proizvod1';
import { Proizvodi1Service } from 'src/app/services/proizvodi1.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-proizvodi-sve1',
  templateUrl: './proizvodi-sve1.component.html',
  styleUrls: ['./proizvodi-sve1.component.css']
})
export class ProizvodiSve1Component implements OnInit {

  proizvodi1: Proizvod1[];
  pageOfItems: Array<any>;
  pageSize = 12;
  items = [];
  constructor(private proizvodiService: Proizvodi1Service,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.proizvodiService.getProizvodi1().subscribe(proizvodi1 => {
      this.proizvodi1 = proizvodi1;
      this.proizvodi1.forEach(doc => {
        const ref = this.storage.ref(`Proizvodi1/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
        doc.Sadrzaj = doc.Sadrzaj.substring(0, 400);
        doc.Sadrzaj = jQuery(doc.Sadrzaj).text();
      });
      // tslint:disable-next-line: max-line-length
      this.items = this.proizvodi1.map((x, i) => ({ id: (i + 1), Naslov: x.Naslov, Id: x.Id, Podnaslov: x.Podnaslov, Slika: x.Slika, Kategorija: x.Kategorija, Sadrzaj: x.Sadrzaj, Datum: x.Datum, Objava: x.Objava}));
    });
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
