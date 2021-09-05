import { PassThrough } from 'stream';
import { NewLineTransform } from '../../lib/transforms/new-line';

describe('NewLineTransform', () => {
  it('should return correct value', (done) => {
    const mockReadable = new PassThrough();

    mockReadable.pipe(new NewLineTransform())
      .on('data', (chunk: Buffer) => expect(chunk.toString()).toEqual('line 0\r\n'))
      .on('finish',() => done());

    setTimeout(() => {
      mockReadable.emit('data', 'line 0')
      mockReadable.emit('end')
    }, 100);
  })
})
