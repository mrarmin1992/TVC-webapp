import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proizvodi1AddComponent } from './proizvodi1-add.component';

describe('Proizvodi1AddComponent', () => {
  let component: Proizvodi1AddComponent;
  let fixture: ComponentFixture<Proizvodi1AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proizvodi1AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proizvodi1AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
