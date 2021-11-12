import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti2 } from 'src/app/models/KategorijaVijesti2';
import { KategorijeVijesti2Service } from 'src/app/services/kategorije-vijesti2.service';

@Component({
  selector: 'app-kategorije-vijesti2-add',
  templateUrl: './kategorije-vijesti2-add.component.html',
  styleUrls: ['./kategorije-vijesti2-add.component.css']
})
export class KategorijeVijesti2AddComponent implements OnInit {


  kategorija: KategorijaVijesti2 = {
    Naziv: ''
  };
  constructor(private kategorije: KategorijeVijesti2Service,
              private router: Router,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
  }
  onSubmit({value, valid}: {value: KategorijaVijesti2, valid: boolean}) {
    if (!valid) {
      console.log(value);
    } else {
      this.kategorije.addkategorijaVijesti2(this.kategorija);
      this.fm.show('Nova kategorija je uspješno dodana', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate([`dashboard/kategorije-vijesti2`]);
    }
  }
}
