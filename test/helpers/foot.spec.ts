import { coerceFoot } from '../../lib/helpers/foot';
import { FifaTablesFoot } from '../../lib/shared/interfaces';

describe('coerceFoot', () => {
  it('should return right', () => {
    expect(coerceFoot('right')).toEqual(FifaTablesFoot.RIGHT);
    expect(coerceFoot('Right')).toEqual(FifaTablesFoot.RIGHT);
  });

  it('should return left', () => {
    expect(coerceFoot('left')).toEqual(FifaTablesFoot.LEFT);
    expect(coerceFoot('Left')).toEqual(FifaTablesFoot.LEFT);
  });

  it('should return undefined', () => {
    expect(coerceFoot('xxx')).toEqual(undefined);
    expect(coerceFoot('')).toEqual(undefined);
    expect(coerceFoot(null)).toEqual(undefined);
    expect(coerceFoot(undefined)).toEqual(undefined);
  });
});
