import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() onClickCancel = new EventEmitter();
  @Output() onClickRegistro = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  returnLogin() {
    this.onClickCancel.emit();
  }
  onRegister() {
    this.onClickRegistro.emit();
  }
}
