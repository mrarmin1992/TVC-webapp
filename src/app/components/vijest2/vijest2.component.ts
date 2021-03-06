import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Vijest2 } from 'src/app/models/Vijest2';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { SeoService } from 'src/app/services/seo.service';
import { Vijesti2Service } from 'src/app/services/vijesti2.service';

@Component({
  selector: 'app-vijest2',
  templateUrl: './vijest2.component.html',
  styleUrls: ['./vijest2.component.css']
})
export class Vijest2Component implements OnInit {

  id: any;
  vijest: Vijest2;
  slicno: Vijest2[];
  nedavno: Vijest2[];
  constructor(private vijestiService: Vijesti2Service,
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
    this.vijestiService.getVijest2('vijesti2', this.id).subscribe(vijest => {
      this.vijest = vijest;
      const ref = this.storage.ref(`Vijesti2/${this.vijest.Podnaslov}`);
      this.vijest.Slika = ref.getDownloadURL();
      // tslint:disable-next-line: max-line-length
      // document.getElementById('shareFB').setAttribute('data-href', encodeURIComponent(document.URL));
      // tslint:disable-next-line: max-line-length
      // document.getElementById('shareFBLink').setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL));
      this.vijestiService.getByKategorija(vijest.Kategorija).subscribe(slicno => {
        this.slicno = slicno;
        this.slicno.forEach(doc => {
          // tslint:disable-next-line: no-shadowed-variable
          const ref = this.storage.ref(`Vijesti2/${doc.Podnaslov}`);
          doc.Slika = ref.getDownloadURL();
        });
        this.slicno = this.slicno.filter(obj => obj.Id !== vijest.Id);
      });
      this.storage.ref('Vijesti2/' + this.vijest.Podnaslov).getDownloadURL().subscribe(slik => {
        this.seo.generateTags({
          title: this.vijest.Naslov,
          description: jQuery(this.vijest.Sadrzaj).text(),
          image: slik,
          slug: `vijest2/${this.vijest.Id}`
        });
      });
    });
    this.vijestiService.getVijesti2().subscribe(nedavno => {
      this.nedavno = nedavno;
      this.nedavno.forEach(doc => {
        // tslint:disable-next-line: no-shadowed-variable
        const ref = this.storage.ref(`Vijesti2/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
      });
    });
  }
}
