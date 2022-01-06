import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavbarService } from '../../services/navbar.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { VijestiService } from '../../services/vijesti.service';
import { Vijest } from '../../models/Vijest';
import { NgForm } from '@angular/forms';
import { Vijesti1Service } from 'src/app/services/vijesti1.service';
import { Vijest1 } from 'src/app/models/Vijest1';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  a = 2;
  b = 1;
  pretraga: '';
  user: any;
  vijesti: Vijest1[];
  sveVijesti: Vijest1[];
  constructor(public nav: NavbarService,
              private authService: AuthServiceService,
              private storage: AngularFireStorage,
              private vijestiService: Vijesti1Service,
              private router: Router,
              ) { }

  ngOnInit() {
    this.vijestiService.getFocused().subscribe(vijesti => {
      this.vijesti = vijesti;
      this.vijesti.forEach(doc => {
        const ref = this.storage.ref(`Vijesti1/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
        doc.Podnaslov = doc.Podnaslov.substring(0, 50) + '...';
      });
    });
    this.vijestiService.getVijesti1().subscribe(vijesti => {
      this.sveVijesti = vijesti;
      this.sveVijesti.forEach(doc => {
        const ref = this.storage.ref(`Vijesti1/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
        doc.Podnaslov = doc.Podnaslov.substring(0, 50) + '...';
      });
    });
    this.authService.getAuth().subscribe(user => {
      this.user = user;
    });
  }

changeValue1() {
  this.a = this.a + 1;
}

changeValue2() {
  this.b = this.b + 1;
}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('err');
    } else {
      this.router.navigate([`/pretraga/${this.pretraga}`]);
    }
  }
}

