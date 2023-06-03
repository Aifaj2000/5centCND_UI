import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserProductDetailstoadminComponent } from './show-user-product-detailstoadmin.component';

describe('ShowUserProductDetailstoadminComponent', () => {
  let component: ShowUserProductDetailstoadminComponent;
  let fixture: ComponentFixture<ShowUserProductDetailstoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserProductDetailstoadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserProductDetailstoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
