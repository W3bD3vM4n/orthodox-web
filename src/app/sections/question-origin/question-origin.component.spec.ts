import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOriginComponent } from './question-origin.component';

describe('QuestionOriginComponent', () => {
  let component: QuestionOriginComponent;
  let fixture: ComponentFixture<QuestionOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionOriginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
