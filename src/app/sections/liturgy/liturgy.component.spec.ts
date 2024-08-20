import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiturgyComponent } from './liturgy.component';

describe('LiturgyComponent', () => {
  let component: LiturgyComponent;
  let fixture: ComponentFixture<LiturgyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiturgyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiturgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
