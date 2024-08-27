import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnificationComponent } from './unification.component';

describe('UnificationComponent', () => {
  let component: UnificationComponent;
  let fixture: ComponentFixture<UnificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
