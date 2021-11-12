import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti1 } from 'src/app/models/KategorijaVijesti1';
import { KategorijeVijesti1Service } from 'src/app/services/kategorije-vijesti1.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';

@Component({
  selector: 'app-kategorije-vijesti1',
  templateUrl: './kategorije-vijesti1.component.html',
  styleUrls: ['./kategorije-vijesti1.component.css']
})
export class KategorijeVijesti1Component implements OnInit {
  kategorijeVijesti1: KategorijaVijesti1[];
  constructor(private kategorije: KategorijeVijesti1Service,
              private fm: FlashMessagesService,
              private cds: ComfirmationDialogService) { }

  ngOnInit(): void {
    this.kategorije.getKategorijeVijesti1().subscribe(kategorije => {
      this.kategorijeVijesti1 = kategorije;
    });
  }
  onDeleteClick(kategorija: KategorijaVijesti1) {
    this.cds.confirm('Pažnja', `Jeste li sigurni da želite obrisati kategoriju ${kategorija.Naziv} ?`)
    .then(confirmed => {
      if (confirmed === false) {
        this.fm.show('Kategorija je uspješno obrisana', {cssClass: 'alert-success', timeout: 3000});
        this.kategorije.deleteKategorijaVijesti1(kategorija.Id);
      }
    });
  }
}
