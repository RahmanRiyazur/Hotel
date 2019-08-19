import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotel';

  ngOnInit(){
    
    
    $(window).scroll(function scroll() {
      if ($(window).scrollTop() >= 5) {
      // $('.navbar').css('background', 'linear-gradient(to right,#b65a91,#df6883,#ec6e7d,#fa7676)');
      $('#return-to-top').fadeIn(200);  
      $('.navbar').css('background','#FFFF');
      $('.navbar').css('height','60px');
      $('.navbar').css('transition','height .3s ease-in-out');
      $('.navbar').css('box-shadow','3px 4px 10px rgba(0,0,0,.22)');
      $('.navbar').css('position','fixed');
      $('.navbar').css('width','100%');
      $('.navbar').css('z-index','3');
      $('.navbar').css('top','0');
      $('.navbar').css('bottom','0');
      
      } else {
      $('.navbar').css('background', 'transparent');
      $('.navbar').css('height','100px');
      $('.navbar').css('box-shadow','0px 0px 0px transparent');    
      $('#return-to-top').fadeOut(100); 
      }
      });
      $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
      
  }
   

}
