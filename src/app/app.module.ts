import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { InteractionComponent } from './interaction/interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestTwoComponent,
    InteractionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
