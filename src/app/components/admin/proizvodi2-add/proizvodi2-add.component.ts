import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaProizvoda2 } from 'src/app/models/KategorijaProizvoda2';
import { Proizvod2 } from 'src/app/models/Proizvod2';
import { KategorijeProizvoda2Service } from 'src/app/services/kategorije-proizvoda2.service';
import { MyImageService } from 'src/app/services/my-image.service';
import { Proizvodi2Service } from 'src/app/services/proizvodi2.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';



class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-proizvodi2-add',
  templateUrl: './proizvodi2-add.component.html',
  styleUrls: ['./proizvodi2-add.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class Proizvodi2AddComponent implements OnInit {

  selectedFile: ImageSnippet;
  kategorije: KategorijaProizvoda2[];
  selectedObj = 'Odaberite kategoriju';
  constructor(private proizvodiService: Proizvodi2Service,
              private kategorijeService: KategorijeProizvoda2Service,
              private router: Router,
              private imageService: MyImageService,
              private fm: FlashMessagesService,
              private cds: ComfirmationDialogService) { }
  @ViewChild('fromRTE')
  private rteEle: RichTextEditorComponent;
  public value: string = null;
  proizvod2: Proizvod2 = {
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
        this.proizvod2.Kategorija = this.selectedObj;
        this.proizvod2.Sadrzaj = this.rteEle.value;
        this.proizvodiService.DodajProizvod(this.proizvod2);
        this.router.navigate([`dashboard/proizvodi2`]);
        this.imageService.uploadImage(this.selectedFile.file, this.proizvod2.Podnaslov, 'Proizvodi2');
        this.fm.show('Proizvod je uspješno kreiran', {cssClass: 'alert-success', timeout: 3000});
      }
  }
}
