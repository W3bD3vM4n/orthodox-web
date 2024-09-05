import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessionComponent } from './succession.component';

describe('SuccessionComponent', () => {
  let component: SuccessionComponent;
  let fixture: ComponentFixture<SuccessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
