import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
// tslint:disable-next-line: max-line-length
import { HtmlEditorService, ImageService, LinkService, RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { Proizvod2 } from 'src/app/models/Proizvod2';
import { FormGroup } from '@angular/forms';
import { KategorijaProizvoda2 } from 'src/app/models/KategorijaProizvoda2';
import { Proizvodi2Service } from 'src/app/services/proizvodi2.service';
import { MyImageService } from 'src/app/services/my-image.service';
import { KategorijeProizvoda2Service } from 'src/app/services/kategorije-proizvoda2.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';



class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-proizvodi2-izmjena',
  templateUrl: './proizvodi2-izmjena.component.html',
  styleUrls: ['./proizvodi2-izmjena.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class Proizvodi2IzmjenaComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<Proizvod2>;
  @ViewChild('fromRTE')
  private rteEle: RichTextEditorComponent;
  public value: string = null;
  forma: FormGroup;
  url: 'https://console.firebase.google.com/u/2/project/obrazovanje-odraslih/storage/obrazovanje-odraslih.appspot.com/files~2FVijesti';
  id: string;
  category: string;
  selectedFile: ImageSnippet;
  proizvod2: Proizvod2;
  selectedObj: string;
  kategorije: KategorijaProizvoda2[];

  constructor(private storage: AngularFireStorage,
              private proizvodiService: Proizvodi2Service,
              private imageService: MyImageService,
              private kategorijeService: KategorijeProizvoda2Service,
              private router: Router,
              private route: ActivatedRoute,
              private fm: FlashMessagesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.proizvodiService.getProizvod2('proizvodi2', this.id).subscribe(proizvod2 => {
      this.proizvod2 = proizvod2;
      this.selectedObj = this.proizvod2.Kategorija;
      this.value = this.proizvod2.Sadrzaj;
      const ref = this.storage.ref(`Proizvodi2/${this.proizvod2.Podnaslov}`);
      this.proizvod2.Slika = ref.getDownloadURL();
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
  onSubmit({value, valid}: {value: Proizvod2, valid: boolean}) {
    if (!valid) {
      console.log(valid);
    } else {
        if (this.selectedFile === undefined) {
          this.proizvod2.Kategorija = this.selectedObj;
          this.proizvod2.Sadrzaj = this.value;
          this.proizvodiService.updateProizvod2(this.proizvod2.Id, this.proizvod2);
          this.router.navigate([`/dashboard/proizvodi2/`]);
          this.fm.show('Proizvod je uspješno izmjenjen', {cssClass: 'alert-success', timeout: 3000});
        } else {
          this.proizvod2.Kategorija = this.selectedObj;
          this.proizvod2.Sadrzaj = this.value;
          this.proizvodiService.updateProizvod2(this.proizvod2.Id, this.proizvod2);
          this.imageService.deleteImage(this.proizvod2.Podnaslov, 'Proizvodi2');
          this.imageService.uploadImage(this.selectedFile.file, this.proizvod2.Podnaslov, 'Proizvodi2');
          this.router.navigate([`/dashboard/proizvodi2/`]);
          this.fm.show('Proizvod je uspješno izmjenjen', {cssClass: 'alert-success', timeout: 3000});
        }
    }
  }
  checkValue(id: string, fokus: boolean) {
    this.itemDoc = this.proizvodiService.getProizvod2Value(id);
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
