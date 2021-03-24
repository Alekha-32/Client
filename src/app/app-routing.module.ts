import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { AddMovieComponent } from './modules/add-movie/add-movie.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ListMoviesComponent } from './modules/list-movies/list-movies.component';
import { UsersListComponent } from './modules/users-list/users-list.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'add-movie', 
    component: AddMovieComponent,
  },
{
  path: 'list-movies', 
  component: ListMoviesComponent,
},
{
  path:'users',
  component:UsersListComponent
}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
