import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionIconsComponent } from './question-icons.component';

describe('QuestionIconsComponent', () => {
  let component: QuestionIconsComponent;
  let fixture: ComponentFixture<QuestionIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
