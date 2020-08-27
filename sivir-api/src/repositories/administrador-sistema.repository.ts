import {DefaultCrudRepository} from '@loopback/repository';
import {AdministradorSistema, AdministradorSistemaRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AdministradorSistemaRepository extends DefaultCrudRepository<
  AdministradorSistema,
  typeof AdministradorSistema.prototype.idUsuarioA,
  AdministradorSistemaRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(AdministradorSistema, dataSource);
  }
}
