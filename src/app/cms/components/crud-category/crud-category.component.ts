import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';
@Component({
  selector: 'app-crud-category',
  templateUrl: './crud-category.component.html',
  styleUrls: ['./crud-category.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [MessageService, ConfirmationService],
})
export class CrudCategoryComponent implements OnInit {
  form!: FormGroup;
  categories: any[] = [];
  submited = false;
  dto: any = {};
  url: any = null;
  action = 'save';
  id: any;
  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.buildForm();
  }
  showDialog = false;
  ngOnInit(): void {
    this.getAll();
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      imagen: [''],
    });
  }
  openNew() {
    this.action = 'save';
    this.showDialog = true;
  }
  hideDialog() {
    this.showDialog = false;
  }
  OnSave() {
    console.log('save');
    this.submited = true;
    console.log(this.form.value);
    if (this.form.valid) {
      if (this.action === 'save') {
        this.save();
      } else if (this.action === 'edit') {
        this.update();
      }
    }
  }
  save() {
    var formData = new FormData();
    formData.append('nombre', this.form.controls['nombre'].value);
    formData.append('imagen', this.form.controls['imagen'].value);
    this.categoriaService.create(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.getAll();
        this.showDialog = false;
        this.form.reset();
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  getAll() {
    this.categoriaService.getAll().subscribe({
      next: (result) => {
        this.categories = result;
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  OnSelect(event: any) {
    this.form.controls['imagen'].setValue(event.files[0]);
    this.dto.imagen = event.files[0];
    //const objectURL = URL.createObjectURL(this.dto.imagen);
    const reader = new FileReader();
    reader.readAsDataURL(this.dto.imagen);
    //this.dto.url_imagen = objectURL;
    reader.onload = () => {
      this.url = reader.result;
    };
    console.log('asdasdsadas', this.url);
    //console.log(objectURL);
  }
  onRemove() {
    console.log('remove');
    this.dto.imagen = '';
    this.url = '';
    this.form.controls['imagen'].setValue('');
  }
  onEdit(e: any) {
    this.action = 'edit';
    this.id = e.id;
    this.form.controls['nombre'].setValue(e.nombre);

    console.log(this.url);
    if (e.url_imagen) {
      this.form.controls['imagen'].setValue('');
      this.dto.url_imagen = e.url_imagen;
      this.url = e.url_imagen;
      console.log(this.url);
      //this.form.controls['url_imagen'].setValue(curso.url_imagen);
    }
    this.showDialog = true;
  }
  update() {
    var formData = new FormData();
    formData.append('nombre', this.form.controls['nombre'].value);
    formData.append('imagen', this.form.controls['imagen'].value);
    this.categoriaService.update(this.id, formData).subscribe({
      next: (result) => {
        console.log(result);
        this.getAll();
        this.showDialog = false;
        this.form.reset();
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  onDelete(e: any) {
    this.confirmationService.confirm({
      message: 'Seguro de eliminar la categoría ' + e.nombre + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(e.id);
      },
    });
  }
  delete(id: any) {
    this.categoriaService.delete(id).subscribe({
      next: (result) => {
        this.getAll();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
        console.log(result);
      },
    });
  }
  getEventValue(event: any): string {
    console.log(event.target.value);
    return event.target.value;
  }
}
