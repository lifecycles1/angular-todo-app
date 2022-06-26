import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//formsmodule allows the component to enable [(ngModel)] attribute inside <form> tag
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
