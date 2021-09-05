<p align="center">
  <a href="https://github.com/Celtian/fifatables" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">FifaTables</h1>
</p>

[![npm version](https://badge.fury.io/js/fifatables.svg)](https://badge.fury.io/js/fifatables)
[![Package License](https://img.shields.io/npm/l/fifatables.svg)](https://www.npmjs.com/fifatables)
[![NPM Downloads](https://img.shields.io/npm/dm/fifatables.svg)](https://www.npmjs.com/fifatables)
[![Build & Publish](https://github.com/celtian/fifatables/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/fifatables/actions)
[![codecov](https://codecov.io/gh/Celtian/fifatables/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/fifatables/)
[![stars](https://badgen.net/github/stars/celtian/fifatables)](https://github.com/celtian/fifatables/)
[![forks](https://badgen.net/github/forks/celtian/fifatables)](https://github.com/celtian/fifatables/)
[![HitCount](http://hits.dwyl.com/celtian/fifatables.svg)](http://hits.dwyl.com/celtian/fifatables)

> Library for managing Fifa Soccer tables

## Install

_Nodejs 12 or higher need to be installed first_

```terminal
npm install fifatables
```

or

```terminal
yarn add fifatables
```

## Quick start

_Type this into your ts file._

```terminal
  import { join } from 'path';
  import { cwd } from 'process';
  import { Fifa, fifaConfig, readCsvStream, Table, writeCsvStream } from 'fifatables';

  // config class with table definitions for fifa 11
  console.log(fifaConfig(Fifa.Fifa11));

  // read league.txt from Fifa 11
  readCsvStream(join(cwd(), 'examples', Fifa.Fifa11), Table.Leagues, fifaConfig(Fifa.Fifa11).leagues)
    .on('data', (buffer: Buffer) => console.log(JSON.parse(buffer.toString())))
    .on('finish', () => console.log('Reading finished.'));

  // read league.txt from Fifa 11 and write it in Fifa 21 format
  const table = Table.Leagues;
  const readStream = readCsvStream(join(cwd(), 'examples', Fifa.Fifa11), table, fifaConfig(Fifa.Fifa11).leagues);
  writeCsvStream(readStream, join(cwd(), 'output', Fifa.Fifa21), table, fifaConfig(Fifa.Fifa21).leagues)
    .on('data', (buffer: Buffer) => console.log(JSON.parse(buffer.toString())))
    .on('finish', () => console.log('Writing finished.'));
```

## Supported versions of Fifa Soccer

| Fifa        | Supported |
| ----------- | --------- |
| **Fifa 11** | ✓         |
| **Fifa 12** | ✓         |
| **Fifa 13** | ✓         |
| **Fifa 14** | ✓         |
| **Fifa 15** | ✓         |
| **Fifa 16** | ✓         |
| **Fifa 17** | ✓         |
| **Fifa 18** | ✓         |
| **Fifa 19** | ✓         |
| **Fifa 20** | ✓         |
| **Fifa 21** | ✓         |

## Supported tables

| Table                  | Supported |
| ---------------------- | --------- |
| **competition**        | ✓         |
| **dcplayernames**      | ✓         |
| **formations**         | ✓         |
| **leaguerefereelinks** | ✓         |
| **leagues**            | ✓         |
| **leagueteamlinks**    | ✓         |
| **manager**            | ✓         |
| **nations**            | ✓         |
| **playerboots**        | ✓         |
| **player_grudgelove**  | ✓         |
| **playerloans**        | ✓         |
| **playernames**        | ✓         |
| **players**            | ✓         |
| **previousteam**       | ✓         |
| **referee**            | ✓         |
| **rivals**             | ✓         |
| **rowteamnationlinks** | ✓         |
| **shoecolors**         | ✓         |
| **stadiums**           | ✓         |
| **teamballs**          | ✓         |
| **teamkits**           | ✓         |
| **teamnationlinks**    | ✓         |
| **teamplayerlinks**    | ✓         |
| **teams**              | ✓         |
| **teamstadiumlinks**   | ✓         |

## License

Copyright &copy; 2021 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
