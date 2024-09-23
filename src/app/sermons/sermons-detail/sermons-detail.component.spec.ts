import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonsDetailComponent } from './sermons-detail.component';

describe('SermonsDetailComponent', () => {
  let component: SermonsDetailComponent;
  let fixture: ComponentFixture<SermonsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SermonsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SermonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
