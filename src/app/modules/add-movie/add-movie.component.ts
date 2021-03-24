import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/models/movies';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  
  MovieForm!: FormGroup
  path!: string;
  employeeIdUpdate: null;
  SharedService: any;
  dataSaved: boolean | undefined;
  massage: string | undefined;
  data: any;
  movies: any;
  movieBYId: any;
  updateId: any;
  movieUpdateForm!: FormGroup;
  constructor(private as: SharedServiceService, private router: Router) { }

  Movie_Id: string | undefined;
  Movie_Title: string | undefined;

  movieObj: Movies = {
    MovieTitle: '',
    ReleaseDate: '',
    Duration: 0,
    Plot: '',
    Rating: 0,
    Hidden:0,
    ThumbnailUrl:'',
    VideoUrl:'',
    GenreName:'',
    StarCastName:''
    
  }
  ngOnInit() {
    this.MovieForm = new FormGroup({
      MovieTitle: new FormControl('', [Validators.required]),
    ReleaseDate: new FormControl('', [Validators.required]),
    Duration: new FormControl('', [Validators.required]),
      Plot: new FormControl('', [Validators.required]),
      Rating: new FormControl('', [Validators.required]),
      Hidden: new FormControl('', [Validators.required]),
      ThumbnailUrl: new FormControl('', [Validators.required]),
      VideoUrl: new FormControl('', [Validators.required]),
      GenerName: new FormControl('', [Validators.required]),
      StarCastName: new FormControl('', [Validators.required])
    })

  }
  
  addMovie() {
   
    this.movieObj.MovieTitle = this.MovieForm.value.Movie_Title;
    this.movieObj.Duration = this.MovieForm.value.Duration
    this.movieObj.ReleaseDate = this.MovieForm.value.ReleaseDate;
    this.movieObj.Plot = this.MovieForm.value.Plot;
    this.movieObj.Rating = this.MovieForm.value.Rating;
    this.movieObj.VideoUrl = this.MovieForm.value.VideoUrl;
    this.movieObj.Hidden = this.MovieForm.value.Hidden;
    this.movieObj.ThumbnailUrl = this.MovieForm.value.ThumbnailUrl;
    this.movieObj.VideoUrl = this.MovieForm.value.VideoUrl;
    this.movieObj.GenreName = this.MovieForm.value.GenreName;
    this.movieObj.StarCastName = this.MovieForm.value.StarCastName;
    this.as.addMovie(this.movieObj)
      .subscribe((res => {
        if (res)
          this.router.navigate(['show-delete']);

      }))

  }

}

  

