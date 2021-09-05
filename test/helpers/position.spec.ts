import { coercePositionGroup } from '../../lib/helpers/position';
import { FifaTablesPositionGroup } from '../../lib/shared/interfaces';

describe('coercePositionGroup', () => {
  it('should return goalkeeper', () => {
    expect(coercePositionGroup('Goalkeeper')).toEqual(FifaTablesPositionGroup.GOALKEEPER);
  });

  it('should return defender', () => {
    expect(coercePositionGroup('Centre-Back')).toEqual(FifaTablesPositionGroup.DEFENDER);
    expect(coercePositionGroup('Left-Back')).toEqual(FifaTablesPositionGroup.DEFENDER);
    expect(coercePositionGroup('Right-Back')).toEqual(FifaTablesPositionGroup.DEFENDER);
    expect(coercePositionGroup('Defender')).toEqual(FifaTablesPositionGroup.DEFENDER);
  });

  it('should return midfielder', () => {
    expect(coercePositionGroup('Defensive Midfield')).toEqual(FifaTablesPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Central Midfield')).toEqual(FifaTablesPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Right Midfield')).toEqual(FifaTablesPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Left Midfield')).toEqual(FifaTablesPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Attacking Midfield')).toEqual(FifaTablesPositionGroup.MIDFIELDER);
    expect(coercePositionGroup('Midfielder')).toEqual(FifaTablesPositionGroup.MIDFIELDER);
  });

  it('should return attacker', () => {
    expect(coercePositionGroup('Left Winger')).toEqual(FifaTablesPositionGroup.ATTACKER);
    expect(coercePositionGroup('Right Winger')).toEqual(FifaTablesPositionGroup.ATTACKER);
    expect(coercePositionGroup('Centre-Forward')).toEqual(FifaTablesPositionGroup.ATTACKER);
    expect(coercePositionGroup('Attacker')).toEqual(FifaTablesPositionGroup.ATTACKER);
  });

  it('should return undefined', () => {
    expect(coercePositionGroup('xxx')).toEqual(undefined);
    expect(coercePositionGroup('')).toEqual(undefined);
    expect(coercePositionGroup(null)).toEqual(undefined);
    expect(coercePositionGroup(undefined)).toEqual(undefined);
  });
});
