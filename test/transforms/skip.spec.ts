import { PassThrough } from 'stream';
import { SkipTransform } from '../../lib/transforms/skip';

describe('SkipTransform', () => {
  it('should return correct value', (done) => {
    const mockReadable = new PassThrough();

    mockReadable
      .pipe(new SkipTransform({ skip: 1 }))
      .on('data', (chunk: Buffer) => expect(chunk.toString()).toEqual('line 1'))
      .on('finish',() => done());

    setTimeout(() => {
      mockReadable.emit('data', 'line 0')
      mockReadable.emit('data', 'line 1')
      mockReadable.emit('end')
    }, 100);
  })
})
