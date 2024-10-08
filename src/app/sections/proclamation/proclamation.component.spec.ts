import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProclamationComponent } from './proclamation.component';

describe('ProclamationComponent', () => {
  let component: ProclamationComponent;
  let fixture: ComponentFixture<ProclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProclamationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
