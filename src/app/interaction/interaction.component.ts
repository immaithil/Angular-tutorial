import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-interaction',
  template: `
            <h2>Component Interaction</h2>
            <h3>{{"hello "+name}}</h3>
            <button (click)="fireEvent()" >sent data to parent</button>
            `,
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  @Input('parentData') public name: any;
  @Output() public childEvent= new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("this is data from child component");
  }
}
