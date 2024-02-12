import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsAndOpComponent } from './obs-and-op.component';

describe('ObsAndOpComponent', () => {
  let component: ObsAndOpComponent;
  let fixture: ComponentFixture<ObsAndOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsAndOpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObsAndOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
