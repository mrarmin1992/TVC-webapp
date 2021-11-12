import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaProizvoda2 } from 'src/app/models/KategorijaProizvoda2';
import { KategorijeProizvoda2Service } from 'src/app/services/kategorije-proizvoda2.service';
import { Proizvodi2Service } from 'src/app/services/proizvodi2.service';

@Component({
  selector: 'app-kategorije-proizvoda2-izmjena',
  templateUrl: './kategorije-proizvoda2-izmjena.component.html',
  styleUrls: ['./kategorije-proizvoda2-izmjena.component.css']
})
export class KategorijeProizvoda2IzmjenaComponent implements OnInit {
  stara: string;
  id: string;
  category: string;
  kategorija: KategorijaProizvoda2 = {
    Naziv: ''
  };
  constructor(private router: Router,
              private route: ActivatedRoute,
              private kategorijeService: KategorijeProizvoda2Service,
              private fm: FlashMessagesService,
              private proizvodiService: Proizvodi2Service) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.kategorijeService.getKategorijaProizvodi2(this.id).subscribe(kategorija => {
      this.kategorija = kategorija;
      this.stara = kategorija.Naziv;
    });
  }
  onSubmit({value, valid}: {value: KategorijaProizvoda2, valid: boolean}) {
    if (!valid) {
      console.log(valid);
    } else {
        this.kategorijeService.updateKategorijaProizvodi2(value, this.id);
        this.proizvodiService.getByKategorija(this.stara).forEach(values => {
          values.forEach(doc => {
            this.proizvodiService.updateKategorija(doc, this.kategorija.Naziv);
          });
        });
        this.fm.show('Kategorija je uspješno izmijenjena', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate([`/dashboard/kategorije-proizvodi2`]);
    }
  }
}

