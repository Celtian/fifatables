import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';
import { cwd } from 'process';
import { Field, Fifa, FifaConfig, Table } from './interfaces';

const readConfig = (fifa: Fifa, table: Table): Field[] => {
  let json: Field[] = [];
  try {
    const yaml = readFileSync(join(cwd(), 'cfg', fifa, `${table}.yml`)).toString();
    json = load(yaml) as Field[];
  } catch (e) {
    throw new Error('Unexpected error');
  }
  return json;
};

export const fifaConfig = (fifa: Fifa): FifaConfig => {
  const config = new FifaConfig();
  config.competition = readConfig(fifa, Table.Competition);
  config.dcplayernames = readConfig(fifa, Table.DcPlayerNames);
  config.formations = readConfig(fifa, Table.Formations);
  config.leaguerefereelinks = readConfig(fifa, Table.LeagueRefereeLinks);
  config.leagues = readConfig(fifa, Table.Leagues);
  config.leagueteamlinks = readConfig(fifa, Table.LeagueTeamLinks);
  config.manager = readConfig(fifa, Table.Manager);
  config.nations = readConfig(fifa, Table.Nations);
  config.player_grudgelove = readConfig(fifa, Table.PlayerGrudgelove);
  config.playerboots = readConfig(fifa, Table.PlayerBoots);
  config.playerloans = readConfig(fifa, Table.PlayerLoans);
  config.playernames = readConfig(fifa, Table.PlayerNames);
  config.players = readConfig(fifa, Table.Players);
  config.previousteam = readConfig(fifa, Table.PreviousTeam);
  config.referee = readConfig(fifa, Table.Referee);
  config.rivals = readConfig(fifa, Table.Rivals);
  config.rowteamnationlinks = readConfig(fifa, Table.RowTeamNationLinks);
  config.shoecolors = readConfig(fifa, Table.ShoeColors);
  config.stadiums = readConfig(fifa, Table.Stadiums);
  config.teamballs = readConfig(fifa, Table.TeamBalls);
  config.teamkits = readConfig(fifa, Table.TeamKits);
  config.teamnationlinks = readConfig(fifa, Table.TeamNationLinks);
  config.teamplayerlinks = readConfig(fifa, Table.TeamPlayerLinks);
  config.teams = readConfig(fifa, Table.Teams);
  config.teamstadiumlinks = readConfig(fifa, Table.TeamStadiumLinks);
  return config;
};

export const sortByOrder = (a: Field, b: Field) => a.order - b.order;
