import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //output decorator
 @Output() onMenuBtnClicked= new EventEmitter 

 menuBtnClicked(){
     this.onMenuBtnClicked.emit()
   }

}
