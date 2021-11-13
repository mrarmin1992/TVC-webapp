import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { RichTextEditorAllModule, RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VijestiComponent } from './components/vijesti/vijesti.component';
import { UkljuciSeComponent } from './components/ukljuci-se/ukljuci-se.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthServiceService } from './services/auth-service.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminTopbarComponent } from './components/admin-topbar/admin-topbar.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { CallActionComponent } from './components/admin/call-action/call-action.component';
import { VijestiAddComponent } from './components/admin/vijesti-add/vijesti-add.component';
import { DashboardIndexComponent } from './components/admin/dashboard-index/dashboard-index.component';
import { KategorijeVijestiComponent } from './components/admin/kategorije-vijesti/kategorije-vijesti.component';
import { KategorijeVijestiAddComponent } from './components/admin/kategorije-vijesti-add/kategorije-vijesti-add.component';
import { KategorijeVijestiIzmjenaComponent } from './components/admin/kategorije-vijesti-izmjena/kategorije-vijesti-izmjena.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { SveVijestiComponent } from './components/admin/sve-vijesti/sve-vijesti.component';
import { VijestiIzmjenaComponent } from './components/admin/vijesti-izmjena/vijesti-izmjena.component';
import { AlertDialogComponent } from './components/admin/alert-dialog/alert-dialog.component';
import { VijestComponent } from './components/vijest/vijest.component';
import { DropZoneDirective } from './drop-zone.directive';
import { UploaderComponent } from './components/admin/uploader/uploader.component';
import { UploadTaskComponent } from './components/admin/upload-task/upload-task.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { PrijaveComponent } from './components/admin/prijave/prijave.component';
import { AuthGuard } from './guards/auth.guard';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FacebookModule } from 'ngx-facebook';
import { VijestiSveComponent } from './components/vijesti-sve/vijesti-sve.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { PretragaComponent } from './components/pretraga/pretraga.component';
import { HvalaComponent } from './components/hvala/hvala.component';
import { AktuelnoComponent } from './components/aktuelno/aktuelno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeoService } from './services/seo.service';
import { AuthService } from './services/auth.service';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { ProizvodiComponent } from './components/proizvodi/proizvodi.component';
import { ProizvodComponent } from './components/proizvod/proizvod.component';
import { ProizvodiSveComponent } from './components/proizvodi-sve/proizvodi-sve.component';
import { SviProizvodiComponent } from './components/admin/svi-proizvodi/svi-proizvodi.component';
import { ProizvodiAddComponent } from './components/admin/proizvodi-add/proizvodi-add.component';
import { ProizvodiIzmjenaComponent } from './components/admin/proizvodi-izmjena/proizvodi-izmjena.component';
import { KategorijeProizvodaComponent } from './components/admin/kategorije-proizvoda/kategorije-proizvoda.component';
import { KategorijeProizvodaAddComponent } from './components/admin/kategorije-proizvoda-add/kategorije-proizvoda-add.component';
// tslint:disable-next-line: max-line-length
import { KategorijeProizvodaIzmjenaComponent } from './components/admin/kategorije-proizvoda-izmjena/kategorije-proizvoda-izmjena.component';
import { KrajComponent } from './components/kraj/kraj.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ConvertToSpacesPipe } from './models/convert-to-spaces.pipe';
import { HomeComponents1Component } from './components/home-components1/home-components1.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';
import { HomeComponents2Component } from './components/home-components2/home-components2.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { Vijesti1Component } from './components/vijesti1/vijesti1.component';
import { Vijest1Component } from './components/vijest1/vijest1.component';
import { VijestiSve1Component } from './components/vijesti-sve1/vijesti-sve1.component';
import { VijestiSve2Component } from './components/vijesti-sve2/vijesti-sve2.component';
import { Vijest2Component } from './components/vijest2/vijest2.component';
import { Vijesti2Component } from './components/vijesti2/vijesti2.component';
import { Proizvodi1Component } from './components/proizvodi1/proizvodi1.component';
import { Proizvodi2Component } from './components/proizvodi2/proizvodi2.component';
import { Aktuelno1Component } from './components/aktuelno1/aktuelno1.component';
import { Aktuelno2Component } from './components/aktuelno2/aktuelno2.component';
import { KategorijeProizvoda1Component } from './components/admin/kategorije-proizvoda1/kategorije-proizvoda1.component';
import { KategorijeProizvoda2Component } from './components/admin/kategorije-proizvoda2/kategorije-proizvoda2.component';
import { KategorijeProizvoda1AddComponent } from './components/admin/kategorije-proizvoda1-add/kategorije-proizvoda1-add.component';
import { KategorijeProizvoda2AddComponent } from './components/admin/kategorije-proizvoda2-add/kategorije-proizvoda2-add.component';
import { KategorijeProizvoda1IzmjenaComponent } from './components/admin/kategorije-proizvoda1-izmjena/kategorije-proizvoda1-izmjena.component';
import { KategorijeProizvoda2IzmjenaComponent } from './components/admin/kategorije-proizvoda2-izmjena/kategorije-proizvoda2-izmjena.component';
import { KategorijeVijesti1Component } from './components/admin/kategorije-vijesti1/kategorije-vijesti1.component';
import { KategorijeVijesti1AddComponent } from './components/admin/kategorije-vijesti1-add/kategorije-vijesti1-add.component';
import { KategorijeVijesti1IzmjenaComponent } from './components/admin/kategorije-vijesti1-izmjena/kategorije-vijesti1-izmjena.component';
import { KategorijeVijesti2IzmjenaComponent } from './components/admin/kategorije-vijesti2-izmjena/kategorije-vijesti2-izmjena.component';
import { KategorijeVijesti2AddComponent } from './components/admin/kategorije-vijesti2-add/kategorije-vijesti2-add.component';
import { KategorijeVijesti2Component } from './components/admin/kategorije-vijesti2/kategorije-vijesti2.component';
import { SveVijesti1Component } from './components/admin/sve-vijesti1/sve-vijesti1.component';
import { SveVijesti2Component } from './components/admin/sve-vijesti2/sve-vijesti2.component';
import { Vijesti1AddComponent } from './components/admin/vijesti1-add/vijesti1-add.component';
import { Vijesti2AddComponent } from './components/admin/vijesti2-add/vijesti2-add.component';
import { Vijesti1IzmjenaComponent } from './components/admin/vijesti1-izmjena/vijesti1-izmjena.component';
import { Vijesti2IzmjenaComponent } from './components/admin/vijesti2-izmjena/vijesti2-izmjena.component';
import { SviProizvodi1Component } from './components/admin/svi-proizvodi1/svi-proizvodi1.component';
import { SviProizvodi2Component } from './components/admin/svi-proizvodi2/svi-proizvodi2.component';
import { Proizvodi1AddComponent } from './components/admin/proizvodi1-add/proizvodi1-add.component';
import { Proizvodi2AddComponent } from './components/admin/proizvodi2-add/proizvodi2-add.component';
import { Proizvodi1IzmjenaComponent } from './components/admin/proizvodi1-izmjena/proizvodi1-izmjena.component';
import { Proizvodi2IzmjenaComponent } from './components/admin/proizvodi2-izmjena/proizvodi2-izmjena.component';


// tslint:disable-next-line: typedef
export function rootLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponents1Component,
    HomeComponents2Component,
    NavbarComponent,
    Navbar1Component,
    Navbar2Component,
    HeaderComponent,
    ScrollTopComponent,
    NotFoundComponent,
    VijestiComponent,
    UkljuciSeComponent,
    BodyComponent,
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    SidebarComponent,
    AdminTopbarComponent,
    TextEditorComponent,
    CallActionComponent,
    VijestiAddComponent,
    DashboardIndexComponent,
    KategorijeVijestiComponent,
    KategorijeVijestiAddComponent,
    KategorijeVijestiIzmjenaComponent,
    ConfirmationDialogComponent,
    SveVijestiComponent,
    VijestiIzmjenaComponent,
    AlertDialogComponent,
    VijestComponent,
    DropZoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    PrijavaComponent,
    PrijaveComponent,
    VijestiSveComponent,
    PretragaComponent,
    HvalaComponent,
    AktuelnoComponent,
    PocetnaComponent,
    ProizvodiComponent,
    ProizvodComponent,
    ProizvodiSveComponent,
    SviProizvodiComponent,
    ProizvodiAddComponent,
    ProizvodiIzmjenaComponent,
    KategorijeProizvodaComponent,
    KategorijeProizvodaAddComponent,
    KategorijeProizvodaIzmjenaComponent,
    KrajComponent,
    ConvertToSpacesPipe,
    HomeComponents1Component,
    Navbar1Component,
    HomeComponents2Component,
    Navbar2Component,
    Vijesti1Component,
    Vijest1Component,
    VijestiSve1Component,
    VijestiSve2Component,
    Vijest2Component,
    Vijesti2Component,
    Proizvodi1Component,
    Proizvodi2Component,
    Aktuelno1Component,
    Aktuelno2Component,
    KategorijeProizvoda1Component,
    KategorijeProizvoda2Component,
    KategorijeProizvoda1AddComponent,
    KategorijeProizvoda2AddComponent,
    KategorijeProizvoda1IzmjenaComponent,
    KategorijeProizvoda2IzmjenaComponent,
    KategorijeVijesti1Component,
    KategorijeVijesti1AddComponent,
    KategorijeVijesti1IzmjenaComponent,
    KategorijeVijesti2IzmjenaComponent,
    KategorijeVijesti2AddComponent,
    KategorijeVijesti2Component,
    SveVijesti1Component,
    SveVijesti2Component,
    Vijesti1AddComponent,
    Vijesti2AddComponent,
    Vijesti1IzmjenaComponent,
    Vijesti2IzmjenaComponent,
    SviProizvodi1Component,
    SviProizvodi2Component,
    Proizvodi1AddComponent,
    Proizvodi2AddComponent,
    Proizvodi1IzmjenaComponent,
    Proizvodi2IzmjenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RichTextEditorModule,
    RichTextEditorAllModule,
    FlashMessagesModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    FacebookModule.forRoot(),
    JwPaginationModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: rootLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, AngularFireAuthGuard, SeoService, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
