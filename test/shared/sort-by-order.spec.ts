import { Datatype, Field } from '../../lib/shared/interfaces';
import { sortByOrder } from '../../lib/shared/utils';

describe('sortByOrder', () => {
  it('should return correct value', () => {
    const a: Field = {
      name: 'height',
      order: 0,
      type: Datatype.Int,
      default: 180,
      range: { min: 150, max: 215 },
      unique: false
    };
    const b: Field = {
      name: 'weight',
      order: 1,
      type: Datatype.Int,
      default: 80,
      range: { min: 50, max: 115 },
      unique: false
    };
    expect(sortByOrder(a, b)).toEqual(-1);
    expect(sortByOrder(b, a)).toEqual(1);
    expect(sortByOrder(a, a)).toEqual(0);
  });
});

