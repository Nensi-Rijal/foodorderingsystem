import { Component, OnInit } from '@angular/core'; 
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

const baseUrl = "../assets/foods.json";
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  //variable to store the list of foods
  foodList: any;

  constructor
  ( private http: HttpClient,
    private router: Router) { }
  
  ngOnInit(): void {  
    this.loadData();
  }

  //function to load the data from the json file
  loadData(){
    this.http.get(baseUrl).subscribe(data => {
      this.foodList = data;
      console.log(data);
    })
  }

  //function to navigate to the details page
  onDetailClick(id: number){
    this.router.navigateByUrl('/details/' + id);
  }

}
