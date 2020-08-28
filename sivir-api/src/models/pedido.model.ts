import {Entity, model, property} from '@loopback/repository';

@model()
export class Pedido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idPedido: string;

  @property({
    type: 'number',
    required: true,
  })
  telefonoPedido: number;

  @property({
    type: 'string',
    required: true,
  })
  direccionPedido: string;

  @property({
    type: 'string',
    required: true,
  })
  clientePedido: string;

  @property({
    type: 'string',
    required: true,
  })
  referenciaPedido: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estadoProceso: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  estadoPago: boolean;

  @property({
    type: 'number',
    required: true,
  })
  montoTotal: number;


  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
