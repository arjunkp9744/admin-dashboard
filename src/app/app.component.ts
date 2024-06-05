import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'admin';
  sidebarOpened:boolean=true

  toggle() {
    this.sidebarOpened=!this.sidebarOpened

  }
}
