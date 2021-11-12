import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti1 } from 'src/app/models/KategorijaVijesti1';
import { Vijest1 } from 'src/app/models/Vijest1';
import { KategorijeVijesti1Service } from 'src/app/services/kategorije-vijesti1.service';
import { Vijesti1Service } from 'src/app/services/vijesti1.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';

@Component({
  selector: 'app-sve-vijesti1',
  templateUrl: './sve-vijesti1.component.html',
  styleUrls: ['./sve-vijesti1.component.css']
})
export class SveVijesti1Component implements OnInit {
  pretraga = '';
  selected = 'Sve vijesti1';
  filter: Vijest1[] = [];
  vijesti1: Vijest1[];
  kategorije: KategorijaVijesti1[];
  constructor(private vijestiService: Vijesti1Service,
              private kategorijeService: KategorijeVijesti1Service,
              private cds: ComfirmationDialogService,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
    this.vijestiService.getProducts().subscribe(vijesti1 => {
      this.vijesti1 = vijesti1;
    });
    this.kategorijeService.getKategorijeVijesti1().subscribe(kategorije => {
      this.kategorije = kategorije;
    });
  }
  onChange() {
    this.vijestiService.getByKategorija(this.selected).subscribe(vijesti1 => {
      this.vijesti1 = vijesti1;
    });
  }
  pretrazi() {
    if (this.pretraga === '') {this.vijestiService.getProducts().subscribe(vijesti1 => {
      this.vijesti1 = vijesti1;
    }); } else {
      this.vijestiService.getProducts().subscribe(vijesti1 => {
        this.vijesti1 = vijesti1;
        this.filter = this.vijesti1.filter((vijest1: Vijest1) => vijest1.Naslov.toLowerCase().includes(this.pretraga.toLowerCase()));
        this.vijesti1 = this.filter;
      });
    }
  }
  onDeleteClick(vijest1: Vijest1) {
    this.cds.confirm('Pažnja', `Jeste li sigurni da želite obrisati vijest ${vijest1.Naslov} ?`)
    .then(confirmed => {
      if (confirmed === false) {
        this.fm.show('Vijest je uspješno obrisana', {cssClass: 'alert-success', timeout: 3000});
        this.vijestiService.DeleteVijest1(vijest1);
      }
    });
  }
}
