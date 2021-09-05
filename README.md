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

> Library for scraping soccer data from the internet

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
import { soccerway, transfermarkt, fotbalunas, eurofotbal } from 'fifatables';

console.log(soccerway.teamUrl('533')); // show url

soccerway.team('533')
  .then(res => console.log(res));

console.log(transfermarkt.teamUrl('62')); // show url

transfermarkt.team('62')
  .then(res => console.log(res));

console.log(fotbalunas.teamUrl('62')); // show url

fotbalunas.team('62')
  .then(res => console.log(res));

console.log(eurofotbal.teamUrl('cesko/sparta-praha')); // show url

eurofotbal.team('cesko/sparta-praha')
  .then(res => console.log(res));
```

## Sources

| Source            | Speed  | Stability | Coverage       |
| ----------------- | ------ | --------- | -------------- |
| **transfermarkt** | ⚽⚽⚽ | ⚽⚽⚽    | World          |
| **soccerway**     | ⚽     | ⚽        | World          |
| **fotbalunas**    | ⚽     | ⚽⚽⚽    | Czech Republic |
| **eurofotbal**    | ⚽⚽   | ⚽⚽      | Europe         |

_Note: Soccerway is taking data from multiple pages, so it takes longer period of time. The reason is to prevent rare limit (30 sec on average). Fotbalunas uses redirect. It means that data are downloded from 2 pages and there is also a little delay._

## License

Copyright &copy; 2021 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
