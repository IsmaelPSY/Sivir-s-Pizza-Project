import {DefaultCrudRepository} from '@loopback/repository';
import {Cliente, ClienteRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.idCliente,
  ClienteRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(Cliente, dataSource);
  }
}
