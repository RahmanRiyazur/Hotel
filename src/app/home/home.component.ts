import { Component, OnInit } from '@angular/core';
import * as $ from'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function scroll() {
      if ($(window).scrollTop() >= 5) {
      }
      else{
        $('.container-fluid').css('top','0');
      }
    });
    
  }

  

}
