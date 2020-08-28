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
import {Producto} from '../models';
import {ProductoRepository} from '../repositories';

export class ProductoController {
  constructor(
    @repository(ProductoRepository)
    public productoRepository : ProductoRepository,
  ) {}

  @post('/producto', {
    responses: {
      '200': {
        description: 'Producto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Producto)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Producto, {
            title: 'NewProducto',
            exclude: ['idProducto'],
          }),
        },
      },
    })
    producto: Omit<Producto, 'idProducto'>,
  ): Promise<Producto> {
    return this.productoRepository.create(producto);
  }

  @get('/producto/count', {
    responses: {
      '200': {
        description: 'Producto model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Producto) where?: Where<Producto>,
  ): Promise<Count> {
    return this.productoRepository.count(where);
  }

  @get('/producto', {
    responses: {
      '200': {
        description: 'Array of Producto model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Producto, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Producto) filter?: Filter<Producto>,
  ): Promise<Producto[]> {
    return this.productoRepository.find(filter);
  }

  @patch('/producto', {
    responses: {
      '200': {
        description: 'Producto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Producto, {partial: true}),
        },
      },
    })
    producto: Producto,
    @param.where(Producto) where?: Where<Producto>,
  ): Promise<Count> {
    return this.productoRepository.updateAll(producto, where);
  }

  @get('/producto/{id}', {
    responses: {
      '200': {
        description: 'Producto model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Producto, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Producto, {exclude: 'where'}) filter?: FilterExcludingWhere<Producto>
  ): Promise<Producto> {
    return this.productoRepository.findById(id, filter);
  }

  @patch('/producto/{id}', {
    responses: {
      '204': {
        description: 'Producto PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Producto, {partial: true}),
        },
      },
    })
    producto: Producto,
  ): Promise<void> {
    await this.productoRepository.updateById(id, producto);
  }

  @put('/producto/{id}', {
    responses: {
      '204': {
        description: 'Producto PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() producto: Producto,
  ): Promise<void> {
    await this.productoRepository.replaceById(id, producto);
  }

  @del('/producto/{id}', {
    responses: {
      '204': {
        description: 'Producto DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.productoRepository.deleteById(id);
  }
}
