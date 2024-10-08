import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionIntercessionComponent } from './question-intercession.component';

describe('QuestionIntercessionComponent', () => {
  let component: QuestionIntercessionComponent;
  let fixture: ComponentFixture<QuestionIntercessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionIntercessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionIntercessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
