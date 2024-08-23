import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionComponent } from './tradition.component';

describe('TraditionComponent', () => {
  let component: TraditionComponent;
  let fixture: ComponentFixture<TraditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
