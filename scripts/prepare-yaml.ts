import { LineStream } from 'byline';
import { createReadStream, existsSync, mkdirSync, writeFileSync } from 'fs';
import { decodeStream } from 'iconv-lite';
import * as yaml from 'js-yaml';
import { dirname, join } from 'path';
import { cwd } from 'process';
import { Datatype, Field, Table } from '../lib/shared';
import { HeadTransform } from './head-transform';

const fifa = process.argv[2];

if (!fifa) {
  console.log('Missing argument. Use it like: "yarn prepare-yaml fifa22"');
  process.exit(1);
}

const inputFolder = join(cwd(), 'examples', fifa);
const outputFolder = join(cwd(), 'config', fifa);

const read = (table: Table): Promise<Partial<Field>[]> => {
  const inputFile = join(inputFolder, `${table}.txt`);
  let line = 0;
  let columnNames: string[] = [];
  let columnTypes: Datatype[] = [];
  return new Promise((resolve, reject) => {
    if (!existsSync(inputFile)) {
      resolve([]);
    } else {
      createReadStream(inputFile)
        .pipe(decodeStream('utf16le'))
        .pipe(new LineStream({ keepEmptyLines: false }))
        .pipe(new HeadTransform({ count: 2 }))
        .on('data', (buffer: Buffer) => {
          const columns = buffer.toString().split(/\t/);
          if (line === 0) {
            columnNames = columns;
          } else {
            columnTypes = columns.map((col) => {
              if (col.match(/^\d+$/)) {
                return Datatype.Int;
              } else if (col.match(/^\d+[\.,]{1}\d+$/)) {
                return Datatype.Float;
              } else {
                return Datatype.String;
              }
            });
          }
          line++;
        })
        .on('finish', () => {
          const result: Partial<Field>[] = [];
          if (columnNames.length === columnTypes.length) {
            for (let index = 0; index < columnNames.length; index++) {
              const name = columnNames[index];
              const type = columnTypes[index];
              result.push({
                name,
                order: index,
                type,
                range: type === Datatype.Int ? { min: null, max: null } : undefined,
                default: type === Datatype.String ? '' : null
              })
            }
          }
          resolve(result);
        })
    }
  })
}

const write = (table: Table, fields: Partial<Field>[]): void => {
  const outputFile = join(outputFolder, `${table}.yml`);
  mkdirSync(dirname(outputFile), { recursive: true });
  if (fields.length) {
    const data = yaml.dump(fields as any);
    writeFileSync(outputFile, data);
  } else {
    writeFileSync(outputFile, '');
  }
}

const readAndWrite = async (table: Table): Promise<void> => {
  console.log(`⚽ ${table}`);
  const fields = await read(table);
  write(table, fields);
}

const main = async (): Promise<void> => {
  await readAndWrite(Table.Competition);
  await readAndWrite(Table.DcPlayerNames);
  await readAndWrite(Table.Formations);
  await readAndWrite(Table.LeagueRefereeLinks);
  await readAndWrite(Table.Leagues);
  await readAndWrite(Table.LeagueTeamLinks);
  await readAndWrite(Table.Manager);
  await readAndWrite(Table.Nations);
  await readAndWrite(Table.PlayerGrudgelove);
  await readAndWrite(Table.PlayerBoots);
  await readAndWrite(Table.PlayerLoans);
  await readAndWrite(Table.PlayerNames);
  await readAndWrite(Table.Players);
  await readAndWrite(Table.PreviousTeam);
  await readAndWrite(Table.Referee);
  await readAndWrite(Table.Rivals);
  await readAndWrite(Table.RowTeamNationLinks);
  await readAndWrite(Table.ShoeColors);
  await readAndWrite(Table.Stadiums);
  await readAndWrite(Table.TeamBalls);
  await readAndWrite(Table.TeamKits);
  await readAndWrite(Table.TeamNationLinks);
  await readAndWrite(Table.TeamPlayerLinks);
  await readAndWrite(Table.Teams);
  await readAndWrite(Table.TeamStadiumLinks);
};

// tslint:disable-next-line: no-floating-promises
main();
