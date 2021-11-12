
import { Proizvod } from 'src/app/models/Proizvod';
import { ProizvodiService } from 'src/app/services/proizvodi.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';
import { Proizvod2 } from 'src/app/models/Proizvod2';
import { Proizvodi2Service } from 'src/app/services/proizvodi2.service';


@Component({
  selector: 'app-proizvodi2',
  templateUrl: './proizvodi2.component.html',
  styleUrls: ['./proizvodi2.component.css']
})
export class Proizvodi2Component implements OnInit {
  proizvodi2: Proizvod2[];

  constructor(private proizvodi2Service: Proizvodi2Service,
              private storage: AngularFireStorage) { }

  ngOnInit() {
    this.proizvodi2Service.getProizvodi2().subscribe(proizvodi2 => {
      proizvodi2.forEach(cur => {
        const ref = this.storage.ref(`Proizvodi2/${cur.Podnaslov}`);
        cur.Slika = ref.getDownloadURL();
      });
      this.proizvodi2 = proizvodi2;
    });

  }

}
