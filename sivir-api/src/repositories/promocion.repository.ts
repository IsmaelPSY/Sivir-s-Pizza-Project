import {DefaultCrudRepository} from '@loopback/repository';
import {Promocion, PromocionRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PromocionRepository extends DefaultCrudRepository<
  Promocion,
  typeof Promocion.prototype.idPromocion,
  PromocionRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(Promocion, dataSource);
  }
}
