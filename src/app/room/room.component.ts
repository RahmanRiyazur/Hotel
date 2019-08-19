import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {Sort} from '@angular/material/sort';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash'; 



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
roomView:Observable<any[]>;
roomType:Observable<any[]>;
rooms:Array<any> = [];
sortedData:Array<any>=[];
  constructor(private db:FirebaseService) {
    
   }

  ngOnInit() {
    this.db.getRoomData().subscribe(
      (data:any[]) => {this.sortedData=data,this.rooms=data,
      this.roomView=of(data).pipe(map(
        data => _.uniqBy(data, 'view')
        )),     
        this.roomType=of(data).pipe(map(
          data => _.uniqBy(data, 'type')
          ))     
      },
  
      (error) => console.log(error)
    );
    
    return this.sortedData;
    
  }




  sortData(sort: Sort) {
  
    const data = this.sortedData;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
  this.sortedData=data.sort((a,b)=>{
    const isDesc = sort.direction === 'desc';
    switch (sort.active) {
      case 'price':return compare(a.price,b.price,isDesc);
      default: return 0;
    }
    function compare(a: number | string, b: number | string, isDesc: boolean) {
      return (a < b ? -1 : 1) * (isDesc ? 1 : -1);
    }

  });

 
}

}