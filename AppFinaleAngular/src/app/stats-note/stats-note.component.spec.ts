import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsNoteComponent } from './stats-note.component';

describe('StatsNoteComponent', () => {
  let component: StatsNoteComponent;
  let fixture: ComponentFixture<StatsNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
