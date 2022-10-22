export interface User {
  id: 1;
  nombres: null;
  apellido_paterno: null;
  apellido_materno: null;
  email: 'ajcrus@gmail.com';
  celular: null;
  fecha_nacimiento: null;
  tipo_documento_id: null;
  numero_documento: null;
}

export interface CreateUserDTO extends Omit<User, 'id'> {}
