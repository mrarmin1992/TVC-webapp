import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti1 } from 'src/app/models/KategorijaVijesti1';
import { KategorijeVijesti1Service } from 'src/app/services/kategorije-vijesti1.service';
import { Vijesti1Service } from 'src/app/services/vijesti1.service';

@Component({
  selector: 'app-kategorije-vijesti1-izmjena',
  templateUrl: './kategorije-vijesti1-izmjena.component.html',
  styleUrls: ['./kategorije-vijesti1-izmjena.component.css']
})
export class KategorijeVijesti1IzmjenaComponent implements OnInit {

  stara: string;
  id: string;
  category: string;
  kategorija: KategorijaVijesti1 = {
    Naziv: ''
  };
  constructor(private router: Router,
              private route: ActivatedRoute,
              private kategorijeService: KategorijeVijesti1Service,
              private fm: FlashMessagesService,
              private vijestiService: Vijesti1Service) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.kategorijeService.getKategorijaVijesti1(this.id).subscribe(kategorija => {
      this.kategorija = kategorija;
      this.stara = kategorija.Naziv;
    });
  }
  onSubmit({value, valid}: {value: KategorijaVijesti1, valid: boolean}) {
    if (!valid) {
      console.log(valid);
    } else {
        this.kategorijeService.updateKategorijaVijesti1(value, this.id);
        this.vijestiService.getByKategorija(this.stara).forEach(values => {
          values.forEach(doc => {
            this.vijestiService.updateKategorija(doc, this.kategorija.Naziv);
          });
        });
        this.fm.show('Kategorija je uspješno izmijenjena', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate([`/dashboard/kategorije-vijesti1`]);
    }
  }
}
