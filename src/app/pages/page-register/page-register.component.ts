import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss'],
})
export class PageRegisterComponent implements OnInit {
  displayDialog: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  showModalDialog() {
    this.displayDialog = true;
  }
  hideModalDialog() {
    this.displayDialog = false;
  }
  onReturnLogin() {
    this.router.navigate(['/']);
  }
  onRegister() {}
}
