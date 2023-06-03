import { Injectable } from '@angular/core';
import { UserProduct } from './_model/userproduct.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { UserProductService } from './_services/user-product.service';
import { ImageProcessingService } from './image-processing.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProductResolveService implements Resolve<UserProduct> {
  constructor(private userproductService: UserProductService,
    private imageProcessingService: ImageProcessingService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserProduct> {
    const id = route.paramMap.get("productId");
    
    if (id) {
      //then we have to fetch details from backend
       return this.userproductService.getUserProductDetailsById(id)
              .pipe(
                map(p => this.imageProcessingService.createImages(p))
              );
    } else {
      // return empty product observable.
      return of(this.getProductDetails());
    }
  }

  getProductDetails() {
    return {
      productId:null,
      productName: "",
      productDescription: "",
      productDiscountedPrice: 0,
      productActualPrice: 0,
      productImages: [],
    };
  }
}