import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { VijestiService } from '../../../services/vijesti.service';
import { KategorijeVijestiService } from '../../../services/kategorije-vijesti.service';
import { MyImageService } from '../../../services/my-image.service';
import { ToolbarService, LinkService, ImageService,
   // tslint:disable-next-line: max-line-length
   HtmlEditorService, RichTextEditorComponent, ImageSettingsModel, PasteCleanupSettingsModel, TableSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ComfirmationDialogService } from '../../confirmation-dialog/comfirmation-dialog.service';

import { Vijest } from 'src/app/models/Vijest';
import { KategorijaVijesti } from '../../../models/KategorijaVijesti';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-vijesti-add',
  templateUrl: './vijesti-add.component.html',
  styleUrls: ['./vijesti-add.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
})
export class VijestiAddComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  public insertImageSettings: ImageSettingsModel = { allowedTypes: ['.jpeg', '.jpg', '.png'], display: 'inline', width: 'auto', height: 'auto', saveFormat: 'Blob', saveUrl: null, path: null };
  public maxLength = 500;
  // tslint:disable-next-line: max-line-length
  public pasteCleanupSettings: PasteCleanupSettingsModel = { prompt: false, deniedAttrs: null, allowedStyleProps: ['background', 'background-color', 'border', 'border-bottom', 'border-left', 'border-radius', 'border-right', 'border-style', 'border-top', 'border-width', 'clear', 'color', 'cursor', 'direction', 'display', 'float', 'font', 'font-family', 'font-size', 'font-weight', 'font-style', 'height', 'left', 'line-height', 'margin', 'margin-top', 'margin-left', 'margin' ]};
  public saveInterval = 500;
  // tslint:disable-next-line: max-line-length
  public tableSettings: TableSettingsModel = { width: '100%', styles: [{ text: 'Dashed Borders', command: 'Table', subCommand: 'Dashed' }, { text: 'Alternate Rows', command: 'Table', subCommand: 'Alternate' }], resize: true, minWidth: 0, maxWidth: null};

  selectedFile: ImageSnippet;
  kategorije: KategorijaVijesti[];
  selectedObj = 'Odaberite kategoriju';
  constructor(private vijestiService: VijestiService,
              private kategorijeService: KategorijeVijestiService,
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
  vijest: Vijest = {
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
    this.kategorijeService.getKategorijeVijesti().subscribe(kategorije => {
      this.kategorije = kategorije;
    });
  }

  onSubmit(form: NgForm): void {
      if (form.invalid || this.selectedObj === 'Odaberite kategoriju') {
        this.cds.alert('Validacija', 'Popunite sva tražena polja');

      } else {
        this.vijest.Kategorija = this.selectedObj;
        this.vijest.Sadrzaj = this.rteEle.value;
        this.vijestiService.DodajVijest(this.vijest);
        this.router.navigate([`dashboard/vijesti`]);
        this.imageService.uploadImage(this.selectedFile.file, this.vijest.Podnaslov, 'Vijesti');
        this.fm.show('Vijest je uspješno kreirana', {cssClass: 'alert-success', timeout: 3000});
      }
  }


}
