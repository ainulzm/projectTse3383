import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any=[];
  

  constructor() {
    this.items = [
      {title: "Perak", },
      {title: "Kelantan"},
      {title: "Kedah"},
      {title: "Kl"},
      {title: "Perlis"},
      {title: "Perlis"},
      {title: "Perlis"},
      {title: "Perlis"},
      {title: "Perlis"},
    ];

    
   }
   filterItems(searchTerm){
     return this.items.filter(item=>{
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
}
