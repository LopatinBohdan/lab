import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Good } from './good';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService]
})

export class AppComponent implements OnInit{
  goods:Good[]=[];
  constructor(private http:HttpService){}
  ngOnInit(){
    this.http.getGoods().subscribe({next:(data:Good[])=>this.goods=data});
  }
}
