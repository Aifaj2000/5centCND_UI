import { Component, OnInit } from '@angular/core';
import { UserProduct } from '../_model/userproduct.model';
import { UserProductService } from '../_services/user-product.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../image-processing.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';

@Component({
  selector: 'app-show-user-product-details',
  templateUrl: './show-user-product-details.component.html',
  styleUrls: ['./show-user-product-details.component.css']
})
export class ShowUserProductDetailsComponent implements OnInit {

 // showLoadMoreProductButton = false;
 // showTable = false;
 // pageNumber: number = 0;
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

  editProductDetails(productId) {
    this.router.navigate(['/addNewUserProduct', {usproductId: productId}]);
  }


  // searchByKeyword(searchkeyword) {
  //   console.log(searchkeyword);
  //   this.pageNumber = 0;
  //   this.productDetails = [];
  //   this.getAllProducts(searchkeyword);
  // }

  // public getAllProducts(searchKeyword: string = "") {
  //   this.showTable = false;
  //   this.userproductService.getAllProducts(this.pageNumber, searchKeyword)
  //   .pipe(
  //     map((x: UserProduct[], i) => x.map((product: UserProduct) => this.imageProcessingService.createImages(product)))
  //   )
  //   .subscribe(
  //     (resp: UserProduct[]) => {
  //       // console.log(resp);
  //       resp.forEach(product => this.productDetails.push(product));
  //       console.log('msg', this.productDetails);
  //       this.showTable = true;

  //       if(resp.length == 12) {
  //         this.showLoadMoreProductButton = true;
  //       } else {
  //         this.showLoadMoreProductButton = false;
  //       }

  //       // this.productDetails = resp;
  //     }, (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // loadMoreProduct() {
  //   this.pageNumber = this.pageNumber + 1;
  //   this.getAllProducts();
  // }

 
  // showImages(product: UserProduct) {
  //   console.log(product);
  //   this.imagesDialog.open(ShowProductImagesDialogComponent, {
  //     data: {
  //       images: product.productImages
  //     },
  //     height: '500px',
  //     width: '800px'
  //   });
  // }

  // editProductDetails(productId) {
  //   this.router.navigate(['/addNewProduct', {productId: productId}]);
  // }

}
