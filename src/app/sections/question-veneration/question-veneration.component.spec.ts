import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionVenerationComponent } from './question-veneration.component';

describe('QuestionVenerationComponent', () => {
  let component: QuestionVenerationComponent;
  let fixture: ComponentFixture<QuestionVenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionVenerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionVenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
