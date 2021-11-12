import { Observable } from 'rxjs';

export interface Proizvod2 {
  Id?: string;
  Naslov?: string;
  Podnaslov?: string;
  Sadrzaj?: string;
  Kategorija?: string;
  Datum?: any;
  Slika?: Observable<any>;
  Fokus?: boolean;
  Objava: string;
}
