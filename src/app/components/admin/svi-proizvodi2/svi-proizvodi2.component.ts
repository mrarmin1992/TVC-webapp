import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaProizvoda2 } from 'src/app/models/KategorijaProizvoda2';
import { Proizvod2 } from 'src/app/models/Proizvod2';
import { KategorijeProizvoda2Service } from 'src/app/services/kategorije-proizvoda2.service';
import { Proizvodi2Service } from 'src/app/services/proizvodi2.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';

@Component({
  selector: 'app-svi-proizvodi2',
  templateUrl: './svi-proizvodi2.component.html',
  styleUrls: ['./svi-proizvodi2.component.css']
})
export class SviProizvodi2Component implements OnInit {
  pretraga = '';
  selected = 'Svi proizvodi';
  filter: Proizvod2[] = [];
  proizvodi2: Proizvod2[];
  kategorije: KategorijaProizvoda2[];
  constructor(private proizvodiService: Proizvodi2Service,
              private kategorijeService: KategorijeProizvoda2Service,
              private cds: ComfirmationDialogService,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
    this.proizvodiService.getProducts().subscribe(proizvodi2 => {
      this.proizvodi2 = proizvodi2;
    });
    this.kategorijeService.getKategorijeProizvodi().subscribe(kategorije => {
      this.kategorije = kategorije;
    });
  }
  onChange() {
    this.proizvodiService.getByKategorija(this.selected).subscribe(proizvodi2 => {
      this.proizvodi2 = proizvodi2;
    });
  }
  pretrazi() {
    if (this.pretraga === '') {this.proizvodiService.getProducts().subscribe(proizvodi2 => {
      this.proizvodi2 = proizvodi2;
    }); } else {
      this.proizvodiService.getProducts().subscribe(proizvodi2 => {
        this.proizvodi2 = proizvodi2;
        this.filter = this.proizvodi2.filter((proizvod: Proizvod2) => proizvod.Naslov.toLowerCase().includes(this.pretraga.toLowerCase()));
        this.proizvodi2 = this.filter;
      });
    }
  }
  onDeleteClick(proizvod2: Proizvod2) {
    this.cds.confirm('Pažnja', `Jeste li sigurni da želite obrisati proizvod ${proizvod2.Naslov} ?`)
    .then(confirmed => {
      if (confirmed === false) {
        this.fm.show('Proizvo je uspješno obrisan', {cssClass: 'alert-success', timeout: 3000});
        this.proizvodiService.DeleteProizvod(proizvod2);
      }
    });
  }
}


