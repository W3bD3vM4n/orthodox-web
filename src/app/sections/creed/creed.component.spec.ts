import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreedComponent } from './creed.component';

describe('CreedComponent', () => {
  let component: CreedComponent;
  let fixture: ComponentFixture<CreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
