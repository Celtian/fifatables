import { coerceDate } from '../../lib/helpers/date';
import { FifaTablesProvider } from '../../lib/shared/interfaces';

describe('coerceDate', () => {
  describe('transfermarkt', () => {
    it('should return correct value', () => {
      expect(coerceDate('Oct 17, 1994 (26)', FifaTablesProvider.TRANSFERMARKT)).toEqual('1994-10-17');
      expect(coerceDate('Oct 17, 1994', FifaTablesProvider.TRANSFERMARKT)).toEqual('1994-10-17');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', FifaTablesProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceDate('', FifaTablesProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceDate(null, FifaTablesProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceDate(undefined, FifaTablesProvider.TRANSFERMARKT)).toEqual(undefined);
    });
  });

  describe('soccerway', () => {
    it('should return correct value', () => {
      expect(coerceDate('4 March 1993', FifaTablesProvider.SOCCERWAY)).toEqual('1993-03-04');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', FifaTablesProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceDate('', FifaTablesProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceDate(null, FifaTablesProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceDate(undefined, FifaTablesProvider.SOCCERWAY)).toEqual(undefined);
    });
  });

  describe('fotbalunas', () => {
    it('should return undefined', () => {
      expect(coerceDate('whatever', FifaTablesProvider.FOTBALUNAS)).toEqual(undefined);
    });
  });

  describe('eurofotbal', () => {
    it('should return correct value', () => {
      expect(coerceDate('18.03.1995', FifaTablesProvider.EUROFOTBAL)).toEqual('1995-03-18');
    });

    it('should return undefined', () => {
      expect(coerceDate('xxx', FifaTablesProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceDate('', FifaTablesProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceDate(null, FifaTablesProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceDate(undefined, FifaTablesProvider.EUROFOTBAL)).toEqual(undefined);
    });
  });
});
