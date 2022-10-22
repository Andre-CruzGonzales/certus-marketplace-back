import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/product/auth.model';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  token: string = '';
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}
  onClickLogin(data: Login) {
    this.auth.login(data).subscribe((data) => {
      this.token = data.token;
      this.router.navigate(['/products']);
    });
  }
  onChangePageRegister() {
    this.router.navigate(['/register']);
  }
}
