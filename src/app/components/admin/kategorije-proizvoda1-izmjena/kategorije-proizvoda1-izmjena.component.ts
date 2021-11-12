import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaProizvoda1 } from 'src/app/models/KategorijaProizvoda1';
import { KategorijeProizvoda1Service } from 'src/app/services/kategorije-proizvoda1.service';
import { Proizvodi1Service } from 'src/app/services/proizvodi1.service';

@Component({
  selector: 'app-kategorije-proizvoda1-izmjena',
  templateUrl: './kategorije-proizvoda1-izmjena.component.html',
  styleUrls: ['./kategorije-proizvoda1-izmjena.component.css']
})
export class KategorijeProizvoda1IzmjenaComponent implements OnInit {
  stara: string;
  id: string;
  category: string;
  kategorija: KategorijaProizvoda1 = {
    Naziv: ''
  };
  constructor(private router: Router,
              private route: ActivatedRoute,
              private kategorijeService: KategorijeProizvoda1Service,
              private fm: FlashMessagesService,
              private proizvodiService: Proizvodi1Service) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.kategorijeService.getKategorijaProizvodi1(this.id).subscribe(kategorija => {
      this.kategorija = kategorija;
      this.stara = kategorija.Naziv;
    });
  }
  onSubmit({value, valid}: {value: KategorijaProizvoda1, valid: boolean}) {
    if (!valid) {
      console.log(valid);
    } else {
        this.kategorijeService.updateKategorijaProizvodi1(value, this.id);
        this.proizvodiService.getByKategorija(this.stara).forEach(values => {
          values.forEach(doc => {
            this.proizvodiService.updateKategorija(doc, this.kategorija.Naziv);
          });
        });
        this.fm.show('Kategorija je uspješno izmijenjena', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate([`/dashboard/kategorije-proizvodi1`]);
    }
  }
}


