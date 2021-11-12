import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VijestiComponent } from './components/vijesti/vijesti.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VijestiAddComponent } from './components/admin/vijesti-add/vijesti-add.component';
import { DashboardIndexComponent } from './components/admin/dashboard-index/dashboard-index.component';
import { KategorijeVijestiComponent } from './components/admin/kategorije-vijesti/kategorije-vijesti.component';
import { KategorijeVijestiAddComponent } from './components/admin/kategorije-vijesti-add/kategorije-vijesti-add.component';
import { KategorijeVijestiIzmjenaComponent } from './components/admin/kategorije-vijesti-izmjena/kategorije-vijesti-izmjena.component';
import { SveVijestiComponent } from './components/admin/sve-vijesti/sve-vijesti.component';
import { VijestiIzmjenaComponent } from './components/admin/vijesti-izmjena/vijesti-izmjena.component';
import { VijestComponent } from './components/vijest/vijest.component';
import { UploaderComponent } from './components/admin/uploader/uploader.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { PrijaveComponent } from './components/admin/prijave/prijave.component';
import { AngularFireAuthGuard, redirectLoggedInTo, canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { VijestiSveComponent } from './components/vijesti-sve/vijesti-sve.component';
import { PretragaComponent } from './components/pretraga/pretraga.component';
import { HvalaComponent } from './components/hvala/hvala.component';
import { AuthGuard } from './guards/auth.guard';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { ProizvodiComponent } from './components/proizvodi/proizvodi.component';
import { SviProizvodiComponent } from './components/admin/svi-proizvodi/svi-proizvodi.component';
import { ProizvodiAddComponent } from './components/admin/proizvodi-add/proizvodi-add.component';
import { KategorijeProizvodaAddComponent } from './components/admin/kategorije-proizvoda-add/kategorije-proizvoda-add.component';
import { KategorijeProizvodaComponent } from './components/admin/kategorije-proizvoda/kategorije-proizvoda.component';
// tslint:disable-next-line: max-line-length
import { KategorijeProizvodaIzmjenaComponent } from './components/admin/kategorije-proizvoda-izmjena/kategorije-proizvoda-izmjena.component';
import { ProizvodiIzmjenaComponent } from './components/admin/proizvodi-izmjena/proizvodi-izmjena.component';
import { ProizvodComponent } from './components/proizvod/proizvod.component';
import { ProizvodiSveComponent } from './components/proizvodi-sve/proizvodi-sve.component';
import { HomeComponents1Component } from './components/home-components1/home-components1.component';
import { HomeComponents2Component } from './components/home-components2/home-components2.component';
import { VijestiSve1Component } from './components/vijesti-sve1/vijesti-sve1.component';
import { KategorijeProizvoda1Component } from './components/admin/kategorije-proizvoda1/kategorije-proizvoda1.component';
import { KategorijeProizvoda2Component } from './components/admin/kategorije-proizvoda2/kategorije-proizvoda2.component';
import { KategorijeProizvoda1AddComponent } from './components/admin/kategorije-proizvoda1-add/kategorije-proizvoda1-add.component';
import { KategorijeProizvoda2AddComponent } from './components/admin/kategorije-proizvoda2-add/kategorije-proizvoda2-add.component';
// tslint:disable-next-line: max-line-length
import { KategorijeProizvoda1IzmjenaComponent } from './components/admin/kategorije-proizvoda1-izmjena/kategorije-proizvoda1-izmjena.component';
// tslint:disable-next-line: max-line-length
import { KategorijeProizvoda2IzmjenaComponent } from './components/admin/kategorije-proizvoda2-izmjena/kategorije-proizvoda2-izmjena.component';
import { KategorijeVijesti1AddComponent } from './components/admin/kategorije-vijesti1-add/kategorije-vijesti1-add.component';
import { KategorijeVijesti1Component } from './components/admin/kategorije-vijesti1/kategorije-vijesti1.component';
import { KategorijeVijesti2AddComponent } from './components/admin/kategorije-vijesti2-add/kategorije-vijesti2-add.component';
import { KategorijeVijesti2Component } from './components/admin/kategorije-vijesti2/kategorije-vijesti2.component';
import { KategorijeVijesti1IzmjenaComponent } from './components/admin/kategorije-vijesti1-izmjena/kategorije-vijesti1-izmjena.component';
import { KategorijeVijesti2IzmjenaComponent } from './components/admin/kategorije-vijesti2-izmjena/kategorije-vijesti2-izmjena.component';
import { SveVijesti1Component } from './components/admin/sve-vijesti1/sve-vijesti1.component';
import { SveVijesti2Component } from './components/admin/sve-vijesti2/sve-vijesti2.component';
import { Vijesti1AddComponent } from './components/admin/vijesti1-add/vijesti1-add.component';
import { Vijesti2AddComponent } from './components/admin/vijesti2-add/vijesti2-add.component';
import { Vijesti1IzmjenaComponent } from './components/admin/vijesti1-izmjena/vijesti1-izmjena.component';
import { Vijesti2IzmjenaComponent } from './components/admin/vijesti2-izmjena/vijesti2-izmjena.component';


/*
const redirectLoggedIndashboard = () => redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);*/

const routes: Routes = [

  { path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'vijesti', component: VijestiSveComponent},
  {path: 'vijest/:id', component: VijestComponent },
  {path: 'proizvod/:id', component: ProizvodComponent },
  {path: 'pretraga/:p', component: PretragaComponent},
  {path: 'proizvodi', component: ProizvodiSveComponent},
  {path: 'prijava/:id/:naziv/:p', component: PrijavaComponent},
  { path: 'hvala', component: HvalaComponent},
  {path: 'pocetna', component: PocetnaComponent},
  { path: 'registracija', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', component: DashboardIndexComponent },
      {path: 'prijave', component: PrijaveComponent },
      {path: 'prijave/:p', component: PrijaveComponent },
      {path: 'vijesti', component: SveVijestiComponent },
      {path: 'vijesti1', component: SveVijesti1Component },
      {path: 'vijesti2', component: SveVijesti2Component },
      {path: 'nova-vijest', component: VijestiAddComponent },
      {path: 'nova-vijest1', component: Vijesti1AddComponent },
      {path: 'nova-vijest2', component: Vijesti2AddComponent },
      {path: 'nova-kategorija-vijesti', component: KategorijeVijestiAddComponent },
      {path: 'kategorije-vijesti', component: KategorijeVijestiComponent },
      {path: 'nova-kategorija-vijesti1', component: KategorijeVijesti1AddComponent },
      {path: 'kategorije-vijesti1', component: KategorijeVijesti1Component },
      {path: 'nova-kategorija-vijesti2', component: KategorijeVijesti2AddComponent },
      {path: 'kategorije-vijesti2', component: KategorijeVijesti2Component },
      {path: 'izmjena-kategorija-vijest/:id', component: KategorijeVijestiIzmjenaComponent},
      {path: 'izmjena-kategorija-vijest1/:id', component: KategorijeVijesti1IzmjenaComponent},
      {path: 'izmjena-kategorija-vijest2/:id', component: KategorijeVijesti2IzmjenaComponent},
      {path: 'izmjena-vijest/:id', component: VijestiIzmjenaComponent },
      {path: 'izmjena-vijest1/:id', component: Vijesti1IzmjenaComponent },
      {path: 'izmjena-vijest2/:id', component: Vijesti2IzmjenaComponent },
      {path: 'proizvodi', component: SviProizvodiComponent },
      {path: 'nova-proizvod', component: ProizvodiAddComponent},
      {path: 'nova-kategorija-proizvoda', component: KategorijeProizvodaAddComponent},
      {path: 'kategorije-proizvodi', component: KategorijeProizvodaComponent },
      {path: 'kategorije-proizvodi1', component: KategorijeProizvoda1Component },
      {path: 'kategorije-proizvodi2', component: KategorijeProizvoda2Component },
      {path: 'nova-kategorija-proizvoda1', component: KategorijeProizvoda1AddComponent},
      {path: 'nova-kategorija-proizvoda2', component: KategorijeProizvoda2AddComponent},
      {path: 'izmjena-kategorija-proizvod/:id', component: KategorijeProizvodaIzmjenaComponent},
      {path: 'izmjena-kategorija-proizvod1/:id', component: KategorijeProizvoda1IzmjenaComponent},
      {path: 'izmjena-kategorija-proizvod2/:id', component: KategorijeProizvoda2IzmjenaComponent},
      {path: 'izmjena-proizvod/:id', component: ProizvodiIzmjenaComponent },
    ] },
  {path: 'njemacki', component: HomeComponents1Component},
    {path: 'vijesti1', component: VijestiSve1Component},

  {path: 'engleski', component: HomeComponents2Component},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
