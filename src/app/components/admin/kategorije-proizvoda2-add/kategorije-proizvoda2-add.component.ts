import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaProizvoda2 } from 'src/app/models/KategorijaProizvoda2';
import { KategorijeProizvoda2Service } from 'src/app/services/kategorije-proizvoda2.service';

@Component({
  selector: 'app-kategorije-proizvoda2-add',
  templateUrl: './kategorije-proizvoda2-add.component.html',
  styleUrls: ['./kategorije-proizvoda2-add.component.css']
})
export class KategorijeProizvoda2AddComponent implements OnInit {

  kategorija: KategorijaProizvoda2 = {
    Naziv: ''
  };
  constructor(private kategorije: KategorijeProizvoda2Service,
              private router: Router,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
  }
  onSubmit({value, valid}: {value: KategorijaProizvoda2, valid: boolean}) {
    if (!valid) {
      console.log(value);
    } else {
      this.kategorije.addkategorijaProizvodi2(this.kategorija);
      this.fm.show('Nova kategorija je uspješno dodana', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate([`dashboard/kategorije-proizvodi2`]);
    }
  }
}
