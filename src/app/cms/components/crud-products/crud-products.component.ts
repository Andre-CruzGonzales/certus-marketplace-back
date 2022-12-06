import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-crud-products',
  templateUrl: './crud-products.component.html',
  styleUrls: ['./crud-products.component.scss'],
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
export class CrudProductsComponent implements OnInit {
  categories: any = [];
  form!: FormGroup;
  products: any[] = [];
  submited: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private productoService: ProductsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.buildForm();
  }
  showDialog = false;
  ngOnInit(): void {
    this.getAllCategoria();
    this.getAll();
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      precio: ['', Validators.required],
      publicado: [0, Validators.required],
      categoria_id: ['', Validators.required],
    });
  }

  openNew() {
    this.form.reset();
    this.action = 'save';
    this.showDialog = true;
  }
  hideDialog() {
    this.showDialog = false;
  }
  action = 'save';
  onSave() {
    this.submited = true;
    console.log(this.form.value);
    this.form.controls['publicado'].setValue(0);
    if (this.form.valid) {
      if (this.action === 'save') {
        this.save();
      } else if (this.action === 'edit') {
        this.update(this.id);
      }
    } else {
      this.submited = true;
    }
  }
  onChangeCategories(e: any) {
    this.form.controls['categoria_id'].setValue(e);
  }
  save() {
    var formData = new FormData();
    formData.append('nombre', this.form.controls['nombre'].value);
    formData.append('descripcion', this.form.controls['descripcion'].value);
    formData.append('precio', this.form.controls['precio'].value);
    formData.append('publicado', this.form.controls['publicado'].value);
    formData.append('imagen', this.form.controls['imagen'].value);
    formData.append('categoria_id', this.form.controls['categoria_id'].value);
    this.productoService.create(formData).subscribe({
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
    console.log('save');
  }
  id: any;
  onEdit(e: any) {
    this.id = e.id;
    this.action = 'edit';
    this.form.controls['nombre'].setValue(e.nombre);
    this.form.controls['descripcion'].setValue(e.descripcion);
    this.form.controls['precio'].setValue(e.precio);
    this.form.controls['publicado'].setValue(e.publicado);
    this.form.controls['imagen'].setValue(e.imagen);
    this.form.controls['categoria_id'].setValue(e.categoria_id);
    this.showDialog = true;
  }
  update(id: any) {
    var formData = new FormData();
    formData.append('nombre', this.form.controls['nombre'].value);
    formData.append('descripcion', this.form.controls['descripcion'].value);
    formData.append('precio', this.form.controls['precio'].value);
    formData.append('publicado', this.form.controls['publicado'].value);
    formData.append('imagen', this.form.controls['imagen'].value);
    formData.append('categoria_id', this.form.controls['categoria_id'].value);
    this.productoService.update(id, formData).subscribe({
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
    console.log('save');
  }
  onDelete(e: any) {
    console.log(e);
    this.confirmationService.confirm({
      message: 'Seguro de eliminar el producto ' + e.nombre + '?',
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
  getAll() {
    this.productoService.get().subscribe({
      next: (result) => {
        console.log(result);
        this.products = result;
      },
    });
  }
  getAllCategoria() {
    this.categoriaService.getAll().subscribe({
      next: (result) => {
        this.categories = result;
      },
    });
  }
  dto: any = {};
  url: any = '';
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
  onPublicar(e: any) {
    console.log(e);
    this.confirmationService.confirm({
      message: 'Seguro de eliminar el producto ' + e.nombre + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let data: any = {};
        if (e.publicado === 1) {
          data = {
            publicado: 0,
          };
          console.log('adsasdas', data);
        } else if (e.publicado === 0) {
          data = {
            publicado: 1,
          };
        }

        this.publicar(e.id, data);
      },
    });
  }
  publicar(id: any, data: any) {
    console.log('aaaaaaaa', data);
    this.productoService.publicar(id, data).subscribe({
      next: (result) => {
        this.getAll();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Actualizado',
          life: 3000,
        });
      },
    });
  }
}
