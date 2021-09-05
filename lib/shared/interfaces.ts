export enum Fifa {
  Fifa11 = 'fifa11',
  Fifa12 = 'fifa12',
  Fifa13 = 'fifa13',
  Fifa14 = 'fifa14',
  Fifa15 = 'fifa15',
  Fifa16 = 'fifa16',
  Fifa17 = 'fifa17',
  Fifa18 = 'fifa18',
  Fifa19 = 'fifa19',
  Fifa20 = 'fifa20',
  Fifa21 = 'fifa21'
}

export enum Table {
  Competition = 'competition',
  DcPlayerNames = 'dcplayernames',
  Formations = 'formations',
  LeagueRefereeLinks = 'leaguerefereelinks',
  Leagues = 'leagues',
  LeagueTeamLinks = 'leagueteamlinks',
  Manager = 'manager',
  Nations = 'nations',
  PlayerBoots = 'playerboots',
  PlayerGrudgelove = 'player_grudgelove',
  PlayerLoans = 'playerloans',
  PlayerNames = 'playernames',
  Players = 'players',
  PreviousTeam = 'previousteam',
  Referee = 'referee',
  Rivals = 'rivals',
  RowTeamNationLinks = 'rowteamnationlinks',
  ShoeColors = 'shoecolors',
  Stadiums = 'stadiums',
  TeamBalls = 'teamballs',
  TeamKits = 'teamkits',
  TeamNationLinks = 'teamnationlinks',
  TeamPlayerLinks = 'teamplayerlinks',
  Teams = 'teams',
  TeamStadiumLinks = 'teamstadiumlinks'
}

export enum Datatype {
  Int = 'int',
  String = 'string',
  Float = 'float'
}

export interface Range {
  min: number;
  max: number;
}

export interface Field {
  name: string;
  order: number;
  type: Datatype;
  default: any;
  range?: Range;
  unique?: boolean;
}

export type KeyValueFrequency = { [key: string]: string };

export type RawData = { [key: string]: string | number };

export class FifaConfig {
  public competition: Field[] = [];
  public dcplayernames: Field[] = [];
  public formations: Field[] = [];
  public leaguerefereelinks: Field[] = [];
  public leagues: Field[] = [];
  public leagueteamlinks: Field[] = [];
  public manager: Field[] = [];
  public nations: Field[] = [];
  // tslint:disable-next-line: variable-name
  public player_grudgelove: Field[] = [];
  public playerboots: Field[] = [];
  public playerloans: Field[] = [];
  public playernames: Field[] = [];
  public players: Field[] = [];
  public previousteam: Field[] = [];
  public referee: Field[] = [];
  public rivals: Field[] = [];
  public rowteamnationlinks: Field[] = [];
  public shoecolors: Field[] = [];
  public stadiums: Field[] = [];
  public teamballs: Field[] = [];
  public teamkits: Field[] = [];
  public teamnationlinks: Field[] = [];
  public teamplayerlinks: Field[] = [];
  public teams: Field[] = [];
  public teamstadiumlinks: Field[] = [];
}
