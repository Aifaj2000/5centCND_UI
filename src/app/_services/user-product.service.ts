import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProduct } from '../_model/userproduct.model';

@Injectable({
  providedIn: 'root'
})
export class UserProductService {

  constructor(private httpClient: HttpClient) { }

  

  public addUserProduct(userproduct: UserProduct) {
    return this.httpClient.post<UserProduct>("http://localhost:9090/userproduct/addNewProduct", userproduct);
  }

  public getAllUserProducts() {
    return this.httpClient.get<UserProduct[]>("http://localhost:9090/userproduct/getAllProducts");
  }

  public deleteUserProduct(userproductId: number) {
    return this.httpClient.delete("http://localhost:9090/userproduct/deleteUserProductDetails/"+userproductId);
  }

  public getUserProductDetailsById(userproductId) {
    return this.httpClient.get<UserProduct>("http://localhost:9090/userproduct/getProductDetailsById/"+userproductId);
  }
}
