import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonasteryEcologyComponent } from './monastery-ecology.component';

describe('MonasteryEcologyComponent', () => {
  let component: MonasteryEcologyComponent;
  let fixture: ComponentFixture<MonasteryEcologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonasteryEcologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonasteryEcologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
