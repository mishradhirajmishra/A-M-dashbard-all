import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from "../../shared/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: String = 'Dashboard';
  constructor(private router: Router, private as: AuthService) {

  }
  ngOnInit() {
  
  }

}
