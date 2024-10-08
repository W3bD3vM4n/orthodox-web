import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionJoinComponent } from './question-join.component';

describe('QuestionJoinComponent', () => {
  let component: QuestionJoinComponent;
  let fixture: ComponentFixture<QuestionJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionJoinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
