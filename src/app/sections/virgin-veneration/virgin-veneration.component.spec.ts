import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirginVenerationComponent } from './virgin-veneration.component';

describe('VirginVenerationComponent', () => {
  let component: VirginVenerationComponent;
  let fixture: ComponentFixture<VirginVenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VirginVenerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirginVenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
