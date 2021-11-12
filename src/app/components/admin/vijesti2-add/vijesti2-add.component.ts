import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { HtmlEditorService, ImageService, ImageSettingsModel, LinkService, PasteCleanupSettingsModel, RichTextEditorComponent, TableSettingsModel, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti2 } from 'src/app/models/KategorijaVijesti2';
import { Vijest2 } from 'src/app/models/Vijest2';
import { KategorijeVijesti2Service } from 'src/app/services/kategorije-vijesti2.service';
import { MyImageService } from 'src/app/services/my-image.service';
import { Vijesti2Service } from 'src/app/services/vijesti2.service';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';



class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-vijesti2-add',
  templateUrl: './vijesti2-add.component.html',
  styleUrls: ['./vijesti2-add.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
})
export class Vijesti2AddComponent implements OnInit {
// tslint:disable-next-line: max-line-length
public insertImageSettings: ImageSettingsModel = { allowedTypes: ['.jpeg', '.jpg', '.png'], display: 'inline', width: 'auto', height: 'auto', saveFormat: 'Blob', saveUrl: null, path: null };
public maxLength = 500;
// tslint:disable-next-line: max-line-length
public pasteCleanupSettings: PasteCleanupSettingsModel = { prompt: false, deniedAttrs: null, allowedStyleProps: ['background', 'background-color', 'border', 'border-bottom', 'border-left', 'border-radius', 'border-right', 'border-style', 'border-top', 'border-width', 'clear', 'color', 'cursor', 'direction', 'display', 'float', 'font', 'font-family', 'font-size', 'font-weight', 'font-style', 'height', 'left', 'line-height', 'margin', 'margin-top', 'margin-left', 'margin' ]};
public saveInterval = 500;
// tslint:disable-next-line: max-line-length
public tableSettings: TableSettingsModel = { width: '100%', styles: [{ text: 'Dashed Borders', command: 'Table', subCommand: 'Dashed' }, { text: 'Alternate Rows', command: 'Table', subCommand: 'Alternate' }], resize: true, minWidth: 0, maxWidth: null};

selectedFile: ImageSnippet;
kategorije: KategorijaVijesti2[];
selectedObj = 'Odaberite kategoriju';
constructor(private vijestiService: Vijesti2Service,
            private kategorijeService: KategorijeVijesti2Service,
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
vijest2: Vijest2 = {
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
  this.kategorijeService.getKategorijeVijesti2().subscribe(kategorije => {
    this.kategorije = kategorije;
  });
}

onSubmit(form: NgForm): void {
    if (form.invalid || this.selectedObj === 'Odaberite kategoriju') {
      this.cds.alert('Validacija', 'Popunite sva tražena polja');

    } else {
      this.vijest2.Kategorija = this.selectedObj;
      this.vijest2.Sadrzaj = this.rteEle.value;
      this.vijestiService.DodajVijest2(this.vijest2);
      this.router.navigate([`dashboard/vijesti2`]);
      this.imageService.uploadImage(this.selectedFile.file, this.vijest2.Podnaslov, 'Vijesti2');
      this.fm.show('Vijest je uspješno kreirana', {cssClass: 'alert-success', timeout: 3000});
    }
}


}
