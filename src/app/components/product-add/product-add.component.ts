import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  productAddForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngonInit() : void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({

    productName:["",Validators.required],
    unitPrice:["",Validators.required],
    unitsInStock:["",Validators.required],
    categoryId:["",Validators.required]



    });


  }
}
