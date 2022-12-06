import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/product/auth.model';
@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss'],
})
export class PageRegisterComponent implements OnInit {
  displayDialog: boolean = false;
  data: Login = {
    email: '',
    password: '',
  };
  form!: FormGroup;
  constructor(private router: Router, private authService: AuthService) {}

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

  onRegister(event: Login) {
    //console.log(event);
    this.authService.register(event).subscribe({
      next: (result) => {
        this.router.navigate(['/login']);
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
