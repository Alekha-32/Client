import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router,private router:ActivatedRoute) { }


  ngOnInit(): void {
  }
  gotoListMovies(){
    this.route.navigate(['list-movies']);
  }

}
