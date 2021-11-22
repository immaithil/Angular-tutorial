import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-two',
  template: `<h2>This is testTwoComponent</h2>
             <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">You picked red color</div>
              <div *ngSwitchCase="'blue'">You picked blue color</div>
              <div *ngSwitchCase="'grey'">You picked grey color</div>
              <div *ngSwitchDefault>Pick again</div>
             </div>
            
             <div *ngFor="let color of colors; index as i;last as l">
              <h2>{{l}} {{i}} {{color}}</h2>
             <div>

            `,
  styleUrls: ['./test-two.component.css']
})
export class TestTwoComponent implements OnInit {

  public color= "orange";
  public colors=['red','blue','pink','green'];
  constructor() { }

  ngOnInit(): void {
  }

}
