import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewwallairline',
  templateUrl: './viewwallairline.component.html',
  styleUrls: ['./viewwallairline.component.css']
})
export class ViewwallairlineComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewAirline().subscribe(
      (data)=>{
        this.airlinelist=data
      }
    )
   }

  airlinelist:any=[]

  ngOnInit(): void {
  }

}
