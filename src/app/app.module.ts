import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { DefaultModule } from './layout/default/default.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ListMoviesComponent } from './modules/list-movies/list-movies.component';
import { UsersListComponent } from './modules/users-list/users-list.component';
import{HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
     ListMoviesComponent,
    UsersListComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
MatListModule,
MatFormFieldModule,
FormsModule,
ReactiveFormsModule,
MatDatepickerModule,
MatSelectModule,
MatCardModule,
MatInputModule,
HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
