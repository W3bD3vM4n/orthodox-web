import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentMembersComponent } from './president-members.component';

describe('PresidentMembersComponent', () => {
  let component: PresidentMembersComponent;
  let fixture: ComponentFixture<PresidentMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresidentMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresidentMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
