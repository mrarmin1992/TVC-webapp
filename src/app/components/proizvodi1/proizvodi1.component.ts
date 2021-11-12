
import { Proizvod } from 'src/app/models/Proizvod';
import { ProizvodiService } from 'src/app/services/proizvodi.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';
import { Proizvod1 } from 'src/app/models/Proizvod1';
import { Proizvodi1Service } from 'src/app/services/proizvodi1.service';


@Component({
  selector: 'app-proizvodi1',
  templateUrl: './proizvodi1.component.html',
  styleUrls: ['./proizvodi1.component.css']
})
export class Proizvodi1Component implements OnInit {
  proizvodi1: Proizvod1[];

  constructor(private proizvodi1Service: Proizvodi1Service,
              private storage: AngularFireStorage) { }

  ngOnInit() {
    this.proizvodi1Service.getProizvodi1().subscribe(proizvodi1 => {
      proizvodi1.forEach(cur => {
        const ref = this.storage.ref(`Proizvodi1/${cur.Podnaslov}`);
        cur.Slika = ref.getDownloadURL();
      });
      this.proizvodi1 = proizvodi1;
    });

  }

}
