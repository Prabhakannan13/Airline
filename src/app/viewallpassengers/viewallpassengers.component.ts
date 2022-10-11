import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallpassengers',
  templateUrl: './viewallpassengers.component.html',
  styleUrls: ['./viewallpassengers.component.css']
})
export class ViewallpassengersComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewPassenger().subscribe(
      (data)=>{
        this.viewpassengerlist=data
      }
    )
  }

  viewpassengerlist:any=[]
   ngOnInit(): void {
  }

}
