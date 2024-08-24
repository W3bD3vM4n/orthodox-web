import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirginMaryComponent } from './virgin-mary.component';

describe('VirginMaryComponent', () => {
  let component: VirginMaryComponent;
  let fixture: ComponentFixture<VirginMaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VirginMaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirginMaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
