import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { HtmlEditorService, ImageService, ImageSettingsModel, LinkService, PasteCleanupSettingsModel, RichTextEditorComponent, TableSettingsModel, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti1 } from 'src/app/models/KategorijaVijesti1';
import { Vijest1 } from 'src/app/models/Vijest1';
import { KategorijeVijesti1Service } from 'src/app/services/kategorije-vijesti1.service';
import { MyImageService } from 'src/app/services/my-image.service';
import { Vijesti1Service } from 'src/app/services/vijesti1.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';



class ImageSnippet {
  constructor(public src: string, public file: File) {}
}



@Component({
  selector: 'app-vijesti1-add',
  templateUrl: './vijesti1-add.component.html',
  styleUrls: ['./vijesti1-add.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
})
export class Vijesti1AddComponent implements OnInit {
// tslint:disable-next-line: max-line-length
public insertImageSettings: ImageSettingsModel = { allowedTypes: ['.jpeg', '.jpg', '.png'], display: 'inline', width: 'auto', height: 'auto', saveFormat: 'Blob', saveUrl: null, path: null };
public maxLength = 500;
// tslint:disable-next-line: max-line-length
public pasteCleanupSettings: PasteCleanupSettingsModel = { prompt: false, deniedAttrs: null, allowedStyleProps: ['background', 'background-color', 'border', 'border-bottom', 'border-left', 'border-radius', 'border-right', 'border-style', 'border-top', 'border-width', 'clear', 'color', 'cursor', 'direction', 'display', 'float', 'font', 'font-family', 'font-size', 'font-weight', 'font-style', 'height', 'left', 'line-height', 'margin', 'margin-top', 'margin-left', 'margin' ]};
public saveInterval = 500;
// tslint:disable-next-line: max-line-length
public tableSettings: TableSettingsModel = { width: '100%', styles: [{ text: 'Dashed Borders', command: 'Table', subCommand: 'Dashed' }, { text: 'Alternate Rows', command: 'Table', subCommand: 'Alternate' }], resize: true, minWidth: 0, maxWidth: null};

selectedFile: ImageSnippet;
kategorije: KategorijaVijesti1[];
selectedObj = 'Odaberite kategoriju';
constructor(private vijestiService: Vijesti1Service,
            private kategorijeService: KategorijeVijesti1Service,
            private router: Router,
            private imageService: MyImageService,
            private fm: FlashMessagesService,
            private cds: ComfirmationDialogService) { }
@ViewChild('fromRTE')
private rteEle: RichTextEditorComponent;
public quickTools: object = {
  image: [
      'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '-', 'Display', 'AltText', 'Dimension']
};
public value: string = null;
vijest1: Vijest1 = {
  Naslov: '',
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
  this.kategorijeService.getKategorijeVijesti1().subscribe(kategorije => {
    this.kategorije = kategorije;
  });
}

onSubmit(form: NgForm): void {
    if (form.invalid || this.selectedObj === 'Odaberite kategoriju') {
      this.cds.alert('Validacija', 'Popunite sva tražena polja');

    } else {
      this.vijest1.Kategorija = this.selectedObj;
      this.vijest1.Sadrzaj = this.rteEle.value;
      this.vijestiService.DodajVijest1(this.vijest1);
      this.router.navigate([`dashboard/vijesti1`]);
      this.imageService.uploadImage(this.selectedFile.file, this.vijest1.Podnaslov, 'Vijesti1');
      this.fm.show('Vijest je uspješno kreirana', {cssClass: 'alert-success', timeout: 3000});
    }
}


}
