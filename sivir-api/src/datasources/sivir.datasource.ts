import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'sivir',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: '__USER__',
  password: '__PASSWORD__',
  database: 'sivir'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class SivirDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'sivir';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.sivir', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
