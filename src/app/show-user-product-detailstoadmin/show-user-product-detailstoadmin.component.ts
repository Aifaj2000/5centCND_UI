import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserProduct } from '../_model/userproduct.model';
import { Router } from '@angular/router';
import { UserProductService } from '../_services/user-product.service';

@Component({
  selector: 'app-show-user-product-detailstoadmin',
  templateUrl: './show-user-product-detailstoadmin.component.html',
  styleUrls: ['./show-user-product-detailstoadmin.component.css']
})
export class ShowUserProductDetailstoadminComponent implements OnInit {

  userproductDetails: UserProduct[] = [];
  displayedColumns: string[] = ['Id', 'Product Name', 'description', 'Product Discounted Price', 'Product Actual Price', 'Actions'];

  constructor(private userproductService: UserProductService,
  //  public imagesDialog: MatDialog,
    //private imageProcessingService: ImageProcessingService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllUserProducts();
  }

  public getAllUserProducts() {
   
    this.userproductService.getAllUserProducts()
   
    .subscribe(
      (resp: UserProduct[]) => {
         console.log(resp);
         this.userproductDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  deleteUserProduct(userproductId) {
    this.userproductService.deleteUserProduct(userproductId).subscribe(
      (resp) => {
        this.getAllUserProducts();
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}