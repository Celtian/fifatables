import { Datatype, Field } from '../../lib/shared/interfaces';
import { formatRawValue } from '../../lib/shared/utils';


/*
export const formatRawValue = (field: Field, value: string): string | number => {
  switch (field.type) {
    case Datatype.Int:
      return Number(value);
    case Datatype.Float:
      return Number(value.replace(',', '.'));
    default:
      return value;
  }
}
*/

describe('formatRawValue', () => {
  it('should return integer', () => {
    const field: Field = {
      name: 'height',
      order: 0,
      type: Datatype.Int,
      default: 180,
      range: { min: 150, max: 215 },
      unique: false
    };
    expect(formatRawValue(field, '10')).toEqual(10);
  });

  it('should return float', () => {
    const field: Field = {
      name: 'height',
      order: 0,
      type: Datatype.Float,
      default: 180,
      range: { min: 150, max: 215 },
      unique: false
    };
    expect(formatRawValue(field, '10.49')).toEqual(10.49);
  });

  it('should return float', () => {
    const field: Field = {
      name: 'height',
      order: 0,
      type: Datatype.String,
      default: 180,
      range: { min: 150, max: 215 },
      unique: false
    };
    expect(formatRawValue(field, 'text')).toEqual('text');
  });
});
