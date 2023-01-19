import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

const baseUrl = "../assets/foods.json";

@Component({
  selector: 'app-Details',
  templateUrl: './Details.component.html',
  styleUrls: ['./Details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
  id = this.activatedRoute.snapshot.paramMap.get('id');
  food: any;
  ngOnInit() {
    this.loadDetails();
  }

  loadDetails(){
    this.http.get(baseUrl).subscribe((data: any)=>{
      console.log(data);
      this.food = data.find((food: any)=> food.id == this.id);
      console.log(this.food);
    })
  }

}
