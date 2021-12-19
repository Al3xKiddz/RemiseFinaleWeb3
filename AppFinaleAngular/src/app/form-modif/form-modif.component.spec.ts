import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifComponent } from './form-modif.component';

describe('FormModifComponent', () => {
  let component: FormModifComponent;
  let fixture: ComponentFixture<FormModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
