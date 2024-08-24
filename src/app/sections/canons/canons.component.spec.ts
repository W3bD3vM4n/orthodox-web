import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanonsComponent } from './canons.component';

describe('CanonsComponent', () => {
  let component: CanonsComponent;
  let fixture: ComponentFixture<CanonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CanonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
