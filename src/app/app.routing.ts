import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {UrlPermission} from "./urlPermission/url.permission";
import {GrantorComponent} from "./components/grantor/grantor.component";
import {SignalComponent} from "./components/signal/signal.component";


const appRoutes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [UrlPermission]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'grantors', component: GrantorComponent},
  {path: 'signals', component: SignalComponent},

  {path: '**', redirectTo: '/login'}
];

export const routing = RouterModule.forRoot(appRoutes);
