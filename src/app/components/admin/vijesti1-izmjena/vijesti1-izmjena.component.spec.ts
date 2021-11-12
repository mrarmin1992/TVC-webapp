import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vijesti1IzmjenaComponent } from './vijesti1-izmjena.component';

describe('Vijesti1IzmjenaComponent', () => {
  let component: Vijesti1IzmjenaComponent;
  let fixture: ComponentFixture<Vijesti1IzmjenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vijesti1IzmjenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vijesti1IzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
