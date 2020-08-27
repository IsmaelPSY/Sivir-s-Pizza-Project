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
import {Promocion} from '../models';
import {PromocionRepository} from '../repositories';

export class PromocionController {
  constructor(
    @repository(PromocionRepository)
    public promocionRepository : PromocionRepository,
  ) {}

  @post('/promocion', {
    responses: {
      '200': {
        description: 'Promocion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Promocion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promocion, {
            title: 'NewPromocion',
            exclude: ['idPromocion'],
          }),
        },
      },
    })
    promocion: Omit<Promocion, 'idPromocion'>,
  ): Promise<Promocion> {
    return this.promocionRepository.create(promocion);
  }

  @get('/promocion/count', {
    responses: {
      '200': {
        description: 'Promocion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Promocion) where?: Where<Promocion>,
  ): Promise<Count> {
    return this.promocionRepository.count(where);
  }

  @get('/promocion', {
    responses: {
      '200': {
        description: 'Array of Promocion model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Promocion, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Promocion) filter?: Filter<Promocion>,
  ): Promise<Promocion[]> {
    return this.promocionRepository.find(filter);
  }

  @patch('/promocion', {
    responses: {
      '200': {
        description: 'Promocion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promocion, {partial: true}),
        },
      },
    })
    promocion: Promocion,
    @param.where(Promocion) where?: Where<Promocion>,
  ): Promise<Count> {
    return this.promocionRepository.updateAll(promocion, where);
  }

  @get('/promocion/{id}', {
    responses: {
      '200': {
        description: 'Promocion model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Promocion, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Promocion, {exclude: 'where'}) filter?: FilterExcludingWhere<Promocion>
  ): Promise<Promocion> {
    return this.promocionRepository.findById(id, filter);
  }

  @patch('/promocion/{id}', {
    responses: {
      '204': {
        description: 'Promocion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promocion, {partial: true}),
        },
      },
    })
    promocion: Promocion,
  ): Promise<void> {
    await this.promocionRepository.updateById(id, promocion);
  }

  @put('/promocion/{id}', {
    responses: {
      '204': {
        description: 'Promocion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() promocion: Promocion,
  ): Promise<void> {
    await this.promocionRepository.replaceById(id, promocion);
  }

  @del('/promocion/{id}', {
    responses: {
      '204': {
        description: 'Promocion DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.promocionRepository.deleteById(id);
  }
}
