import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsVieComponent } from './stats-vie.component';

describe('StatsVieComponent', () => {
  let component: StatsVieComponent;
  let fixture: ComponentFixture<StatsVieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsVieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
