import { Component, OnInit } from '@angular/core';
import { Vijest } from 'src/app/models/Vijest';
import { Vijesti1Service } from 'src/app/services/vijesti1.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Vijest1 } from 'src/app/models/Vijest1';

@Component({
  selector: 'app-vijesti1',
  templateUrl: './vijesti1.component.html',
  styleUrls: ['./vijesti1.component.css']
})
export class Vijesti1Component implements OnInit {
  vijesti1: Vijest1[];

  constructor(private vijesti1Service: Vijesti1Service,
              private storage: AngularFireStorage) { }

  ngOnInit() {
    this.vijesti1Service.getVijesti1().subscribe(vijesti1 => {
      vijesti1.forEach(cur => {
        const ref = this.storage.ref(`Vijesti1/${cur.Podnaslov}`);
        cur.Slika = ref.getDownloadURL();
      });
      this.vijesti1 = vijesti1;
    });

  }

}
