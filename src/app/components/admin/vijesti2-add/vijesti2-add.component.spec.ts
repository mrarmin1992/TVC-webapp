import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vijesti2AddComponent } from './vijesti2-add.component';

describe('Vijesti2AddComponent', () => {
  let component: Vijesti2AddComponent;
  let fixture: ComponentFixture<Vijesti2AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vijesti2AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vijesti2AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
