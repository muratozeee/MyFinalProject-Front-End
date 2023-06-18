import { ResponseModel } from "./responseModel";

export interface SingleResposeModel<T> extends ResponseModel{
    data:T
}