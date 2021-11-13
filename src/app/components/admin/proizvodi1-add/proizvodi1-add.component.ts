import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaProizvoda1 } from 'src/app/models/KategorijaProizvoda1';
import { Proizvod1 } from 'src/app/models/Proizvod1';
import { KategorijeProizvoda1Service } from 'src/app/services/kategorije-proizvoda1.service';
import { MyImageService } from 'src/app/services/my-image.service';
import { Proizvodi1Service } from 'src/app/services/proizvodi1.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}



@Component({
  selector: 'app-proizvodi1-add',
  templateUrl: './proizvodi1-add.component.html',
  styleUrls: ['./proizvodi1-add.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class Proizvodi1AddComponent implements OnInit {


selectedFile: ImageSnippet;
kategorije: KategorijaProizvoda1[];
selectedObj = 'Odaberite kategoriju';
constructor(private proizvodiService: Proizvodi1Service,
            private kategorijeService: KategorijeProizvoda1Service,
            private router: Router,
            private imageService: MyImageService,
            private fm: FlashMessagesService,
            private cds: ComfirmationDialogService) { }
@ViewChild('fromRTE')
private rteEle: RichTextEditorComponent;
public value: string = null;
proizvod1: Proizvod1 = {
  Naslov: '',
  Podnaslov: '',
  Sadrzaj: '',
  Kategorija: '',
  Datum: new Date(),
  Fokus: false,
  Objava: ''
};
processFile(imageInput: any) {
  const file: File = imageInput.files[0];

  const reader = new FileReader();

  reader.addEventListener('load', (event: any) => {
    this.selectedFile = new ImageSnippet(event.target.result, file);
  });
  reader.readAsDataURL(file);
}
  rteCreated(): void {
    this.rteEle.element.focus();
}

ngOnInit(): void {
  this.kategorijeService.getKategorijeProizvodi().subscribe(kategorije => {
    this.kategorije = kategorije;
  });
}

onSubmit(form: NgForm): void {
    if (form.invalid || this.selectedObj === 'Odaberite kategoriju') {
      this.cds.alert('Validacija', 'Popunite sva tražena polja');

    } else {
      this.proizvod1.Kategorija = this.selectedObj;
      this.proizvod1.Sadrzaj = this.rteEle.value;
      this.proizvodiService.DodajProizvod1(this.proizvod1);
      this.router.navigate([`dashboard/proizvodi1`]);
      this.imageService.uploadImage(this.selectedFile.file, this.proizvod1.Podnaslov, 'Proizvodi1');
      this.fm.show('Proizvod je uspješno kreiran', {cssClass: 'alert-success', timeout: 3000});
    }
}
}
