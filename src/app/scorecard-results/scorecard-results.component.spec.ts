import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardResultsComponent } from './scorecard-results.component';

describe('ScorecardResultsComponent', () => {
  let component: ScorecardResultsComponent;
  let fixture: ComponentFixture<ScorecardResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorecardResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
