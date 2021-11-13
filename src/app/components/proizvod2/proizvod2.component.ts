import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Proizvod2 } from 'src/app/models/Proizvod2';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { Proizvodi2Service } from 'src/app/services/proizvodi2.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-proizvod2',
  templateUrl: './proizvod2.component.html',
  styleUrls: ['./proizvod2.component.css']
})
export class Proizvod2Component implements OnInit {

  id: any;
  proizvod2: Proizvod2;
  slicno: Proizvod2[];
  nedavno: Proizvod2[];
  constructor(private proizvodiService: Proizvodi2Service,
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
    this.proizvodiService.getProizvod2('proizvodi2', this.id).subscribe(proizvod2 => {
      this.proizvod2 = proizvod2;
      const ref = this.storage.ref(`Proizvodi2/${this.proizvod2.Podnaslov}`);
      this.proizvod2.Slika = ref.getDownloadURL();
      // tslint:disable-next-line: max-line-length
      // document.getElementById('shareFB').setAttribute('data-href', encodeURIComponent(document.URL));
      // tslint:disable-next-line: max-line-length
      // document.getElementById('shareFBLink').setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL));
      this.proizvodiService.getByKategorija(proizvod2.Kategorija).subscribe(slicno => {
        this.slicno = slicno;
        this.slicno.forEach(doc => {
          // tslint:disable-next-line: no-shadowed-variable
          const ref = this.storage.ref(`Proizvodi2/${doc.Podnaslov}`);
          doc.Slika = ref.getDownloadURL();
        });
        this.slicno = this.slicno.filter(obj => obj.Id !== proizvod2.Id);
      });
      this.storage.ref('Proizvodi2/' + this.proizvod2.Podnaslov).getDownloadURL().subscribe(slik => {
        this.seo.generateTags({
          title: this.proizvod2.Naslov,
          description: jQuery(this.proizvod2.Sadrzaj).text(),
          image: slik,
          slug: `proizvod/${this.proizvod2.Id}`
        });
      });
    });
    this.proizvodiService.getProizvodi2().subscribe(nedavno => {
      this.nedavno = nedavno;
      this.nedavno.forEach(doc => {
        // tslint:disable-next-line: no-shadowed-variable
        const ref = this.storage.ref(`Proizvodi2/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
      });
    });
  }
}
