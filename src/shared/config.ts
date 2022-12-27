import { Field, Fifa, Table } from './interfaces';
import {
	fifa11_competition,
	fifa11_dcplayernames,
	fifa11_formations,
	fifa11_leaguerefereelinks,
	fifa11_leagues,
	fifa11_leagueteamlinks,
	fifa11_manager,
	fifa11_nations,
	fifa11_playerboots,
	fifa11_player_grudgelove,
	fifa11_playerloans,
	fifa11_playernames,
	fifa11_players,
	fifa11_previousteam,
	fifa11_referee,
	fifa11_rivals,
	fifa11_rowteamnationlinks,
	fifa11_shoecolors,
	fifa11_stadiums,
	fifa11_teamballs,
	fifa11_teamkits,
	fifa11_teamnationlinks,
	fifa11_teamplayerlinks,
	fifa11_teams,
	fifa11_teamstadiumlinks,
	fifa12_competition,
	fifa12_dcplayernames,
	fifa12_formations,
	fifa12_leaguerefereelinks,
	fifa12_leagues,
	fifa12_leagueteamlinks,
	fifa12_manager,
	fifa12_nations,
	fifa12_playerboots,
	fifa12_player_grudgelove,
	fifa12_playerloans,
	fifa12_playernames,
	fifa12_players,
	fifa12_previousteam,
	fifa12_referee,
	fifa12_rivals,
	fifa12_rowteamnationlinks,
	fifa12_shoecolors,
	fifa12_stadiums,
	fifa12_teamballs,
	fifa12_teamkits,
	fifa12_teamnationlinks,
	fifa12_teamplayerlinks,
	fifa12_teams,
	fifa12_teamstadiumlinks,
	fifa13_competition,
	fifa13_dcplayernames,
	fifa13_formations,
	fifa13_leaguerefereelinks,
	fifa13_leagues,
	fifa13_leagueteamlinks,
	fifa13_manager,
	fifa13_nations,
	fifa13_playerboots,
	fifa13_player_grudgelove,
	fifa13_playerloans,
	fifa13_playernames,
	fifa13_players,
	fifa13_previousteam,
	fifa13_referee,
	fifa13_rivals,
	fifa13_rowteamnationlinks,
	fifa13_shoecolors,
	fifa13_stadiums,
	fifa13_teamballs,
	fifa13_teamkits,
	fifa13_teamnationlinks,
	fifa13_teamplayerlinks,
	fifa13_teams,
	fifa13_teamstadiumlinks,
	fifa14_competition,
	fifa14_dcplayernames,
	fifa14_formations,
	fifa14_leaguerefereelinks,
	fifa14_leagues,
	fifa14_leagueteamlinks,
	fifa14_manager,
	fifa14_nations,
	fifa14_playerboots,
	fifa14_player_grudgelove,
	fifa14_playerloans,
	fifa14_playernames,
	fifa14_players,
	fifa14_previousteam,
	fifa14_referee,
	fifa14_rivals,
	fifa14_rowteamnationlinks,
	fifa14_shoecolors,
	fifa14_stadiums,
	fifa14_teamballs,
	fifa14_teamkits,
	fifa14_teamnationlinks,
	fifa14_teamplayerlinks,
	fifa14_teams,
	fifa14_teamstadiumlinks,
	fifa15_competition,
	fifa15_dcplayernames,
	fifa15_formations,
	fifa15_leaguerefereelinks,
	fifa15_leagues,
	fifa15_leagueteamlinks,
	fifa15_manager,
	fifa15_nations,
	fifa15_playerboots,
	fifa15_player_grudgelove,
	fifa15_playerloans,
	fifa15_playernames,
	fifa15_players,
	fifa15_previousteam,
	fifa15_referee,
	fifa15_rivals,
	fifa15_rowteamnationlinks,
	fifa15_shoecolors,
	fifa15_stadiums,
	fifa15_teamballs,
	fifa15_teamkits,
	fifa15_teamnationlinks,
	fifa15_teamplayerlinks,
	fifa15_teams,
	fifa15_teamstadiumlinks,
	fifa16_competition,
	fifa16_dcplayernames,
	fifa16_formations,
	fifa16_leaguerefereelinks,
	fifa16_leagues,
	fifa16_leagueteamlinks,
	fifa16_manager,
	fifa16_nations,
	fifa16_playerboots,
	fifa16_player_grudgelove,
	fifa16_playerloans,
	fifa16_playernames,
	fifa16_players,
	fifa16_previousteam,
	fifa16_referee,
	fifa16_rivals,
	fifa16_rowteamnationlinks,
	fifa16_shoecolors,
	fifa16_stadiums,
	fifa16_teamballs,
	fifa16_teamkits,
	fifa16_teamnationlinks,
	fifa16_teamplayerlinks,
	fifa16_teams,
	fifa16_teamstadiumlinks,
	fifa17_competition,
	fifa17_dcplayernames,
	fifa17_formations,
	fifa17_leaguerefereelinks,
	fifa17_leagues,
	fifa17_leagueteamlinks,
	fifa17_manager,
	fifa17_nations,
	fifa17_playerboots,
	fifa17_player_grudgelove,
	fifa17_playerloans,
	fifa17_playernames,
	fifa17_players,
	fifa17_previousteam,
	fifa17_referee,
	fifa17_rivals,
	fifa17_rowteamnationlinks,
	fifa17_shoecolors,
	fifa17_stadiums,
	fifa17_teamballs,
	fifa17_teamkits,
	fifa17_teamnationlinks,
	fifa17_teamplayerlinks,
	fifa17_teams,
	fifa17_teamstadiumlinks,
	fifa18_competition,
	fifa18_dcplayernames,
	fifa18_formations,
	fifa18_leaguerefereelinks,
	fifa18_leagues,
	fifa18_leagueteamlinks,
	fifa18_manager,
	fifa18_nations,
	fifa18_playerboots,
	fifa18_player_grudgelove,
	fifa18_playerloans,
	fifa18_playernames,
	fifa18_players,
	fifa18_previousteam,
	fifa18_referee,
	fifa18_rivals,
	fifa18_rowteamnationlinks,
	fifa18_shoecolors,
	fifa18_stadiums,
	fifa18_teamballs,
	fifa18_teamkits,
	fifa18_teamnationlinks,
	fifa18_teamplayerlinks,
	fifa18_teams,
	fifa18_teamstadiumlinks,
	fifa19_competition,
	fifa19_dcplayernames,
	fifa19_formations,
	fifa19_leaguerefereelinks,
	fifa19_leagues,
	fifa19_leagueteamlinks,
	fifa19_manager,
	fifa19_nations,
	fifa19_playerboots,
	fifa19_player_grudgelove,
	fifa19_playerloans,
	fifa19_playernames,
	fifa19_players,
	fifa19_previousteam,
	fifa19_referee,
	fifa19_rivals,
	fifa19_rowteamnationlinks,
	fifa19_shoecolors,
	fifa19_stadiums,
	fifa19_teamballs,
	fifa19_teamkits,
	fifa19_teamnationlinks,
	fifa19_teamplayerlinks,
	fifa19_teams,
	fifa19_teamstadiumlinks,
	fifa20_competition,
	fifa20_dcplayernames,
	fifa20_formations,
	fifa20_leaguerefereelinks,
	fifa20_leagues,
	fifa20_leagueteamlinks,
	fifa20_manager,
	fifa20_nations,
	fifa20_playerboots,
	fifa20_player_grudgelove,
	fifa20_playerloans,
	fifa20_playernames,
	fifa20_players,
	fifa20_previousteam,
	fifa20_referee,
	fifa20_rivals,
	fifa20_rowteamnationlinks,
	fifa20_shoecolors,
	fifa20_stadiums,
	fifa20_teamballs,
	fifa20_teamkits,
	fifa20_teamnationlinks,
	fifa20_teamplayerlinks,
	fifa20_teams,
	fifa20_teamstadiumlinks,
	fifa21_competition,
	fifa21_dcplayernames,
	fifa21_formations,
	fifa21_leaguerefereelinks,
	fifa21_leagues,
	fifa21_leagueteamlinks,
	fifa21_manager,
	fifa21_nations,
	fifa21_playerboots,
	fifa21_player_grudgelove,
	fifa21_playerloans,
	fifa21_playernames,
	fifa21_players,
	fifa21_previousteam,
	fifa21_referee,
	fifa21_rivals,
	fifa21_rowteamnationlinks,
	fifa21_shoecolors,
	fifa21_stadiums,
	fifa21_teamballs,
	fifa21_teamkits,
	fifa21_teamnationlinks,
	fifa21_teamplayerlinks,
	fifa21_teams,
	fifa21_teamstadiumlinks,
	fifa22_competition,
	fifa22_dcplayernames,
	fifa22_formations,
	fifa22_leaguerefereelinks,
	fifa22_leagues,
	fifa22_leagueteamlinks,
	fifa22_manager,
	fifa22_nations,
	fifa22_playerboots,
	fifa22_player_grudgelove,
	fifa22_playerloans,
	fifa22_playernames,
	fifa22_players,
	fifa22_previousteam,
	fifa22_referee,
	fifa22_rivals,
	fifa22_rowteamnationlinks,
	fifa22_shoecolors,
	fifa22_stadiums,
	fifa22_teamballs,
	fifa22_teamkits,
	fifa22_teamnationlinks,
	fifa22_teamplayerlinks,
	fifa22_teams,
	fifa22_teamstadiumlinks,
	fifa23_competition,
	fifa23_dcplayernames,
	fifa23_formations,
	fifa23_leaguerefereelinks,
	fifa23_leagues,
	fifa23_leagueteamlinks,
	fifa23_manager,
	fifa23_nations,
	fifa23_playerboots,
	fifa23_player_grudgelove,
	fifa23_playerloans,
	fifa23_playernames,
	fifa23_players,
	fifa23_previousteam,
	fifa23_referee,
	fifa23_rivals,
	fifa23_rowteamnationlinks,
	fifa23_shoecolors,
	fifa23_stadiums,
	fifa23_teamballs,
	fifa23_teamkits,
	fifa23_teamnationlinks,
	fifa23_teamplayerlinks,
	fifa23_teams,
	fifa23_teamstadiumlinks,
} from '../config';


const readFifa11Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa11_competition as Field[];
		case Table.DcPlayerNames:
			return fifa11_dcplayernames as Field[];
		case Table.Formations:
			return fifa11_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa11_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa11_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa11_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa11_manager as Field[];
		case Table.Nations:
			return fifa11_nations as Field[];
		case Table.PlayerBoots:
			return fifa11_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa11_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa11_playerloans as Field[];
		case Table.PlayerNames:
			return fifa11_playernames as Field[];
		case Table.Players:
			return fifa11_players as Field[];
		case Table.PreviousTeam:
			return fifa11_previousteam as Field[];
		case Table.Referee:
			return fifa11_referee as Field[];
		case Table.Rivals:
			return fifa11_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa11_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa11_shoecolors as Field[];
		case Table.Stadiums:
			return fifa11_stadiums as Field[];
		case Table.TeamBalls:
			return fifa11_teamballs as Field[];
		case Table.TeamKits:
			return fifa11_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa11_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa11_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa11_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa11_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa12Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa12_competition as Field[];
		case Table.DcPlayerNames:
			return fifa12_dcplayernames as Field[];
		case Table.Formations:
			return fifa12_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa12_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa12_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa12_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa12_manager as Field[];
		case Table.Nations:
			return fifa12_nations as Field[];
		case Table.PlayerBoots:
			return fifa12_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa12_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa12_playerloans as Field[];
		case Table.PlayerNames:
			return fifa12_playernames as Field[];
		case Table.Players:
			return fifa12_players as Field[];
		case Table.PreviousTeam:
			return fifa12_previousteam as Field[];
		case Table.Referee:
			return fifa12_referee as Field[];
		case Table.Rivals:
			return fifa12_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa12_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa12_shoecolors as Field[];
		case Table.Stadiums:
			return fifa12_stadiums as Field[];
		case Table.TeamBalls:
			return fifa12_teamballs as Field[];
		case Table.TeamKits:
			return fifa12_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa12_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa12_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa12_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa12_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa13Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa13_competition as Field[];
		case Table.DcPlayerNames:
			return fifa13_dcplayernames as Field[];
		case Table.Formations:
			return fifa13_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa13_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa13_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa13_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa13_manager as Field[];
		case Table.Nations:
			return fifa13_nations as Field[];
		case Table.PlayerBoots:
			return fifa13_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa13_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa13_playerloans as Field[];
		case Table.PlayerNames:
			return fifa13_playernames as Field[];
		case Table.Players:
			return fifa13_players as Field[];
		case Table.PreviousTeam:
			return fifa13_previousteam as Field[];
		case Table.Referee:
			return fifa13_referee as Field[];
		case Table.Rivals:
			return fifa13_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa13_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa13_shoecolors as Field[];
		case Table.Stadiums:
			return fifa13_stadiums as Field[];
		case Table.TeamBalls:
			return fifa13_teamballs as Field[];
		case Table.TeamKits:
			return fifa13_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa13_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa13_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa13_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa13_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa14Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa14_competition as Field[];
		case Table.DcPlayerNames:
			return fifa14_dcplayernames as Field[];
		case Table.Formations:
			return fifa14_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa14_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa14_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa14_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa14_manager as Field[];
		case Table.Nations:
			return fifa14_nations as Field[];
		case Table.PlayerBoots:
			return fifa14_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa14_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa14_playerloans as Field[];
		case Table.PlayerNames:
			return fifa14_playernames as Field[];
		case Table.Players:
			return fifa14_players as Field[];
		case Table.PreviousTeam:
			return fifa14_previousteam as Field[];
		case Table.Referee:
			return fifa14_referee as Field[];
		case Table.Rivals:
			return fifa14_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa14_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa14_shoecolors as Field[];
		case Table.Stadiums:
			return fifa14_stadiums as Field[];
		case Table.TeamBalls:
			return fifa14_teamballs as Field[];
		case Table.TeamKits:
			return fifa14_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa14_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa14_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa14_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa14_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa15Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa15_competition as Field[];
		case Table.DcPlayerNames:
			return fifa15_dcplayernames as Field[];
		case Table.Formations:
			return fifa15_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa15_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa15_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa15_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa15_manager as Field[];
		case Table.Nations:
			return fifa15_nations as Field[];
		case Table.PlayerBoots:
			return fifa15_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa15_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa15_playerloans as Field[];
		case Table.PlayerNames:
			return fifa15_playernames as Field[];
		case Table.Players:
			return fifa15_players as Field[];
		case Table.PreviousTeam:
			return fifa15_previousteam as Field[];
		case Table.Referee:
			return fifa15_referee as Field[];
		case Table.Rivals:
			return fifa15_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa15_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa15_shoecolors as Field[];
		case Table.Stadiums:
			return fifa15_stadiums as Field[];
		case Table.TeamBalls:
			return fifa15_teamballs as Field[];
		case Table.TeamKits:
			return fifa15_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa15_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa15_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa15_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa15_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa16Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa16_competition as Field[];
		case Table.DcPlayerNames:
			return fifa16_dcplayernames as Field[];
		case Table.Formations:
			return fifa16_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa16_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa16_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa16_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa16_manager as Field[];
		case Table.Nations:
			return fifa16_nations as Field[];
		case Table.PlayerBoots:
			return fifa16_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa16_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa16_playerloans as Field[];
		case Table.PlayerNames:
			return fifa16_playernames as Field[];
		case Table.Players:
			return fifa16_players as Field[];
		case Table.PreviousTeam:
			return fifa16_previousteam as Field[];
		case Table.Referee:
			return fifa16_referee as Field[];
		case Table.Rivals:
			return fifa16_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa16_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa16_shoecolors as Field[];
		case Table.Stadiums:
			return fifa16_stadiums as Field[];
		case Table.TeamBalls:
			return fifa16_teamballs as Field[];
		case Table.TeamKits:
			return fifa16_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa16_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa16_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa16_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa16_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa17Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa17_competition as Field[];
		case Table.DcPlayerNames:
			return fifa17_dcplayernames as Field[];
		case Table.Formations:
			return fifa17_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa17_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa17_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa17_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa17_manager as Field[];
		case Table.Nations:
			return fifa17_nations as Field[];
		case Table.PlayerBoots:
			return fifa17_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa17_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa17_playerloans as Field[];
		case Table.PlayerNames:
			return fifa17_playernames as Field[];
		case Table.Players:
			return fifa17_players as Field[];
		case Table.PreviousTeam:
			return fifa17_previousteam as Field[];
		case Table.Referee:
			return fifa17_referee as Field[];
		case Table.Rivals:
			return fifa17_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa17_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa17_shoecolors as Field[];
		case Table.Stadiums:
			return fifa17_stadiums as Field[];
		case Table.TeamBalls:
			return fifa17_teamballs as Field[];
		case Table.TeamKits:
			return fifa17_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa17_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa17_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa17_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa17_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa18Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa18_competition as Field[];
		case Table.DcPlayerNames:
			return fifa18_dcplayernames as Field[];
		case Table.Formations:
			return fifa18_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa18_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa18_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa18_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa18_manager as Field[];
		case Table.Nations:
			return fifa18_nations as Field[];
		case Table.PlayerBoots:
			return fifa18_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa18_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa18_playerloans as Field[];
		case Table.PlayerNames:
			return fifa18_playernames as Field[];
		case Table.Players:
			return fifa18_players as Field[];
		case Table.PreviousTeam:
			return fifa18_previousteam as Field[];
		case Table.Referee:
			return fifa18_referee as Field[];
		case Table.Rivals:
			return fifa18_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa18_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa18_shoecolors as Field[];
		case Table.Stadiums:
			return fifa18_stadiums as Field[];
		case Table.TeamBalls:
			return fifa18_teamballs as Field[];
		case Table.TeamKits:
			return fifa18_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa18_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa18_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa18_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa18_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa19Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa19_competition as Field[];
		case Table.DcPlayerNames:
			return fifa19_dcplayernames as Field[];
		case Table.Formations:
			return fifa19_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa19_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa19_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa19_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa19_manager as Field[];
		case Table.Nations:
			return fifa19_nations as Field[];
		case Table.PlayerBoots:
			return fifa19_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa19_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa19_playerloans as Field[];
		case Table.PlayerNames:
			return fifa19_playernames as Field[];
		case Table.Players:
			return fifa19_players as Field[];
		case Table.PreviousTeam:
			return fifa19_previousteam as Field[];
		case Table.Referee:
			return fifa19_referee as Field[];
		case Table.Rivals:
			return fifa19_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa19_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa19_shoecolors as Field[];
		case Table.Stadiums:
			return fifa19_stadiums as Field[];
		case Table.TeamBalls:
			return fifa19_teamballs as Field[];
		case Table.TeamKits:
			return fifa19_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa19_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa19_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa19_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa19_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa20Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa20_competition as Field[];
		case Table.DcPlayerNames:
			return fifa20_dcplayernames as Field[];
		case Table.Formations:
			return fifa20_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa20_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa20_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa20_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa20_manager as Field[];
		case Table.Nations:
			return fifa20_nations as Field[];
		case Table.PlayerBoots:
			return fifa20_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa20_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa20_playerloans as Field[];
		case Table.PlayerNames:
			return fifa20_playernames as Field[];
		case Table.Players:
			return fifa20_players as Field[];
		case Table.PreviousTeam:
			return fifa20_previousteam as Field[];
		case Table.Referee:
			return fifa20_referee as Field[];
		case Table.Rivals:
			return fifa20_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa20_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa20_shoecolors as Field[];
		case Table.Stadiums:
			return fifa20_stadiums as Field[];
		case Table.TeamBalls:
			return fifa20_teamballs as Field[];
		case Table.TeamKits:
			return fifa20_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa20_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa20_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa20_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa20_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa21Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa21_competition as Field[];
		case Table.DcPlayerNames:
			return fifa21_dcplayernames as Field[];
		case Table.Formations:
			return fifa21_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa21_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa21_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa21_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa21_manager as Field[];
		case Table.Nations:
			return fifa21_nations as Field[];
		case Table.PlayerBoots:
			return fifa21_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa21_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa21_playerloans as Field[];
		case Table.PlayerNames:
			return fifa21_playernames as Field[];
		case Table.Players:
			return fifa21_players as Field[];
		case Table.PreviousTeam:
			return fifa21_previousteam as Field[];
		case Table.Referee:
			return fifa21_referee as Field[];
		case Table.Rivals:
			return fifa21_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa21_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa21_shoecolors as Field[];
		case Table.Stadiums:
			return fifa21_stadiums as Field[];
		case Table.TeamBalls:
			return fifa21_teamballs as Field[];
		case Table.TeamKits:
			return fifa21_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa21_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa21_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa21_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa21_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa22Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa22_competition as Field[];
		case Table.DcPlayerNames:
			return fifa22_dcplayernames as Field[];
		case Table.Formations:
			return fifa22_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa22_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa22_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa22_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa22_manager as Field[];
		case Table.Nations:
			return fifa22_nations as Field[];
		case Table.PlayerBoots:
			return fifa22_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa22_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa22_playerloans as Field[];
		case Table.PlayerNames:
			return fifa22_playernames as Field[];
		case Table.Players:
			return fifa22_players as Field[];
		case Table.PreviousTeam:
			return fifa22_previousteam as Field[];
		case Table.Referee:
			return fifa22_referee as Field[];
		case Table.Rivals:
			return fifa22_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa22_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa22_shoecolors as Field[];
		case Table.Stadiums:
			return fifa22_stadiums as Field[];
		case Table.TeamBalls:
			return fifa22_teamballs as Field[];
		case Table.TeamKits:
			return fifa22_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa22_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa22_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa22_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa22_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


const readFifa23Table = (table: Table): Field[] => {
	switch (table) {
		case Table.Competition:
			return fifa23_competition as Field[];
		case Table.DcPlayerNames:
			return fifa23_dcplayernames as Field[];
		case Table.Formations:
			return fifa23_formations as Field[];
		case Table.LeagueRefereeLinks:
			return fifa23_leaguerefereelinks as Field[];
		case Table.Leagues:
			return fifa23_leagues as Field[];
		case Table.LeagueTeamLinks:
			return fifa23_leagueteamlinks as Field[];
		case Table.Manager:
			return fifa23_manager as Field[];
		case Table.Nations:
			return fifa23_nations as Field[];
		case Table.PlayerBoots:
			return fifa23_playerboots as Field[];
		case Table.PlayerGrudgelove:
			return fifa23_player_grudgelove as Field[];
		case Table.PlayerLoans:
			return fifa23_playerloans as Field[];
		case Table.PlayerNames:
			return fifa23_playernames as Field[];
		case Table.Players:
			return fifa23_players as Field[];
		case Table.PreviousTeam:
			return fifa23_previousteam as Field[];
		case Table.Referee:
			return fifa23_referee as Field[];
		case Table.Rivals:
			return fifa23_rivals as Field[];
		case Table.RowTeamNationLinks:
			return fifa23_rowteamnationlinks as Field[];
		case Table.ShoeColors:
			return fifa23_shoecolors as Field[];
		case Table.Stadiums:
			return fifa23_stadiums as Field[];
		case Table.TeamBalls:
			return fifa23_teamballs as Field[];
		case Table.TeamKits:
			return fifa23_teamkits as Field[];
		case Table.TeamNationLinks:
			return fifa23_teamnationlinks as Field[];
		case Table.TeamPlayerLinks:
			return fifa23_teamplayerlinks as Field[];
		case Table.Teams:
			return fifa23_teams as Field[];
		case Table.TeamStadiumLinks:
			return fifa23_teamstadiumlinks as Field[];
		default:
			return [];
	}
}


export const fifaTableConfig = (fifa: Fifa, table: Table): Field[] => {
	switch (fifa) {
		case Fifa.Fifa11:
			return readFifa11Table(table)
		case Fifa.Fifa12:
			return readFifa12Table(table)
		case Fifa.Fifa13:
			return readFifa13Table(table)
		case Fifa.Fifa14:
			return readFifa14Table(table)
		case Fifa.Fifa15:
			return readFifa15Table(table)
		case Fifa.Fifa16:
			return readFifa16Table(table)
		case Fifa.Fifa17:
			return readFifa17Table(table)
		case Fifa.Fifa18:
			return readFifa18Table(table)
		case Fifa.Fifa19:
			return readFifa19Table(table)
		case Fifa.Fifa20:
			return readFifa20Table(table)
		case Fifa.Fifa21:
			return readFifa21Table(table)
		case Fifa.Fifa22:
			return readFifa22Table(table)
		case Fifa.Fifa23:
			return readFifa23Table(table)
		default:
			return [];
	}
}