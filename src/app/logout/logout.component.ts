import { Component, OnInit } from '@angular/core';
//import { AuthenticationService } from '../../services/authenticate.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(['']);
  }

}