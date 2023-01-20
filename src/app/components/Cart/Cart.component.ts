import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  successMessage:string=''
  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }

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
      cardno: new FormControl('',Validators.required),
      expiry: new FormControl('',Validators.required),
      id: new FormControl(0)
    })
  }

  //function to submit the form
  onSubmit() { 
    console.log(this.form.value);
    this.form.get('quantity')?.setValue(1);
    this.form.get('cardno')?.reset();
    this.form.get('expiry')?.reset();
    this.successMessage='Order Placed Successfully';
    setTimeout(()=>{
      this.router.navigateByUrl('/home');
    },2000);

    
  }

  loadDetails() {
    this.http.get(baseUrl).subscribe((res: any) => {
      this.data = res.find((food: any) => food.id == this.id);
      this.form.get('productName')?.setValue(this.data.Name);
      this.form.get('rate')?.setValue(this.data.Price); 
      this.calculate();
    })
  }

  //function to calculate the total price of the food
  calculate() {
    this.form.get('totalPrice')?.setValue(this.form.get('rate')?.value * this.form.get('quantity')?.value); 
  }
}
