import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  readonly APIUrl='http://localhost:63065/api'
  readonly APIUrl1='http://localhost:63065/api/movie'
  constructor(private http:HttpClient) { }

  getMoviesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/movie');
  }
  addMovie(val:any):Observable<any>{
    console.log(val )
    return  this.http.post(this.APIUrl+'/movie',val)
  }
  deleteMovies(movieId:any){
    return this.http.delete(`${this.APIUrl1}/${movieId}`);
  }


}
