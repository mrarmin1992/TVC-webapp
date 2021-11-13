import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Vijest2 } from 'src/app/models/Vijest2';
import { Vijesti2Service } from 'src/app/services/vijesti2.service';

@Component({
  selector: 'app-vijesti-sve2',
  templateUrl: './vijesti-sve2.component.html',
  styleUrls: ['./vijesti-sve2.component.css']
})
export class VijestiSve2Component implements OnInit {

  vijesti2: Vijest2[];
  pageOfItems: Array<any>;
  pageSize = 12;
  items = [];
  constructor(private vijestiService: Vijesti2Service,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.vijestiService.getVijesti2().subscribe(vijesti2 => {
      this.vijesti2 = vijesti2;
      this.vijesti2.forEach(doc => {
        const ref = this.storage.ref(`Vijesti2/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
        doc.Sadrzaj = doc.Sadrzaj.substring(0, 400);
        doc.Sadrzaj = jQuery(doc.Sadrzaj).text();
      });
      // tslint:disable-next-line: max-line-length
      this.items = this.vijesti2.map((x, i) => ({ id: (i + 1), Naslov: x.Naslov, Id: x.Id, Podnaslov: x.Podnaslov, Slika: x.Slika, Kategorija: x.Kategorija, Sadrzaj: x.Sadrzaj, Datum: x.Datum, Objava: x.Objava}));
    });
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
