import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private route: Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
  }
  gotoAdd() {
    this.route.navigate(['add-movie']);
  }
  gotoListMovies(){
    this.route.navigate(['list-movies']);
  }
  goToDashBoard() {
    this.route.navigate(['dashboard']);
  }
  gotoUsers() {
    this.route.navigate(['users']);
  }

}
