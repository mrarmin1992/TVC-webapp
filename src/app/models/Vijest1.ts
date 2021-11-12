import { Observable } from 'rxjs';

export interface Vijest1 {
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
