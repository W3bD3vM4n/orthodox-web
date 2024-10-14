import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialsDetailComponent } from './memorials-detail.component';

describe('MemorialsDetailComponent', () => {
  let component: MemorialsDetailComponent;
  let fixture: ComponentFixture<MemorialsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemorialsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemorialsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
