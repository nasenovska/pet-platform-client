import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/model.user";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.accountService.createAccount(this.user)
      .subscribe((response) => {
          this.user = response.body;
          this.router.navigate(['/login']);
        }, err => {
          this.errorMessage = err.body;
        }
      )
  }
}
