import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  @Output() onClickCancel = new EventEmitter();
  @Output() onClickRegistro = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  invalidUsername = false;
  invalidPassword = false;
  ngOnInit(): void {}
  returnLogin() {
    this.onClickCancel.emit();
  }
  onRegister() {
    if (this.form.valid) {
      this.onClickRegistro.emit(this.form.value);
    } else {
      if (this.form.controls['email'].invalid) {
        this.invalidUsername = true;
      }
      if (this.form.controls['password'].invalid) {
        this.invalidPassword = true;
      }
      console.log('err');
    }
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
