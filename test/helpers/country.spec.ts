import { coerceCountry } from '../../lib/helpers/country';
import { FifaTablesCountry, FifaTablesProvider } from '../../lib/shared/interfaces';

describe('coerceCountry', () => {
  describe('transfermarkt', () => {
    it('should return correct value', () => {
      expect(coerceCountry('1', FifaTablesProvider.TRANSFERMARKT)).toEqual(FifaTablesCountry.AFGHANISTAN);
    });

    it('should return undefined', () => {
      expect(coerceCountry('xxx', FifaTablesProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCountry('', FifaTablesProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCountry('999999', FifaTablesProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCountry(null, FifaTablesProvider.TRANSFERMARKT)).toEqual(undefined);
      expect(coerceCountry(undefined, FifaTablesProvider.TRANSFERMARKT)).toEqual(undefined);
    });
  });

  describe('soccerway', () => {
    it('should return correct value', () => {
      expect(coerceCountry('Afghanistan', FifaTablesProvider.SOCCERWAY)).toEqual(FifaTablesCountry.AFGHANISTAN);
    });

    it('should return undefined', () => {
      expect(coerceCountry('xxx', FifaTablesProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCountry('', FifaTablesProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCountry('999999', FifaTablesProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCountry(null, FifaTablesProvider.SOCCERWAY)).toEqual(undefined);
      expect(coerceCountry(undefined, FifaTablesProvider.SOCCERWAY)).toEqual(undefined);
    });
  });

  describe('fotbalunas', () => {
    it('should return undefined', () => {
      expect(coerceCountry('whatever', FifaTablesProvider.FOTBALUNAS)).toEqual(undefined);
    });
  });

  describe('eurofotbal', () => {
    it('should return correct value', () => {
      expect(coerceCountry('Afghánistán', FifaTablesProvider.EUROFOTBAL)).toEqual(FifaTablesCountry.AFGHANISTAN);
    });

    it('should return undefined', () => {
      expect(coerceCountry('xxx', FifaTablesProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceCountry('', FifaTablesProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceCountry('999999', FifaTablesProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceCountry(null, FifaTablesProvider.EUROFOTBAL)).toEqual(undefined);
      expect(coerceCountry(undefined, FifaTablesProvider.EUROFOTBAL)).toEqual(undefined);
    });
  });
});
