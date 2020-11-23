import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrregularComponent } from './irregular.component';

describe('IrregularComponent', () => {
  let component: IrregularComponent;
  let fixture: ComponentFixture<IrregularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrregularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrregularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
