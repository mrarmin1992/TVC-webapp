import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti2 } from 'src/app/models/KategorijaVijesti2';
import { Vijest2 } from 'src/app/models/Vijest2';
import { KategorijeVijesti2Service } from 'src/app/services/kategorije-vijesti2.service';
import { Vijesti2Service } from 'src/app/services/vijesti2.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';

@Component({
  selector: 'app-sve-vijesti2',
  templateUrl: './sve-vijesti2.component.html',
  styleUrls: ['./sve-vijesti2.component.css']
})
export class SveVijesti2Component implements OnInit {
  pretraga = '';
  selected = 'Sve vijesti2';
  filter: Vijest2[] = [];
  vijesti2: Vijest2[];
  kategorije: KategorijaVijesti2[];
  constructor(private vijestiService: Vijesti2Service,
              private kategorijeService: KategorijeVijesti2Service,
              private cds: ComfirmationDialogService,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
    this.vijestiService.getProducts().subscribe(vijesti2 => {
      this.vijesti2 = vijesti2;
    });
    this.kategorijeService.getKategorijeVijesti2().subscribe(kategorije => {
      this.kategorije = kategorije;
    });
  }
  onChange() {
    this.vijestiService.getByKategorija(this.selected).subscribe(vijesti2 => {
      this.vijesti2 = vijesti2;
    });
  }
  pretrazi() {
    if (this.pretraga === '') {this.vijestiService.getProducts().subscribe(vijesti2 => {
      this.vijesti2 = vijesti2;
    }); } else {
      this.vijestiService.getProducts().subscribe(vijesti2 => {
        this.vijesti2 = vijesti2;
        this.filter = this.vijesti2.filter((vijest2: Vijest2) => vijest2.Naslov.toLowerCase().includes(this.pretraga.toLowerCase()));
        this.vijesti2 = this.filter;
      });
    }
  }
  onDeleteClick(vijest2: Vijest2) {
    this.cds.confirm('Pažnja', `Jeste li sigurni da želite obrisati vijest ${vijest2.Naslov} ?`)
    .then(confirmed => {
      if (confirmed === false) {
        this.fm.show('Vijest je uspješno obrisana', {cssClass: 'alert-success', timeout: 3000});
        this.vijestiService.DeleteVijest2(vijest2);
      }
    });
  }
}

