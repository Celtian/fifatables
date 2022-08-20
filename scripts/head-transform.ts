import { Transform, TransformCallback, TransformOptions } from 'stream';

export interface HeadTransformOptions extends TransformOptions {
  count: number;
}

export class HeadTransform extends Transform {
  private line = 0;
  private opts: HeadTransformOptions;

  constructor(opts?: HeadTransformOptions) {
    super(opts);
    this.opts = opts;
  }

  public _transform(chunk: Buffer, encoding: string, callback: TransformCallback): void {
    if (this.opts.count && this.line >= this.opts.count) {
      this.line++;
      callback();
      return;
    }
    this.push(chunk);
    this.line++;
    callback();
  }

  public _flush(callback: TransformCallback): void {
    this.line = 0;
    callback();
  }
}
