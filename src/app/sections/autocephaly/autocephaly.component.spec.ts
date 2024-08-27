import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocephalyComponent } from './autocephaly.component';

describe('AutocephalyComponent', () => {
  let component: AutocephalyComponent;
  let fixture: ComponentFixture<AutocephalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocephalyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutocephalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
