import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti2 } from 'src/app/models/KategorijaVijesti2';
import { KategorijeVijesti2Service } from 'src/app/services/kategorije-vijesti2.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';

@Component({
  selector: 'app-kategorije-vijesti2',
  templateUrl: './kategorije-vijesti2.component.html',
  styleUrls: ['./kategorije-vijesti2.component.css']
})
export class KategorijeVijesti2Component implements OnInit {
  kategorijeVijesti2: KategorijaVijesti2[];
  constructor(private kategorije: KategorijeVijesti2Service,
              private fm: FlashMessagesService,
              private cds: ComfirmationDialogService) { }

  ngOnInit(): void {
    this.kategorije.getKategorijeVijesti2().subscribe(kategorije => {
      this.kategorijeVijesti2 = kategorije;
    });
  }
  onDeleteClick(kategorija: KategorijaVijesti2) {
    this.cds.confirm('Pažnja', `Jeste li sigurni da želite obrisati kategoriju ${kategorija.Naziv} ?`)
    .then(confirmed => {
      if (confirmed === false) {
        this.fm.show('Kategorija je uspješno obrisana', {cssClass: 'alert-success', timeout: 3000});
        this.kategorije.deleteKategorijaVijesti2(kategorija.Id);
      }
    });
  }
}
