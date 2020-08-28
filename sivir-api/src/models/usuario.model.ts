import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  login: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @property({
    type: 'string',
    id: true,
    generated:true,
  })
  idUsuario?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidoUsuario: string;

  @property({
    type: 'number',
    required: true,
  })
  telefonoUsuario: number;

  @property({
    type: 'string',
    required: true,
  })
  cargo: string;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
