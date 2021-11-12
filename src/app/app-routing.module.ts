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


/*
const redirectLoggedIndashboard = () => redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);*/

const routes: Routes = [

  { path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent/*, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedIndashboard}*/},
  {path: 'vijesti', component: VijestiSveComponent},
  {path: 'vijest/:id', component: VijestComponent },
  {path: 'proizvod/:id', component: ProizvodComponent },
  {path: 'pretraga/:p', component: PretragaComponent},
  {path: 'proizvodi', component: ProizvodiSveComponent},
  {path: 'prijava/:id/:naziv/:p', component: PrijavaComponent , canActivate: [AuthGuard]},
  { path: 'hvala', component: HvalaComponent},
  {path: 'pocetna', component: PocetnaComponent},
  { path: 'registracija', component: SignUpComponent , canActivate: [AuthGuard]},
  { path: 'dashboard',
    component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardIndexComponent , canActivate: [AuthGuard]},
      {path: 'prijave', component: PrijaveComponent , canActivate: [AuthGuard]},
      {path: 'prijave/:p', component: PrijaveComponent , canActivate: [AuthGuard]},
      {path: 'vijesti', component: SveVijestiComponent , canActivate: [AuthGuard]},
      {path: 'nova-vijest', component: VijestiAddComponent , canActivate: [AuthGuard]},
      {path: 'nova-kategorija-vijesti', component: KategorijeVijestiAddComponent , canActivate: [AuthGuard]},
      {path: 'kategorije-vijesti', component: KategorijeVijestiComponent , canActivate: [AuthGuard]},
      {path: 'izmjena-kategorija-vijest/:id', component: KategorijeVijestiIzmjenaComponent , canActivate: [AuthGuard]},
      {path: 'izmjena-vijest/:id', component: VijestiIzmjenaComponent , canActivate: [AuthGuard]},
      {path: 'proizvodi', component: SviProizvodiComponent , canActivate: [AuthGuard]},
      {path: 'nova-proizvod', component: ProizvodiAddComponent , canActivate: [AuthGuard]},
      {path: 'nova-kategorija-proizvoda', component: KategorijeProizvodaAddComponent , canActivate: [AuthGuard]},
      {path: 'kategorije-proizvodi', component: KategorijeProizvodaComponent , canActivate: [AuthGuard]},
      {path: 'izmjena-kategorija-proizvod/:id', component: KategorijeProizvodaIzmjenaComponent , canActivate: [AuthGuard]},
      {path: 'izmjena-proizvod/:id', component: ProizvodiIzmjenaComponent , canActivate: [AuthGuard]},
    ] },
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
