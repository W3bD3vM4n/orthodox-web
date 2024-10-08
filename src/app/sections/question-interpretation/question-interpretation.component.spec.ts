import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionInterpretationComponent } from './question-interpretation.component';

describe('QuestionInterpretationComponent', () => {
  let component: QuestionInterpretationComponent;
  let fixture: ComponentFixture<QuestionInterpretationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionInterpretationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionInterpretationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
