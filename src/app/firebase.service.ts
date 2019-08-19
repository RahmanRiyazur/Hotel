import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService{
    constructor(private http:HttpClient) { }

    getRoomData(){
        return this.http.get("https://hotel-c7687.firebaseio.com/room.json",{responseType:'json'})
        .pipe(
          map(
            data => {
              console.log(data);
              return data;
            }
          )
        )
      }

} 