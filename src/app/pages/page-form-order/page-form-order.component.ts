import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-page-form-order',
  templateUrl: './page-form-order.component.html',
  styleUrls: ['./page-form-order.component.scss'],
})
export class PageFormOrderComponent implements OnInit {
  form!: FormGroup;

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      direccion: ['', Validators.required],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      telefono: ['', Validators.required],
      nro_tarjeta: ['', Validators.required],
      fecha_caducidad: ['', Validators.required],
      cvv: ['', Validators.required],
      products: ['', Validators.required],
    });
  }

  cartProducts: any;
  counter = 0;
  total = 0;
  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private route: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
      this.cartProducts = products;
      console.log(this.cartProducts);
      this.total = products.reduce((sum, item) => sum + item.precio, 0);
      this.form.controls['products'].setValue(this.cartProducts);
    });
  }
  onSave() {
    console.log(this.form.value);
    this.save(this.form.value);
  }
  save(data: any) {
    this.storeService.create(data).subscribe({
      next: (result) => {
        console.log(result);
        this.route.navigate(['/mk/products']);
      },
    });
  }
}
