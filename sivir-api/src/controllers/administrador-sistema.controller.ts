import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {AdministradorSistema} from '../models';
import {AdministradorSistemaRepository} from '../repositories';

export class AdministradorSistemaController {
  constructor(
    @repository(AdministradorSistemaRepository)
    public administradorSistemaRepository : AdministradorSistemaRepository,
  ) {}

  @post('/Administrador', {
    responses: {
      '200': {
        description: 'AdministradorSistema model instance',
        content: {'application/json': {schema: getModelSchemaRef(AdministradorSistema)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdministradorSistema, {
            title: 'NewAdministradorSistema',
            exclude: ['idUsuarioA'],
          }),
        },
      },
    })
    administradorSistema: Omit<AdministradorSistema, 'idUsuarioA'>,
  ): Promise<AdministradorSistema> {
    return this.administradorSistemaRepository.create(administradorSistema);
  }

  @get('/Administrador/count', {
    responses: {
      '200': {
        description: 'AdministradorSistema model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(AdministradorSistema) where?: Where<AdministradorSistema>,
  ): Promise<Count> {
    return this.administradorSistemaRepository.count(where);
  }

  @get('/Administrador', {
    responses: {
      '200': {
        description: 'Array of AdministradorSistema model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(AdministradorSistema, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(AdministradorSistema) filter?: Filter<AdministradorSistema>,
  ): Promise<AdministradorSistema[]> {
    return this.administradorSistemaRepository.find(filter);
  }

  @patch('/Administrador', {
    responses: {
      '200': {
        description: 'AdministradorSistema PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdministradorSistema, {partial: true}),
        },
      },
    })
    administradorSistema: AdministradorSistema,
    @param.where(AdministradorSistema) where?: Where<AdministradorSistema>,
  ): Promise<Count> {
    return this.administradorSistemaRepository.updateAll(administradorSistema, where);
  }

  @get('/Administrador/{id}', {
    responses: {
      '200': {
        description: 'AdministradorSistema model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AdministradorSistema, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AdministradorSistema, {exclude: 'where'}) filter?: FilterExcludingWhere<AdministradorSistema>
  ): Promise<AdministradorSistema> {
    return this.administradorSistemaRepository.findById(id, filter);
  }

  @patch('/Administrador/{id}', {
    responses: {
      '204': {
        description: 'AdministradorSistema PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdministradorSistema, {partial: true}),
        },
      },
    })
    administradorSistema: AdministradorSistema,
  ): Promise<void> {
    await this.administradorSistemaRepository.updateById(id, administradorSistema);
  }

  @put('/Administrador/{id}', {
    responses: {
      '204': {
        description: 'AdministradorSistema PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() administradorSistema: AdministradorSistema,
  ): Promise<void> {
    await this.administradorSistemaRepository.replaceById(id, administradorSistema);
  }

  @del('/Administrador/{id}', {
    responses: {
      '204': {
        description: 'AdministradorSistema DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.administradorSistemaRepository.deleteById(id);
  }
}
