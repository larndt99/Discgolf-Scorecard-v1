import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreToggleComponent } from './score-toggle.component';

describe('ScoreToggleComponent', () => {
  let component: ScoreToggleComponent;
  let fixture: ComponentFixture<ScoreToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
