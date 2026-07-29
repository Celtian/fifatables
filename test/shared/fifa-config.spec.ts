import { Datatype, Field, FifaConfig, Table } from '../../src/shared/interfaces';

describe('FifaConfig', () => {
  it('should initialize every supported table with an empty array', () => {
    const config = new FifaConfig();

    expect(Object.keys(config).sort()).toEqual(Object.values(Table).sort());
    expect(Object.values(config).every((fields) => Array.isArray(fields) && fields.length === 0)).toBe(true);
  });

  it('should keep table fields isolated between instances', () => {
    const first = new FifaConfig();
    const second = new FifaConfig();
    const player: Field = {
      name: 'playerid',
      order: 0,
      type: Datatype.Int,
      default: 0
    };

    first.players.push(player);

    expect(first.players).toEqual([player]);
    expect(first.teams).toEqual([]);
    expect(second.players).toEqual([]);
  });
});
