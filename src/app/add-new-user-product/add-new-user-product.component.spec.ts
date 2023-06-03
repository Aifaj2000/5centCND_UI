import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserProductComponent } from './add-new-user-product.component';

describe('AddNewUserProductComponent', () => {
  let component: AddNewUserProductComponent;
  let fixture: ComponentFixture<AddNewUserProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewUserProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUserProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
