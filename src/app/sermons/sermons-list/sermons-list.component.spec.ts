import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonsListComponent } from './sermons-list.component';

describe('SermonsListComponent', () => {
  let component: SermonsListComponent;
  let fixture: ComponentFixture<SermonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SermonsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SermonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
