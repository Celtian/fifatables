import { PassThrough } from 'stream';
import { Datatype, Field } from '../../lib/shared';
import { Json2CsvTransform } from '../../lib/transforms/json2csv';

describe('Json2CsvTransform', () => {
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

    mockReadable.pipe(new Json2CsvTransform({ fields }))
      .on('data', (chunk: Buffer) => expect(chunk.toString()).toEqual('\ufeffheight\tweight\r\n180\t80'))
      .on('finish',() => done());

    setTimeout(() => {
      mockReadable.emit('data', '{"height":180,"weight":80}')
      mockReadable.emit('end')
    }, 100);
  })
})
