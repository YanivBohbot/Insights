import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

   color: string;
   buttonText:string;

   @Input() serverInput;
  constructor() { }

  ngOnInit(): void {

    this.getServerAction(this.serverInput.isOnline);
  }


  getServerAction(isOnline: boolean){
    if( isOnline){
      this.serverInput.isOnline = true;
      this.color = '#66BB6A';
      this.buttonText='Shut Down';
    } else{
      this.serverInput.isOnline = false;
      this.color = '#FF6B6B';
      this.buttonText='Start';
    }
  }

  togglestatus( onlinestatus: boolean){
    this.getServerAction( !onlinestatus)
    // this.serverInput.isOnline  = !this.serverInput.isOnline;
  }

}
