import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRelicsComponent } from './question-relics.component';

describe('QuestionRelicsComponent', () => {
  let component: QuestionRelicsComponent;
  let fixture: ComponentFixture<QuestionRelicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionRelicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionRelicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
