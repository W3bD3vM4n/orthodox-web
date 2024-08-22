import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClergyLaityComponent } from './clergy-laity.component';

describe('ClergyLaityComponent', () => {
  let component: ClergyLaityComponent;
  let fixture: ComponentFixture<ClergyLaityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClergyLaityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClergyLaityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
