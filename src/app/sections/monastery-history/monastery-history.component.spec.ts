import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonasteryHistoryComponent } from './monastery-history.component';

describe('MonasteryHistoryComponent', () => {
  let component: MonasteryHistoryComponent;
  let fixture: ComponentFixture<MonasteryHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonasteryHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonasteryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
