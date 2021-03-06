import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

    loginUser(event) {
      event.preventDefault();
      const target = event.target;
      const username = target.querySelector('#username').value;
      const password = target.querySelector('#password').value;
      this.authService.getUserDetails(username, password).subscribe((data: {success: string}) => {
        if (data.success) {
          console.log(data);
        } else {
          window.alert('invalid');
        }
      });

    }
}
