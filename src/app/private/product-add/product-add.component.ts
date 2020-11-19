import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Store} from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { AddProductAction } from '../state/private-product.actions';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.sass']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup = new FormGroup({})
  productFields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'name',
        placeholder: 'Enter product name',
        required: true
      }
    },
    {
      key: 'description',
      type: 'input',
      templateOptions: {
        label: 'description',
        placeholder: 'Enter product description',
        required: true
      }
    },
    {
      key: 'price',
      type: 'input',
      templateOptions: {
        label: 'price',
        type: 'number',
        placeholder: 'Enter product price',
        required: true
      }
    },
    {
      key: 'quantity',
      type: 'input',
      templateOptions: {
        label: 'quantity',
        type: 'number',
        placeholder: 'Enter product quantity',
        required: true
      }
    }


  ]

  constructor(public store: Store) { }

  ngOnInit(): void {
  }

  save() {
    this.store.dispatch(new AddProductAction({
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      price: this.productForm.value.price,
      quantity: this.productForm.value.quantity,
    }))
  }
}
