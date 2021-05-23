import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/models/servers';



const Dataservers = [
  {id:1 ,name:'dev-web',isOnline:false},
  {id:1 ,name:'dev-web',isOnline:true}, 
  {id:1 ,name:'dev-web',isOnline:true},
  {id:1 ,name:'dev-web',isOnline:true},
  {id:1 ,name:'dev-web',isOnline:true},
  {id:1 ,name:'dev-web',isOnline:true},
  ]   
  

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  servers: Server[]  = Dataservers ;
  constructor() { }

  ngOnInit(): void {
  }

}
