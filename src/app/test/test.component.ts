import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
                Welcome {{name}}
              </div>
              <button (click)="onClick()">Greet</button>
              <h1>{{greeting}}</h1>
              <h2>
                {{2+2}}
              </h2>
              <input #myInput type="text"/>
              <button (click)="logMessage(myInput.value)">Log</button>
              <p>{{input}}</p>

              <input [(ngModel)]="name" type="text"/>
              {{name}}


              <h4 *ngIf="displayName; else elseBlock" >structural directive</h4>
              <ng-template #elseBlock>
                <h2>Name is Hidden</h2>
              </ng-template>
              <div *ngIf="displayThen; then thenBlock; else elseBlock"></div>
              <ng-template #thenBlock>
                <h2>This is then block</h2>
              </ng-template>

              <ng-template #elseBlock>
                <h2>This is else Block</h2>
              </ng-template>

              <h3 [class]='successClass'>{{"Welcome back " + name}}</h3>
             <h2 class='text-special' [class]='successClass'>Ashish is on</h2>
             <h3 [class.text-danger]='hasError' >Danger</h3>
             <h2 [ngClass]='messageClasses'>This is ng Classes</h2>
             <h2 [style.color]="hasError ? 'red':'cyan'" >Style Binding</h2>
             <h2 [style.color]='highlightColor'>Style Binding 2</h2>
             <h3 [ngStyle]='titleStyles'>Style Bindig 3</h3>
             `,

              // Interpolation can only work to string values thats why we need []
  styles: [`
            .text-success{
              color: green;
            }
            .text-danger{
              color: red;
            }
            .text-special {
              font-style: italic;
            }
          `]
})
export class TestComponent implements OnInit {

  public name = "";
  public siteUrl= window.location.href;
  public myId='testId';
  public  isDisabled= true;
  public successClass= 'text-success';
  public hasError=true;
  public isSpecial=true;
  public greeting=""
  public input="";
  //for ngIf directive
  displayName=false;
  displayThen= true;
  public messageClasses= {
    "text-success":!this.hasError,
    'text-danger': this.hasError,
    'text-special':this.isDisabled
  }
  //above code will be used in ng class directive

  public highlightColor= 'blue';

  public titleStyles= {
    color:'grey',
    fontStyle:'italic'

  }
  logMessage( value: any){
    console.log(value);
    this.input="your input is "+value;
  }
  onClick(){
    console.log(event)
    this.greeting="welcome to my first angular application"
  }

  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello "+ this.name;
  }
}
