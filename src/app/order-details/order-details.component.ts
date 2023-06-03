import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { Product } from '../_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageProcessingService } from '../image-processing.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  showLoadMoreProductButton = false;
  showTable = false;
  pageNumber: number = 0;
  productDetails: Product[] = [];
  displayedColumns: string[] = ['Id', 'Product Name', 'description', 'Product Discounted Price', 'Product Actual Price', 'Actions'];

  constructor(private productService: ProductService,
    public imagesDialog: MatDialog,
    private imageProcessingService: ImageProcessingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  searchByKeyword(searchkeyword) {
    console.log(searchkeyword);
    this.pageNumber = 0;
    this.productDetails = [];
    this.getAllProducts(searchkeyword);
  }

  public getAllProducts(searchKeyword: string = "") {
    this.showTable = false;
    this.productService.getAllProducts(this.pageNumber, searchKeyword)
    .pipe(
      map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp: Product[]) => {
        // console.log(resp);
        resp.forEach(product => this.productDetails.push(product));
        console.log('msg', this.productDetails);
        this.showTable = true;

        if(resp.length == 12) {
          this.showLoadMoreProductButton = true;
        } else {
          this.showLoadMoreProductButton = false;
        }

        // this.productDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  loadMoreProduct() {
    this.pageNumber = this.pageNumber + 1;
    this.getAllProducts();
  }

  // deleteProduct(productId) {
  //   this.productService.deleteProduct(productId).subscribe(
  //     (resp) => {
  //       this.getAllProducts();
  //     },
  //     (error:HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }

  showImages(product: Product) {
    console.log(product);
    this.imagesDialog.open(ShowProductImagesDialogComponent, {
      data: {
        images: product.productImages
      },
      height: '500px',
      width: '800px'
    });
  }

  editProductDetails(productId) {
    this.router.navigate(['/addNewProduct', {productId: productId}]);
  }
}









  // displayedColumns: string[] = ['Id', 'Product Name', 'Name', 'Address', 'Contact No.', 'Status', 'Action'];
  // dataSource = [];

  // status: string = 'All';

  // constructor(private productService: ProductService) { }

  // ngOnInit(): void {
  //   this.getAllOrderDetailsForAdmin(this.status);
  // }

  // getAllOrderDetailsForAdmin(statusParameter: string) {
  //   this.productService.getAllOrderDetailsForAdmin(statusParameter).subscribe(
  //     (resp) => {
  //       this.dataSource = resp;
  //       console.log(resp);
  //     }, (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // markAsDelivered(orderId) {
  //   console.log(orderId);
  //   this.productService.markAsDelivered(orderId).subscribe(
  //     (response) => {
  //       this.getAllOrderDetailsForAdmin(this.status);
  //       console.log(response);
  //     }, (error) => {
  //       console.log(error);
  //     }
  //   );
  // }


