import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import {AccountService} from "./services/account.service";
import {ProfileComponent} from './components/profile/profile.component';
import {routing} from "./app.routing";
import {FacebookModule} from "ngx-facebook";
import {UrlPermission} from "./urlPermission/url.permission";
import {GrantorComponent} from "./components/grantor/grantor.component";
import {SignalComponent} from "./components/signal/signal.component";
import {SignalService} from "./services/signal.service";
import {GrantorService} from "./services/grantor.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import {FavouriteButtonComponent} from "./components/favourite-button/favourite-button.component";
import {FormatPipe} from "./pipes/format.pipe";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    GrantorComponent,
    SignalComponent,
    PostsListComponent,
    PostItemComponent,
    FavouriteButtonComponent,
    FormatPipe
  ],
    imports: [
        BrowserModule, HttpModule, FormsModule, routing, FacebookModule.forRoot(), NgbModule,
    ],
  providers: [AuthService, AccountService, UrlPermission, SignalService, GrantorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
