import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fat Cats Platform';
  static API_URL = "http://localhost:8080";
  isMenuCollapsed = true;
  isUserLogged = false;

  constructor(public authService: AuthService, public router: Router) {
  }

  logout() {
    this.authService.logout()
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        () => {
        });
  }

}
