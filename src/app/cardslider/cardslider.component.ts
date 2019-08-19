import { Component, OnInit, AfterViewInit} from '@angular/core';
import Swiper from 'swiper';



@Component({
  selector: 'app-cardslider',
  templateUrl: './cardslider.component.html',
  styleUrls: ['./cardslider.component.css'],

})
export class CardsliderComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
    
   
  }
  ngAfterViewInit(){
    var swiper = new Swiper('.s1', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      });

  }

}
