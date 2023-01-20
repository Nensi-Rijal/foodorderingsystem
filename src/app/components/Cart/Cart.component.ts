import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

const baseUrl = "../assets/foods.json";
@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.scss']
})
export class CartComponent implements OnInit {

  //variable to store the id of the food added in the cart
  id = this.activatedRoute.snapshot.paramMap.get('id');

  //variable to store the details of the food
  foodDetails: any;
  data: any;
  //variable to store the total price of the food
  tax: number = 0;
  subtotal: number = 0;
  totalPrice: number = 0;
  quantity: number = 1;

  //variable to store the user details
  cardno: string = "";
  expiry: string = "";
  address: string = "";

  form!: FormGroup;

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,) { }

  ngOnInit() {
    this.createForm();
    this.loadDetails();
  }

  createForm(item: any = {}) {
    this.form = this.fb.group({
      productName: [item.productName ? item.productName : ''],
      rate: [item.rate ? item.rate : 0],
      totalPrice: new FormControl(0),
      address: new FormControl(''),
      quantity: new FormControl(1),
      cardno: new FormControl(''),
      expiry: new FormControl(''),
      id: new FormControl(0)
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }

  loadDetails() {
    this.http.get(baseUrl).subscribe((res: any) => {
      this.data = res.find((food: any) => food.id == this.id);
      this.form.get('productName')?.setValue(this.data.Name);
      this.form.get('rate')?.setValue(this.data.Price);
      console.log(this.id);
      console.log(this.data);
      this.calculate();
    })
  }

  calculate() {
    this.form.get('totalPrice')?.setValue(this.form.get('rate')?.value * this.form.get('quantity')?.value);
    console.log(this.form.get('totalPrice')?.value);
  }
}
