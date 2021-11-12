import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti2 } from 'src/app/models/KategorijaVijesti2';
import { KategorijeVijesti2Service } from 'src/app/services/kategorije-vijesti2.service';
import { Vijesti2Service } from 'src/app/services/vijesti2.service';

@Component({
  selector: 'app-kategorije-vijesti2-izmjena',
  templateUrl: './kategorije-vijesti2-izmjena.component.html',
  styleUrls: ['./kategorije-vijesti2-izmjena.component.css']
})
export class KategorijeVijesti2IzmjenaComponent implements OnInit {
  stara: string;
  id: string;
  category: string;
  kategorija: KategorijaVijesti2 = {
    Naziv: ''
  };
  constructor(private router: Router,
              private route: ActivatedRoute,
              private kategorijeService: KategorijeVijesti2Service,
              private fm: FlashMessagesService,
              private vijestiService: Vijesti2Service) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.kategorijeService.getKategorijaVijesti2(this.id).subscribe(kategorija => {
      this.kategorija = kategorija;
      this.stara = kategorija.Naziv;
    });
  }
  onSubmit({value, valid}: {value: KategorijaVijesti2, valid: boolean}) {
    if (!valid) {
      console.log(valid);
    } else {
        this.kategorijeService.updateKategorijaVijesti2(value, this.id);
        this.vijestiService.getByKategorija(this.stara).forEach(values => {
          values.forEach(doc => {
            this.vijestiService.updateKategorija(doc, this.kategorija.Naziv);
          });
        });
        this.fm.show('Kategorija je uspješno izmijenjena', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate([`/dashboard/kategorije-vijesti2`]);
    }
  }
}
