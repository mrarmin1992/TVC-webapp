import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Proizvod1 } from 'src/app/models/Proizvod1';
import { FooterService } from 'src/app/services/footer.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { Proizvodi1Service } from 'src/app/services/proizvodi1.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-proizvod1',
  templateUrl: './proizvod1.component.html',
  styleUrls: ['./proizvod1.component.css']
})
export class Proizvod1Component implements OnInit {

  id: any;
  proizvod1: Proizvod1;
  slicno: Proizvod1[];
  nedavno: Proizvod1[];
  constructor(private proizvodiService: Proizvodi1Service,
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
    this.proizvodiService.getProizvod1('proizvodi1', this.id).subscribe(proizvod1 => {
      this.proizvod1 = proizvod1;
      const ref = this.storage.ref(`Proizvodi1/${this.proizvod1.Podnaslov}`);
      this.proizvod1.Slika = ref.getDownloadURL();
      // tslint:disable-next-line: max-line-length
      // document.getElementById('shareFB').setAttribute('data-href', encodeURIComponent(document.URL));
      // tslint:disable-next-line: max-line-length
      // document.getElementById('shareFBLink').setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL));
      this.proizvodiService.getByKategorija(proizvod1.Kategorija).subscribe(slicno => {
        this.slicno = slicno;
        this.slicno.forEach(doc => {
          // tslint:disable-next-line: no-shadowed-variable
          const ref = this.storage.ref(`Proizvodi1/${doc.Podnaslov}`);
          doc.Slika = ref.getDownloadURL();
        });
        this.slicno = this.slicno.filter(obj => obj.Id !== proizvod1.Id);
      });
      this.storage.ref('Proizvodi1/' + this.proizvod1.Podnaslov).getDownloadURL().subscribe(slik => {
        this.seo.generateTags({
          title: this.proizvod1.Naslov,
          description: jQuery(this.proizvod1.Sadrzaj).text(),
          image: slik,
          slug: `proizvod/${this.proizvod1.Id}`
        });
      });
    });
    this.proizvodiService.getProizvodi1().subscribe(nedavno => {
      this.nedavno = nedavno;
      this.nedavno.forEach(doc => {
        // tslint:disable-next-line: no-shadowed-variable
        const ref = this.storage.ref(`Proizvodi1/${doc.Podnaslov}`);
        doc.Slika = ref.getDownloadURL();
      });
    });
  }
}
