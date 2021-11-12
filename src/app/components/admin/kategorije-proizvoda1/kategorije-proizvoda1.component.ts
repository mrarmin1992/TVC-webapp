import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaProizvoda1 } from 'src/app/models/KategorijaProizvoda1';
import { KategorijeProizvoda1Service } from 'src/app/services/kategorije-proizvoda1.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';

@Component({
  selector: 'app-kategorije-proizvoda1',
  templateUrl: './kategorije-proizvoda1.component.html',
  styleUrls: ['./kategorije-proizvoda1.component.css']
})
export class KategorijeProizvoda1Component implements OnInit {
  kategorijaProizvoda1: KategorijaProizvoda1[];
  constructor(private kategorije: KategorijeProizvoda1Service,
              private fm: FlashMessagesService,
              private cds: ComfirmationDialogService) { }

  ngOnInit(): void {
    this.kategorije.getKategorijeProizvodi().subscribe(kategorije => {
      this.kategorijaProizvoda1 = kategorije;
    });
  }
  onDeleteClick(kategorija: KategorijaProizvoda1) {
    this.cds.confirm('Pažnja', `Jeste li sigurni da želite obrisati kategoriju ${kategorija.Naziv} ?`)
    .then(confirmed => {
      if (confirmed === false) {
        this.fm.show('Kategorija je uspješno obrisana', {cssClass: 'alert-success', timeout: 3000});
        this.kategorije.deleteKategorijaProizvodi1(kategorija.Id);
      }
    });
  }
}
