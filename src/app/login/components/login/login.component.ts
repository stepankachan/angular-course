import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppUser} from '../../models/app-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  private users: AppUser[] = [new AppUser('stepan', '1111'),
    new AppUser('admin', '1111'),
    new AppUser('user', '1111'),
    new AppUser('user1', '2222'),
    new AppUser('admin1', '2222')];

  loginValue = '';
  passwordValue = '';

  constructor(private router: Router) {
  }

  login(login, password) {
    console.log(this.loginValue + ' ' + this.passwordValue);
    if (this.users.find(user => this.isUserMatches(user.login, user.password)) !== undefined) {
      this.router.navigate(['main'], { queryParams: { user: this.loginValue}, queryParamsHandling: 'merge' });
    } else {
      this.router.navigate(['error']);
    }

  }

  isUserMatches(login, password) {
    return (this.loginValue === login && this.passwordValue === password);
  }
}
