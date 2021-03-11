import { Component, OnInit } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.page.html',
  styleUrls: ['./homes.page.scss'],
})
export class HomesPage implements OnInit {

  sliderImage: string[] = [
    '/assets/slide1',
    '/assets/slide2',
    '/assets/slide3'
  ]

  sliderOptions: {autoplay: {delay: number}, loop:boolean}={
    autoplay:{
      delay: 2000
    },
    loop: true
  }

  constructor() { 
  
  }

  
  ngOnInit() {
  }
  


}
