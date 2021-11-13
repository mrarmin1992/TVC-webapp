import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Vijest1 } from 'src/app/models/Vijest1';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { SeoService } from 'src/app/services/seo.service';
import { Vijesti1Service } from 'src/app/services/vijesti1.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-vijest1',
  templateUrl: './vijest1.component.html',
  styleUrls: ['./vijest1.component.css']
})
export class Vijest1Component implements OnInit {

  id: any;
  vijest: Vijest1;
  slicno: Vijest1[];
  nedavno: Vijest1[];
  constructor(private vijestiService: Vijesti1Service,
              private storage: AngularFireStorage,
              private meta: Meta,
              private activatedRoute: ActivatedRoute,
              private footer: FooterService,
              private navbar: NavbarService,
              private router: Router,
              private seo: SeoService) {
              }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.footer.show();
    this.navbar.show();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.id = this.activatedRoute.snapshot.params.id;
    this.vijestiService.getVijest1('vijesti1', this.id).subscribe(vijest => {
      this.vijest = vijest;
      const ref = this.storage.ref(`Vijesti1/${this.vijest.Podnaslov}`);
      this.vijest.Slika = ref.getDownloadURL();
      // tslint:disable-next-line: max-line-length
      // document.getElementById('shareFB').setAttribute('data-href', encodeURIComponent(document.URL));
      // tslint:disable-next-line: max-line-length
      // document.getElementById('shareFBLink').setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL));
      this.vijestiService.getByKategorija(vijest.Kategorija).subscribe(slicno => {
        this.slicno = slicno;
        this.slicno.forEach(doc => {
          // tslint:disable-next-line: no-shadowed-variable
          const ref = this.storage.ref(`Vijesti1/${doc.Podnaslov}`);
          doc.Slika = ref.getDownloadURL();
        });
        this.slicno = this.slicno.filter(obj => obj.Id !== vijest.Id);
      });
      this.storage.ref('Vijesti1/' + this.vijest.Podnaslov).getDownloadURL().subscribe(slik => {
        this.seo.generateTags({
          title: this.vijest.Naslov,
          description: jQuery(this.vijest.Sadrzaj).text(),
          image: slik,
          slug: `vijest1/${this.vijest.Id}`
        });
      });
    });
    this.vijestiService.getVijesti1().subscribe(nedavno => {
      this.nedavno = nedavno;
      this.nedavno.forEach(doc => {
        // tslint:disable-next-line: no-shadowed-variable
        const ref = this.storage.ref(`Vijesti1/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
      });
    });
  }
}
