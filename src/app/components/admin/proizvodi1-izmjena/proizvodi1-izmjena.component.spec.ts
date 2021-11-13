import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proizvodi1IzmjenaComponent } from './proizvodi1-izmjena.component';

describe('Proizvodi1IzmjenaComponent', () => {
  let component: Proizvodi1IzmjenaComponent;
  let fixture: ComponentFixture<Proizvodi1IzmjenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proizvodi1IzmjenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proizvodi1IzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
