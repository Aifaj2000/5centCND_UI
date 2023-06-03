import { Component, OnInit } from '@angular/core';
import { FileHandle } from '../_model/file-handle.model';
import { Product } from '../_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProductService } from '../_services/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UserProduct } from '../_model/userproduct.model';
import { UserProductService } from '../_services/user-product.service';

@Component({
  selector: 'app-add-new-user-product',
  templateUrl: './add-new-user-product.component.html',
  styleUrls: ['./add-new-user-product.component.css']
})
export class AddNewUserProductComponent implements OnInit {

  isNewProduct = true;

  userproduct: UserProduct = {
    productId: null,
    productName: "",
    productDescription: "",
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productImages: undefined
  };

  constructor(private userproductService: UserProductService){}

  ngOnInit(): void {}

  addUserProduct(userproductForm: NgForm) {
    this.userproductService.addUserProduct(this.userproduct).subscribe(
          (response: UserProduct) => {
            userproductForm.reset();
          // console.log(response);
            
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
  }

  // constructor(
  //   private productService: ProductService,
  //   private sanitizer: DomSanitizer,
  //   private activatedRoute: ActivatedRoute
  // ) {}

  // ngOnInit(): void {
  //   this.userproduct = this.activatedRoute.snapshot.data['product'];

  //   if(this.userproduct && this.userproduct.productId) {
  //     this.isNewProduct = false;
  //   }
  // }

  // addUserProduct(productForm: NgForm) {
  //   const formData = this.prepareFormDataForProduct(this.userproduct);
  //   this.productService.addUserProduct(formData).subscribe(
  //     (response: Product) => {
  //       productForm.reset();
  //       this.userproduct.productImages = [];
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // prepareFormDataForProduct(product: Product): FormData {
  //   const uploadImageData = new FormData();
  //   uploadImageData.append(
  //     "product",
  //     new Blob([JSON.stringify(product)], { type: "application/json" })
  //   );

  //   for (var i = 0; i < this.userproduct.productImages.length; i++) {
  //     uploadImageData.append(
  //       "imageFile",
  //       this.userproduct.productImages[i].file,
  //       this.userproduct.productImages[i].file.name
  //     );
  //   }
  //   return uploadImageData;
  // }

  // onFileSelected(event: any) {
  //   if (event.target.files) {
  //     const file = event.target.files[0];
  //     const fileHandle: FileHandle = {
  //       file: file,
  //       url: this.sanitizer.bypassSecurityTrustUrl(
  //         window.URL.createObjectURL(file)
  //       ),
  //     };
  //     this.userproduct.productImages.push(fileHandle);
  //   }
  // }

  // removeImages(i: number) {
  //   this.userproduct.productImages.splice(i, 1);
  // }

  // fileDropped(fileHandle: FileHandle) {
  //   this.userproduct.productImages.push(fileHandle);
  // }
}
