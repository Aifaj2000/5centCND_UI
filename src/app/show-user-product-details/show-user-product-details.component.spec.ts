import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserProductDetailsComponent } from './show-user-product-details.component';

describe('ShowUserProductDetailsComponent', () => {
  let component: ShowUserProductDetailsComponent;
  let fixture: ComponentFixture<ShowUserProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
