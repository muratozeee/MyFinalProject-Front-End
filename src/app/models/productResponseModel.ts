import { Category } from './category';
import { Product } from './product';
import { ResponseModul } from './responseModul';

export interface ProductResponseModel extends ResponseModul{
  data: Product[];
}
