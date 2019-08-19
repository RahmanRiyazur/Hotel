import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { SatDatepickerInputEvent } from 'saturn-datepicker';
import * as moment from 'moment';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class DatepickerComponent implements OnInit {
  // today: number = Date.now();
  // tmrwd:any = new Date().getDate()+1;
  // tmrwdm:any = new Date().toLocaleString('default', { month: 'short' });
  // tmrwdy:any =new Date().getFullYear();
  date=[];
  today: any = Date.now();
  currentDate:any = new Date();
  // tmrwd:any=this.currentDate.setDate(this.currentDate.getDate() + 1);
  // tmrwdm:any = this.currentDate.toLocaleString('default', { month: 'short' });
  // tmrwdy:any =this.currentDate.getFullYear();
  minDate=moment(this.today).format('YYYY-MM-DD');
  tmrwd:any=moment(this.currentDate.setDate(this.currentDate.getDate()+1)).format('YYYY-MM-DD');
  maxDate=moment(this.currentDate.setMonth(this.currentDate.getMonth() + 12)).format('YYYY-MM-DD');

  constructor() { }

  ngOnInit() {
    
  }

  dateClass = (d: Date) => {
    const date = d.getDay();

    // Highlight the 1st and 20th day of each month.
    return (date === 0 || date==3 || date === 6) ? 'example-custom-date-class' : 'example-custom-date-classm';
  }
  
  addEvent(event:SatDatepickerInputEvent<Date>){
    console.log(event.value);
    this.date=[];
    for(let i in event.value){
      this.date.push(event.value[i]);
    }
  
    this.today=this.date[0];
    this.currentDate=this.date[1];
    this.tmrwd=moment(this.currentDate.setDate(this.currentDate.getDate())).format('YYYY-MM-DD');
    // this.tmrwd=this.currentDate.setDate(this.currentDate.getDate());
    // this.tmrwdm = this.currentDate.toLocaleString('default', { month: 'short' });
    // this.tmrwdy =this.currentDate.getFullYear();
    console.log("array"+this.date[1]);
  }
  random(){
    console.log("Hello");
  }




}
