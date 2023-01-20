import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

const baseUrl = "../assets/foods.json";

@Component({
  selector: 'app-Details',
  templateUrl: './Details.component.html',
  styleUrls: ['./Details.component.scss']
})
export class DetailsComponent implements OnInit {

  //variable to store the id of the food
  id = this.activatedRoute.snapshot.paramMap.get('id');

  //variable to store the details of the food
  food: any;

  constructor
    (private http: HttpClient,
      private activatedRoute: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.loadDetails();
  }

  //function to load the detail data from the json file
  loadDetails() {
    this.http.get(baseUrl).subscribe((data: any) => {
      this.food = data.find((food: any) => food.id == this.id);
    })
  }

  onCartClick(id: number) {
    this.router.navigateByUrl('/checkout/' + id);
  }
}
