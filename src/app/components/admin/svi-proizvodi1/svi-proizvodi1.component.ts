import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaProizvoda1 } from 'src/app/models/KategorijaProizvoda1';
import { Proizvod1 } from 'src/app/models/Proizvod1';
import { KategorijeProizvoda1Service } from 'src/app/services/kategorije-proizvoda1.service';
import { Proizvodi1Service } from 'src/app/services/proizvodi1.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';

@Component({
  selector: 'app-svi-proizvodi1',
  templateUrl: './svi-proizvodi1.component.html',
  styleUrls: ['./svi-proizvodi1.component.css']
})
export class SviProizvodi1Component implements OnInit {
  pretraga = '';
  selected = 'Svi proizvodi';
  filter: Proizvod1[] = [];
  proizvodi1: Proizvod1[];
  kategorije: KategorijaProizvoda1[];
  constructor(private proizvodiService: Proizvodi1Service,
              private kategorijeService: KategorijeProizvoda1Service,
              private cds: ComfirmationDialogService,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
    this.proizvodiService.getProducts().subscribe(proizvodi1 => {
      this.proizvodi1 = proizvodi1;
    });
    this.kategorijeService.getKategorijeProizvodi().subscribe(kategorije => {
      this.kategorije = kategorije;
    });
  }
  onChange() {
    this.proizvodiService.getByKategorija(this.selected).subscribe(proizvodi1 => {
      this.proizvodi1 = proizvodi1;
    });
  }
  pretrazi() {
    if (this.pretraga === '') {this.proizvodiService.getProducts().subscribe(proizvodi1 => {
      this.proizvodi1 = proizvodi1;
    }); } else {
      this.proizvodiService.getProducts().subscribe(proizvodi1 => {
        this.proizvodi1 = proizvodi1;
        // tslint:disable-next-line: max-line-length
        this.filter = this.proizvodi1.filter((proizvod1: Proizvod1) => proizvod1.Naslov.toLowerCase().includes(this.pretraga.toLowerCase()));
        this.proizvodi1 = this.filter;
      });
    }
  }
  onDeleteClick(proizvod1: Proizvod1) {
    this.cds.confirm('Pažnja', `Jeste li sigurni da želite obrisati proizvod ${proizvod1.Naslov} ?`)
    .then(confirmed => {
      if (confirmed === false) {
        this.fm.show('Proizvo je uspješno obrisan', {cssClass: 'alert-success', timeout: 3000});
        this.proizvodiService.DeleteProizvod1(proizvod1);
      }
    });
  }
}

