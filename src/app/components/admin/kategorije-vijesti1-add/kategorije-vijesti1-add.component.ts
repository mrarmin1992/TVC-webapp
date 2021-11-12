import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti1 } from 'src/app/models/KategorijaVijesti1';
import { KategorijeVijesti1Service } from 'src/app/services/kategorije-vijesti1.service';

@Component({
  selector: 'app-kategorije-vijesti1-add',
  templateUrl: './kategorije-vijesti1-add.component.html',
  styleUrls: ['./kategorije-vijesti1-add.component.css']
})
export class KategorijeVijesti1AddComponent implements OnInit {

  kategorija: KategorijaVijesti1 = {
    Naziv: ''
  };
  constructor(private kategorije: KategorijeVijesti1Service,
              private router: Router,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
  }
  onSubmit({value, valid}: {value: KategorijaVijesti1, valid: boolean}) {
    if (!valid) {
      console.log(value);
    } else {
      this.kategorije.addkategorijaVijesti1(this.kategorija);
      this.fm.show('Nova kategorija je uspješno dodana', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate([`dashboard/kategorije-vijesti1`]);
    }
  }
}
