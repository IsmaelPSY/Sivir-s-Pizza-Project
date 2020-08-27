import {Entity, model, property} from '@loopback/repository';

@model()
export class Promocion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idPromocion?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaInicio: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaCaducidad: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionPromocion: string;

  @property({
    type: 'any',
  })
  imagenPromocion?: any;


  constructor(data?: Partial<Promocion>) {
    super(data);
  }
}

export interface PromocionRelations {
  // describe navigational properties here
}

export type PromocionWithRelations = Promocion & PromocionRelations;
