import {DefaultCrudRepository} from '@loopback/repository';
import {Pedido, PedidoRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.idPedido,
  PedidoRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(Pedido, dataSource);
  }
}
