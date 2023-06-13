import { Category } from './category';
import { ResponseModul } from './responseModul';

export interface CategoryResponseModul extends ResponseModul {
  data: Category[];
}
