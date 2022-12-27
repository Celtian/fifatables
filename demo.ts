import { Fifa, fifaConfig, fifaTableConfig, formatRawValue, sortByOrder, Table } from './src';

const fifaConfigDemo = (): void => {
  console.log('⚽⚽⚽ Fifa config demo ⚽⚽⚽');

  console.log(fifaConfig(Fifa.Fifa11));

  console.log(fifaTableConfig(Fifa.Fifa11, Table.Leagues));

  console.log(fifaTableConfig(Fifa.Fifa11, Table.Leagues).sort(sortByOrder));

  console.log(formatRawValue(fifaTableConfig(Fifa.Fifa11, Table.Leagues)[0], '2000'));
}

fifaConfigDemo();
