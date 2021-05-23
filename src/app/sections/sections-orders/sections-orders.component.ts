import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/shared/models/Orders';

@Component({
  selector: 'app-sections-orders',
  templateUrl: './sections-orders.component.html',
  styleUrls: ['./sections-orders.component.css']
})
export class SectionsOrdersComponent implements OnInit {

  orders: Orders[] =[
    {id: 1, customer: 
      {id : 1 , name: 'John DOe' ,  state: 'France' , email: 'yanivboho@gmail.com'},
      total: 230 , placed: new Date(2017 , 2 ,3 ),fullfilled : new Date(2017 , 2 ,3 )
    },
    {id: 1, customer: 
      {id : 1 , name: 'John DOe' ,  state: 'France' , email: 'yanivboho@gmail.com'} ,
      total: 230 , placed: new Date(2017 , 2 ,3 ) , fullfilled : new Date(2017 , 2 ,3 ),
    },
    {id: 1, customer: 
      {id : 1 , name: 'John DOe' ,  state: 'France' , email: 'yanivboho@gmail.com' },
      total: 230 , placed: new Date(2017 , 3 ,2 ) , fullfilled : new Date(2017 , 2 ,3 )
    },
    {id: 1, customer: 
      {id : 1 , name: 'John DOe' ,  state: 'France' , email: 'yanivboho@gmail.com' },
      total: 230 , placed: new Date(2017 , 2 ,3 ) , fullfilled : new Date(2017 , 2 ,3 )
    },
    {id: 1, customer: 
      {id : 1 , name: 'John DOe' ,  state: 'France' , email: 'yanivboho@gmail.com'} ,
      total: 230 , placed: new Date(2017 , 2 ,3 ) , fullfilled : new Date(2017 , 2 ,3 )
    },
    {id: 1, customer: 
      {id : 1 , name: 'John DOe' ,  state: 'France' , email: 'yanivboho@gmail.com'} ,
      total: 230 , placed: new Date(2017 , 2 ,3 ) , fullfilled : new Date(2017 , 2 ,3 )
    }
  ] ; 

  constructor() { }

  ngOnInit(): void {
  }

}
