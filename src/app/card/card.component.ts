import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  @Input() bg:string=""
  @Input() icon:string=""
  @Input() description:string=""
  @Input() count:string=""

}
