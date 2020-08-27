import {Entity, model, property} from '@loopback/repository';

@model()
export class AdministradorSistema extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idUsuarioA: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  login: string;

  @property({
    type: 'string',
    required: true,
  })
  cargo: string;


  constructor(data?: Partial<AdministradorSistema>) {
    super(data);
  }
}

export interface AdministradorSistemaRelations {
  // describe navigational properties here
}

export type AdministradorSistemaWithRelations = AdministradorSistema & AdministradorSistemaRelations;
