import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vijesti2IzmjenaComponent } from './vijesti2-izmjena.component';

describe('Vijesti2IzmjenaComponent', () => {
  let component: Vijesti2IzmjenaComponent;
  let fixture: ComponentFixture<Vijesti2IzmjenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vijesti2IzmjenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vijesti2IzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
