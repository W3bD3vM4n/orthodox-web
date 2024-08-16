import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodManComponent } from './god-man.component';

describe('GodManComponent', () => {
  let component: GodManComponent;
  let fixture: ComponentFixture<GodManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GodManComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GodManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
