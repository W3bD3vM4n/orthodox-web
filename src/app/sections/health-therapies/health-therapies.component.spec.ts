import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTherapiesComponent } from './health-therapies.component';

describe('HealthTherapiesComponent', () => {
  let component: HealthTherapiesComponent;
  let fixture: ComponentFixture<HealthTherapiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthTherapiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthTherapiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
