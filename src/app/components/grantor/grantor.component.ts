import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Grantor} from "../../model/model.grantor";
import {GrantorService} from "../../services/grantor.service";

@Component({
  selector: 'app-profile',
  templateUrl: './grantor.component.html',
  styleUrls: ['./grantor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GrantorComponent implements OnInit {
  grantors: Grantor[];

  constructor(public authService: AuthService, public grantorService: GrantorService, public router: Router) {
    this.grantors = [];
  }

  ngOnInit() {
    this.grantorService.getAllGrantors().subscribe((grantors: Grantor[]) => {
      console.log(grantors)
      this.grantors = grantors;
    });
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
