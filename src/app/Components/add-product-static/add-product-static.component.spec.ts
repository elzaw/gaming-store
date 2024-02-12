import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductStaticComponent } from './add-product-static.component';

describe('AddProductStaticComponent', () => {
  let component: AddProductStaticComponent;
  let fixture: ComponentFixture<AddProductStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductStaticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProductStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
