import { Component, OnInit } from '@angular/core';
import { VijestiService } from 'src/app/services/vijesti.service';
import { PublikacijeService } from '../../../services/publikacije.service';
import { PrijavaService } from '../../../services/prijava.service';
import { Vijest } from 'src/app/models/Vijest';
import { Publikacija } from '../../../models/Publikacija';
import { Prijava } from '../../../models/Prijava';
import { ProizvodiService } from 'src/app/services/proizvodi.service';
import { Proizvod } from 'src/app/models/Proizvod';
import { Proizvodi2Service } from 'src/app/services/proizvodi2.service';
import { Proizvodi1Service } from 'src/app/services/proizvodi1.service';
import { Vijesti2Service } from 'src/app/services/vijesti2.service';
import { Vijesti1Service } from 'src/app/services/vijesti1.service';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {
  brojPrijava: any;
  prijave: Prijava[];
  brojVijesti: any;
  vijesti: Vijest[];
  proizvodi: Proizvod[];
  brojProizvoda: any;
  brojVijesti1: any;
  vijesti1: Vijest[];
  proizvodi1: Proizvod[];
  brojProizvoda1: any;
  brojVijesti2: any;
  vijesti2: Vijest[];
  proizvodi2: Proizvod[];
  brojProizvoda2: any;
  constructor(private vijestiService: VijestiService,
              private vijesti1Service: Vijesti1Service,
              private vijesti2Service: Vijesti2Service,
              private publikacijeService: PublikacijeService,
              private prijaveService: PrijavaService,
              private proizvodiService: ProizvodiService,
              private proizvodi1Service: Proizvodi1Service,
              private proizvodi2Service: Proizvodi2Service
              ) { }

  ngOnInit(): void {
    this.prijaveService.getPrijave().subscribe(prijave => {
      this.prijave = prijave;
      this.brojPrijava = prijave.length;
    });
    this.vijestiService.getProducts().subscribe(vijesti => {
      this.vijesti = vijesti;
      this.brojVijesti = vijesti.length;
    });
    this.vijesti1Service.getProducts().subscribe(vijesti1 => {
      this.vijesti1 = vijesti1;
      this.brojVijesti1 = vijesti1.length;
    });
    this.vijesti2Service.getProducts().subscribe(vijesti2 => {
      this.vijesti2 = vijesti2;
      this.brojVijesti2 = vijesti2.length;
    });
    this.proizvodiService.getProducts().subscribe(proizvodi => {
      this.proizvodi = proizvodi;
      this.brojProizvoda = proizvodi.length;
    });
    this.proizvodi2Service.getProducts().subscribe(proizvodi2 => {
      this.proizvodi2 = proizvodi2;
      this.brojProizvoda2 = proizvodi2.length;
    });
    this.proizvodi1Service.getProducts().subscribe(proizvodi1 => {
      this.proizvodi1 = proizvodi1;
      this.brojProizvoda1 = proizvodi1.length;
    });
  }

}
