import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaProizvoda1 } from 'src/app/models/KategorijaProizvoda1';
import { KategorijeProizvoda1Service } from 'src/app/services/kategorije-proizvoda1.service';

@Component({
  selector: 'app-kategorije-proizvoda1-add',
  templateUrl: './kategorije-proizvoda1-add.component.html',
  styleUrls: ['./kategorije-proizvoda1-add.component.css']
})
export class KategorijeProizvoda1AddComponent implements OnInit {

  kategorija: KategorijaProizvoda1 = {
    Naziv: ''
  };
  constructor(private kategorije: KategorijeProizvoda1Service,
              private router: Router,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
  }
  onSubmit({value, valid}: {value: KategorijaProizvoda1, valid: boolean}) {
    if (!valid) {
      console.log(value);
    } else {
      this.kategorije.addkategorijaProizvodi1(this.kategorija);
      this.fm.show('Nova kategorija je uspješno dodana', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate([`dashboard/kategorije-proizvodi1`]);
    }
  }
}
