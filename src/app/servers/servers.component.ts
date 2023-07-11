import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', -->  <app-servers></app-servers>
  //selector: '[app-servers]', --> <div app-servers></div>
  selector: '.app-servers', // --> <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  /*template: `
    <app-server></app-server>
    <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
    console.log('ServersComponent - ngOnInit')
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!'
  }

  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
