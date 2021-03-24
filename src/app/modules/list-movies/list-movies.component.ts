import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  MoviesList:any=[];

  constructor(private service:SharedServiceService) { }

  ngOnInit(): void {
    this.refreshMoviesList();
  }

  refreshMoviesList(){
  
    this.service.getMoviesList().subscribe((res:any)=>{
      this.MoviesList=res;
      console.log(this.MoviesList);
  });  
  }

  
deleteMovie(movieId:any){
  console.log(movieId)
  this.service.deleteMovies(movieId).subscribe(res=>{
    console.log("deleted")
    this.refreshMoviesList();
  });
  }

}
