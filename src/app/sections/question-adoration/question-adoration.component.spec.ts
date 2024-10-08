import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAdorationComponent } from './question-adoration.component';

describe('QuestionAdorationComponent', () => {
  let component: QuestionAdorationComponent;
  let fixture: ComponentFixture<QuestionAdorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionAdorationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionAdorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
