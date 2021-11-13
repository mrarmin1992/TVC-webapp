import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Vijest1 } from 'src/app/models/Vijest1';
import { Vijesti1Service } from 'src/app/services/vijesti1.service';

@Component({
  selector: 'app-vijesti-sve1',
  templateUrl: './vijesti-sve1.component.html',
  styleUrls: ['./vijesti-sve1.component.css']
})
export class VijestiSve1Component implements OnInit {

  vijesti1: Vijest1[];
  pageOfItems: Array<any>;
  pageSize = 12;
  items = [];
  constructor(private vijestiService: Vijesti1Service,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.vijestiService.getVijesti1().subscribe(vijesti1 => {
      this.vijesti1 = vijesti1;
      this.vijesti1.forEach(doc => {
        const ref = this.storage.ref(`Vijesti1/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
        doc.Sadrzaj = doc.Sadrzaj.substring(0, 400);
        doc.Sadrzaj = jQuery(doc.Sadrzaj).text();
      });
      // tslint:disable-next-line: max-line-length
      this.items = this.vijesti1.map((x, i) => ({ id: (i + 1), Naslov: x.Naslov, Id: x.Id, Podnaslov: x.Podnaslov, Slika: x.Slika, Kategorija: x.Kategorija, Sadrzaj: x.Sadrzaj, Datum: x.Datum, Objava: x.Objava}));
    });
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}