import { LineStream } from 'byline';
import { createReadStream, createWriteStream, mkdirSync, WriteStream } from 'fs';
import { decodeStream } from 'iconv-lite';
import { join } from 'path';
import { Csv2JsonTransform } from 'transforms/csv2json.transform';
import { Json2CsvTransform } from 'transforms/json2csv.transform';
import { NewLineTransform } from 'transforms/new-line.transform';
import { Field, Table } from '../shared';
import { SkipTransform } from '../transforms/skip.transforms';

export type StreamType = NodeJS.ReadWriteStream | WriteStream;

export const readCsvStream = (inputFolder: string, table: Table, fields: Field[]): StreamType => {
  const inputFile = join(inputFolder, `${table}.txt`);
  return createReadStream(inputFile)
    .pipe(decodeStream('utf16le'))
    .pipe(new LineStream({ keepEmptyLines: false }))
    .pipe(new SkipTransform({ skip: 1 }))
    .pipe(new Csv2JsonTransform({ fields }));
}

// tslint:disable-next-line: no-shadowed-variable
export const writeCsvStream = (readStream: StreamType, outputFolder: string, table: Table, fields: Field[]): StreamType => {
  mkdirSync(outputFolder, { recursive: true });
  const outputFile = join(outputFolder, `${table}.txt`);
  const ws = createWriteStream(outputFile, { encoding: 'utf16le' });
  return readStream
    .pipe(new Json2CsvTransform({ fields }))
    .pipe(new NewLineTransform())
    .pipe(ws);
}
