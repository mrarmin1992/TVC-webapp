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


// tslint:disable-next-line: typedef
export function rootLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
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
    ConvertToSpacesPipe
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
