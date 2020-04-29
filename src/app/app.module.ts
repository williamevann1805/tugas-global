import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { GlobSerService } from './glob-ser.service';

const ROUTES: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'input', component: InputComponent},
  {path : 'edit', component: EditComponent}
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, InputComponent, ListComponent, EditComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobSerService]
})
export class AppModule { }
