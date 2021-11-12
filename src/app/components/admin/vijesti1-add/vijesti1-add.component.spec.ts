import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vijesti1AddComponent } from './vijesti1-add.component';

describe('Vijesti1AddComponent', () => {
  let component: Vijesti1AddComponent;
  let fixture: ComponentFixture<Vijesti1AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vijesti1AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vijesti1AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
