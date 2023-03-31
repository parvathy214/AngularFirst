import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  User:any
  constructor(private api:BackendService ){}

  ngOnInit(){
  this.getData()
  }

  getData(){
    this.api.getUser().subscribe((res:any)=>{
    this.User=res;
    })
  }


}
