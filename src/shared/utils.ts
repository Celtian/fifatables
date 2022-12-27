import { Datatype, Field } from './interfaces';

export const sortByOrder = (a: Field, b: Field) => a.order - b.order;

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
