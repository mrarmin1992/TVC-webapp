import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KategorijaVijesti1 } from 'src/app/models/KategorijaVijesti1';
import { Vijest1 } from 'src/app/models/Vijest1';
import { KategorijeVijesti1Service } from 'src/app/services/kategorije-vijesti1.service';
import { MyImageService } from 'src/app/services/my-image.service';
import { Vijesti1Service } from 'src/app/services/vijesti1.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-vijesti1-izmjena',
  templateUrl: './vijesti1-izmjena.component.html',
  styleUrls: ['./vijesti1-izmjena.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class Vijesti1IzmjenaComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<Vijest1>;
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
  vijest1: Vijest1;
  selectedObj: string;
  kategorije: KategorijaVijesti1[];

  constructor(private storage: AngularFireStorage,
              private vijestiService: Vijesti1Service,
              private imageService: MyImageService,
              private kategorijeService: KategorijeVijesti1Service,
              private router: Router,
              private route: ActivatedRoute,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.vijestiService.getVijest1('vijesti1', this.id).subscribe(vijest1 => {
      this.vijest1 = vijest1;
      this.selectedObj = this.vijest1.Kategorija;
      this.value = this.vijest1.Sadrzaj;
      const ref = this.storage.ref(`Vijesti1/${this.vijest1.Podnaslov}`);
      this.vijest1.Slika = ref.getDownloadURL();
    });
    this.kategorijeService.getKategorijeVijesti1().subscribe(kategorije => {
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
  onSubmit({value, valid}: {value: Vijest1, valid: boolean}) {
    if (!valid) {
      console.log(valid);
    } else {
        if (this.selectedFile === undefined) {
          this.vijest1.Kategorija = this.selectedObj;
          this.vijest1.Sadrzaj = this.value;
          this.vijestiService.updateVijest1(this.vijest1.Id, this.vijest1);
          this.router.navigate([`/dashboard/vijesti1/`]);
          this.fm.show('Vijest je uspješno izmjenjena', {cssClass: 'alert-success', timeout: 3000});
        } else {
          this.vijest1.Kategorija = this.selectedObj;
          this.vijest1.Sadrzaj = this.value;
          this.vijestiService.updateVijest1(this.vijest1.Id, this.vijest1);
          this.imageService.deleteImage(this.vijest1.Podnaslov, 'Vijesti1');
          this.imageService.uploadImage(this.selectedFile.file, this.vijest1.Podnaslov, 'Vijesti1');
          this.router.navigate([`/dashboard/vijesti1/`]);
          this.fm.show('Vijest je uspješno izmjenjena', {cssClass: 'alert-success', timeout: 3000});
        }
    }
  }
  checkValue(id: string, fokus: boolean) {
    this.itemDoc = this.vijestiService.getVijest1Value(id);
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
