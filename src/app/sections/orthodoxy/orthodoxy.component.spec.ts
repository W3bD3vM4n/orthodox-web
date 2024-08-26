import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthodoxyComponent } from './orthodoxy.component';

describe('OrthodoxyComponent', () => {
  let component: OrthodoxyComponent;
  let fixture: ComponentFixture<OrthodoxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrthodoxyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrthodoxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
