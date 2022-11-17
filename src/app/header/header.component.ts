import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  currentUser : any = {};
   
  ngOnInit(): void {
    this.authService.currentUser.subscribe(currentUser=>{
      this.currentUser = currentUser;
    })
  }
  navigate(link: string) {
    this.router.navigate(['/' + link]);
  }

  logout() {
    this.authService.logout();
  }
}
