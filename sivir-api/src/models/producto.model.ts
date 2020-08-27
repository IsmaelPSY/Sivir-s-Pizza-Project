import {Entity, model, property} from '@loopback/repository';

@model()
export class Producto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idProducto: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreProducto: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionProducto: string;

  @property({
    type: 'string',
    required: true,
  })
  precioProducto: string;

  @property({
    type: 'any',
  })
  imagenProducto?: any;


  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
