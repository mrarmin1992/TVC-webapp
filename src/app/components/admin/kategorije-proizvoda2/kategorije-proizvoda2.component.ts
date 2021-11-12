import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaProizvoda2 } from 'src/app/models/KategorijaProizvoda2';
import { KategorijeProizvoda2Service } from 'src/app/services/kategorije-proizvoda2.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';

@Component({
  selector: 'app-kategorije-proizvoda2',
  templateUrl: './kategorije-proizvoda2.component.html',
  styleUrls: ['./kategorije-proizvoda2.component.css']
})
export class KategorijeProizvoda2Component implements OnInit {
  kategorijaProizvoda2: KategorijaProizvoda2[];
  constructor(private kategorije: KategorijeProizvoda2Service,
              private fm: FlashMessagesService,
              private cds: ComfirmationDialogService) { }

  ngOnInit(): void {
    this.kategorije.getKategorijeProizvodi().subscribe(kategorije => {
      this.kategorijaProizvoda2 = kategorije;
    });
  }
  onDeleteClick(kategorija: KategorijaProizvoda2) {
    this.cds.confirm('Pažnja', `Jeste li sigurni da želite obrisati kategoriju ${kategorija.Naziv} ?`)
    .then(confirmed => {
      if (confirmed === false) {
        this.fm.show('Kategorija je uspješno obrisana', {cssClass: 'alert-success', timeout: 3000});
        this.kategorije.deleteKategorijaProizvodi2(kategorija.Id);
      }
    });
  }
}
