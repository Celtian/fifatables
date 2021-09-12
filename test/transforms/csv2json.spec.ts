import { PassThrough } from 'stream';
import { Datatype, Field } from '../../lib/shared/interfaces';
import { Csv2JsonTransform } from '../../lib/transforms/csv2json';

describe('Csv2JsonTransform', () => {
  it('should return correct value', (done) => {
    const mockReadable = new PassThrough();

    const fields: Field[] = [
      {
        name: 'height',
        order: 0,
        type: Datatype.Int,
        default: 180,
        range: { min: 150, max: 215 },
        unique: false
      },
      {
        name: 'weight',
        order: 1,
        type: Datatype.Int,
        default: 80,
        range: { min: 50, max: 115 },
        unique: false
      }
    ];

    mockReadable.pipe(new Csv2JsonTransform({ fields }))
      .on('data', (chunk: Buffer) => expect(chunk.toString()).toEqual('{"height":180,"weight":80}'))
      .on('finish',() => done());

    setTimeout(() => {
      mockReadable.emit('data', '180\t80')
      mockReadable.emit('end')
    }, 100);
  });
})
