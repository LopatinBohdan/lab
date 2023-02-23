import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Good } from "./good";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class HttpService{
    constructor(private http:HttpClient){}

    getGoods():Observable<Good[]>{
        return this.http.get('assets/goods.json').pipe(map((data:any)=>{
            let goodList=data["goodsList"];
            return goodList.map(function(good:any){
                return {title:good.title, price:good.price};
            });
        }));
    }
}

