import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() user = new EventEmitter();
  @Output() changePageRegister = new EventEmitter();
  usuario = {
    email: '',
    password: '',
  };
  constructor() {}

  ngOnInit(): void {}
  handleLogin() {
    this.user.emit(this.usuario);
  }
  handleChangePageRegister() {
    this.changePageRegister.emit();
  }
}
