import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti } from 'src/app/models/KategorijaVijesti';
import { KategorijaVijesti2 } from 'src/app/models/KategorijaVijesti2';
import { Vijest } from 'src/app/models/Vijest';
import { Vijest2 } from 'src/app/models/Vijest2';
import { KategorijeVijestiService } from 'src/app/services/kategorije-vijesti.service';
import { KategorijeVijesti2Service } from 'src/app/services/kategorije-vijesti2.service';
import { MyImageService } from 'src/app/services/my-image.service';
import { VijestiService } from 'src/app/services/vijesti.service';
import { Vijesti2Service } from 'src/app/services/vijesti2.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-vijesti2-izmjena',
  templateUrl: './vijesti2-izmjena.component.html',
  styleUrls: ['./vijesti2-izmjena.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class Vijesti2IzmjenaComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<Vijest2>;
  @ViewChild('fromRTE')
  private rteEle: RichTextEditorComponent;
  public value: string = null;
  public quickTools: object = {
    image: [
        'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '-', 'Display', 'AltText', 'Dimension']
};
  forma: FormGroup;
  url: 'https://console.firebase.google.com/u/2/project/obrazovanje-odraslih/storage/obrazovanje-odraslih.appspot.com/files~2FVijesti';
  id: string;
  category: string;
  selectedFile: ImageSnippet;
  vijest2: Vijest2;
  selectedObj: string;
  kategorije: KategorijaVijesti2[];

  constructor(private storage: AngularFireStorage,
              private vijestiService: Vijesti2Service,
              private imageService: MyImageService,
              private kategorijeService: KategorijeVijesti2Service,
              private router: Router,
              private route: ActivatedRoute,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.vijestiService.getVijest2('vijesti2', this.id).subscribe(vijest2 => {
      this.vijest2 = vijest2;
      this.selectedObj = this.vijest2.Kategorija;
      this.value = this.vijest2.Sadrzaj;
      const ref = this.storage.ref(`Vijesti2/${this.vijest2.Podnaslov}`);
      this.vijest2.Slika = ref.getDownloadURL();
    });
    this.kategorijeService.getKategorijeVijesti2().subscribe(kategorije => {
      this.kategorije = kategorije;
    });
  }
  rteCreated(): void {
    this.rteEle.element.focus();
}
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });
    reader.readAsDataURL(file);

  }
  onSubmit({value, valid}: {value: Vijest2, valid: boolean}) {
    if (!valid) {
      console.log(valid);
    } else {
        if (this.selectedFile === undefined) {
          this.vijest2.Kategorija = this.selectedObj;
          this.vijest2.Sadrzaj = this.value;
          this.vijestiService.updateVijest2(this.vijest2.Id, this.vijest2);
          this.router.navigate([`/dashboard/vijesti2/`]);
          this.fm.show('Vijest je uspješno izmjenjena', {cssClass: 'alert-success', timeout: 3000});
        } else {
          this.vijest2.Kategorija = this.selectedObj;
          this.vijest2.Sadrzaj = this.value;
          this.vijestiService.updateVijest2(this.vijest2.Id, this.vijest2);
          this.imageService.deleteImage(this.vijest2.Podnaslov, 'Vijesti2');
          this.imageService.uploadImage(this.selectedFile.file, this.vijest2.Podnaslov, 'Vijesti2');
          this.router.navigate([`/dashboard/vijesti2/`]);
          this.fm.show('Vijest je uspješno izmjenjena', {cssClass: 'alert-success', timeout: 3000});
        }
    }
  }
  checkValue(id: string, fokus: boolean) {
    this.itemDoc = this.vijestiService.getVijest2Value(id);
    this.itemDoc.update({Fokus: fokus})
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
  }
}
