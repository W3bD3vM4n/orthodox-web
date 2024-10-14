import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialsListComponent } from './memorials-list.component';

describe('MemorialsListComponent', () => {
  let component: MemorialsListComponent;
  let fixture: ComponentFixture<MemorialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemorialsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemorialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
