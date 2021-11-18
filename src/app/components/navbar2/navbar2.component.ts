import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavbarService } from '../../services/navbar.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { VijestiService } from '../../services/vijesti.service';
import { Vijest } from '../../models/Vijest';
import { NgForm } from '@angular/forms';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { TranslateModule } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Vijest2 } from 'src/app/models/Vijest2';
import { Vijesti2Service } from 'src/app/services/vijesti2.service';


@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  a = 2;
  b = 1;
  pretraga: '';
  user: any;
  vijesti: Vijest2[];
  sveVijesti: Vijest2[];
  constructor(public nav: NavbarService,
              private authService: AuthServiceService,
              private storage: AngularFireStorage,
              private vijestiService: Vijesti2Service,
              private router: Router,
              private translateConfigService: TranslateConfigService) { }

  ngOnInit() {
    this.vijestiService.getFocused().subscribe(vijesti => {
      this.vijesti = vijesti;
      this.vijesti.forEach(doc => {
        const ref = this.storage.ref(`Vijesti2/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
        doc.Podnaslov = doc.Podnaslov.substring(0, 50) + '...';
      });
    });
    this.vijestiService.getVijesti2().subscribe(vijesti => {
      this.sveVijesti = vijesti;
      this.sveVijesti.forEach(doc => {
        const ref = this.storage.ref(`Vijesti2/${doc.Podnaslov}`);
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

changeLanguage(type: string) {
  this.translateConfigService.changeLanguage(type);
}
  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('err');
    } else {
      this.router.navigate([`/pretraga/${this.pretraga}`]);
    }
  }
}

