import { FileHandle } from "./file-handle.model";

export interface UserProduct {
    productImages: any;
    productId: number
    productName: string,
    productDescription: string,
    productDiscountedPrice: number,
    productActualPrice: number,
   // productImages: FileHandle[]
}