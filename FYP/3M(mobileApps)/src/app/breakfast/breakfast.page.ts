import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DomSanitizer,  HammerGestureConfig } from "@angular/platform-browser";


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})


export class BreakfastPage implements OnInit {

  vid = 'https://www.youtube.com/embed/bvXQYM5UOlA';

  currentPosition;
  height;
  minimumThreshold;
  startPosition;
  bottomSheet;
  content;
  duration;


  constructor(public navCtrl: NavController, private dom: DomSanitizer) { 
   
  }

  sanitize(vid){
    return this.dom.bypassSecurityTrustUrl(vid);
  }

  ngOnInit() {
    
   
  }


  

}
