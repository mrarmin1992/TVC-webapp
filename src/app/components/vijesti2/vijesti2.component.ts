import { Component, OnInit } from '@angular/core';
import { Vijest2 } from 'src/app/models/Vijest2';
import { Vijesti2Service } from 'src/app/services/vijesti2.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-vijesti2',
  templateUrl: './vijesti2.component.html',
  styleUrls: ['./vijesti2.component.css']
})
export class Vijesti2Component implements OnInit {

  vijesti2: Vijest2[];

  constructor(private vijesti2Service: Vijesti2Service,
              private storage: AngularFireStorage) { }

  ngOnInit() {
    this.vijesti2Service.getVijesti2().subscribe(vijesti2 => {
      vijesti2.forEach(cur => {
        const ref = this.storage.ref(`Vijesti2/${cur.Podnaslov}`);
        cur.Slika = ref.getDownloadURL();
      });
      this.vijesti2 = vijesti2;
    });

  }

}
