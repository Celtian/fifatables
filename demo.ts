import { Fifa, fifaConfig, fifaTableConfig, Table } from './lib';

const fifaConfigDemo = (): void => {
  console.log('⚽⚽⚽ Fifa config demo ⚽⚽⚽');

  console.log(fifaConfig(Fifa.Fifa11));

  console.log(fifaTableConfig(Fifa.Fifa11, Table.Leagues));
}

fifaConfigDemo();
