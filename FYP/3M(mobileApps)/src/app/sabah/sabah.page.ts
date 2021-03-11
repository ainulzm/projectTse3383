import { Component, OnInit, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { DomSanitizer,  HammerGestureConfig } from "@angular/platform-browser";


@Component({
  selector: 'app-sabah',
  templateUrl: './sabah.page.html',
  styleUrls: ['./sabah.page.scss'],
})



export class SabahPage implements OnInit {

  vid = 'https://www.youtube.com/embed/hHYDVmWE9FI';

  

  constructor(public navCtrl: NavController, private dom: DomSanitizer) { }

  
  sanitize(vid){
    return this.dom.bypassSecurityTrustUrl(vid);
  }

  ngOnInit() {
    
  }

  
}
