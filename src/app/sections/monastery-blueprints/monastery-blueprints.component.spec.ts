import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonasteryBlueprintsComponent } from './monastery-blueprints.component';

describe('MonasteryBlueprintsComponent', () => {
  let component: MonasteryBlueprintsComponent;
  let fixture: ComponentFixture<MonasteryBlueprintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonasteryBlueprintsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonasteryBlueprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
