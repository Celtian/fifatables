import { PassThrough } from 'stream';
import { HeadTransform } from '../../lib/transforms/head';

describe('HeadTransform', () => {
  it('should return correct value', (done) => {
    const mockReadable = new PassThrough();

    mockReadable
      .pipe(new HeadTransform({ count: 1 }))
      .on('data', (chunk: Buffer) => expect(chunk.toString()).toEqual('line 0'))
      .on('finish',() => done());

    setTimeout(() => {
      mockReadable.emit('data', 'line 0')
      mockReadable.emit('data', 'line 1')
      mockReadable.emit('end')
    }, 100);
  })
})
