import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { KategorijaProizvoda1 } from 'src/app/models/KategorijaProizvoda1';
import { Proizvod1 } from 'src/app/models/Proizvod1';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Proizvodi1Service } from 'src/app/services/proizvodi1.service';
import { MyImageService } from 'src/app/services/my-image.service';
import { KategorijeProizvoda1Service } from 'src/app/services/kategorije-proizvoda1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-proizvodi1-izmjena',
  templateUrl: './proizvodi1-izmjena.component.html',
  styleUrls: ['./proizvodi1-izmjena.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class Proizvodi1IzmjenaComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<Proizvod1>;
  @ViewChild('fromRTE')
  private rteEle: RichTextEditorComponent;
  public value: string = null;
  forma: FormGroup;
  url: 'https://console.firebase.google.com/u/2/project/obrazovanje-odraslih/storage/obrazovanje-odraslih.appspot.com/files~2FVijesti';
  id: string;
  category: string;
  selectedFile: ImageSnippet;
  proizvod1: Proizvod1;
  selectedObj: string;
  kategorije: KategorijaProizvoda1[];

  constructor(private storage: AngularFireStorage,
              private proizvodiService: Proizvodi1Service,
              private imageService: MyImageService,
              private kategorijeService: KategorijeProizvoda1Service,
              private router: Router,
              private route: ActivatedRoute,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.proizvodiService.getProizvod1('proizvodi1', this.id).subscribe(proizvod1 => {
      this.proizvod1 = proizvod1;
      this.selectedObj = this.proizvod1.Kategorija;
      this.value = this.proizvod1.Sadrzaj;
      const ref = this.storage.ref(`Proizvodi1/${this.proizvod1.Podnaslov}`);
      this.proizvod1.Slika = ref.getDownloadURL();
    });
    this.kategorijeService.getKategorijeProizvodi().subscribe(kategorije => {
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
  onSubmit({value, valid}: {value: Proizvod1, valid: boolean}) {
    if (!valid) {
      console.log(valid);
    } else {
        if (this.selectedFile === undefined) {
          this.proizvod1.Kategorija = this.selectedObj;
          this.proizvod1.Sadrzaj = this.value;
          this.proizvodiService.updateProizvod1(this.proizvod1.Id, this.proizvod1);
          this.router.navigate([`/dashboard/proizvodi1/`]);
          this.fm.show('Proizvod je uspješno izmjenjen', {cssClass: 'alert-success', timeout: 3000});
        } else {
          this.proizvod1.Kategorija = this.selectedObj;
          this.proizvod1.Sadrzaj = this.value;
          this.proizvodiService.updateProizvod1(this.proizvod1.Id, this.proizvod1);
          this.imageService.deleteImage(this.proizvod1.Podnaslov, 'Proizvodi1');
          this.imageService.uploadImage(this.selectedFile.file, this.proizvod1.Podnaslov, 'Proizvodi1');
          this.router.navigate([`/dashboard/proizvodi1/`]);
          this.fm.show('Proizvod je uspješno izmjenjen', {cssClass: 'alert-success', timeout: 3000});
        }
    }
  }
  checkValue(id: string, fokus: boolean) {
    this.itemDoc = this.proizvodiService.getProizvod1Value(id);
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
