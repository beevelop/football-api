'use strict'

const got = require('got');

/**
 * URL of football-api
 * @type {string}
 */
const FOOTBALL_API_URL = 'http://api.football-api.com/2.0/';
/**
 * URL of football-api competitions
 * @type {string}
 */
const COMPETITIONS_URL = `${FOOTBALL_API_URL}competitions`;
/**
 * URL of football-api standings
 * @type {string}
 */
const STANDINGS_URL = `${FOOTBALL_API_URL}standings`;
/**
 * URL of football-api matches
 * @type {string}
 */
const MATCHES_URL = `${FOOTBALL_API_URL}matches`;
/**
 * URL of football-api commentaries
 * @type {string}
 */
const COMMENTARIES_URL = `${FOOTBALL_API_URL}commentaries`;
/**
 * URL of football-api team
 * @type {string}
 */
const TEAM_URL = `${FOOTBALL_API_URL}team`;
/**
 * URL of football-api player
 * @type {string}
 */
const PLAYER_URL = `${FOOTBALL_API_URL}player`;
class FootballAPI {
  /**
   * @constructor
   * @this {Fapi}
   * @param {String} apikey - The api key which is provided by football-api.com
   */

  constructor (apikey) {
    this.apikey = apikey;
    /**
     * Authorization parameter
     * @type {string}
     */
    this.authorization = `Authorization=${this.apikey}`;
  }

  _get(url){
    return got(url, {json:true})
  }

  /**
   * Returns a list of the competitions
   * @returns {Promise}
   *
   * example of body: [{"id":"1005","name":"UEFA Champions League","region":"International"}]
   */
  getCompetitions () {
    return this._get(`${COMPETITIONS_URL}?Authorization=${this.apikey}`)
  }

  /**
   * Returns a single competition
   * @param id - ID of the competition
   * @returns {*}
   */
  getCompetition (id) {
    return this._get(`${COMPETITIONS_URL}/${id}?Authorization=${this.apikey}`)
  }

  /**
   * Returns the standing table for a given competition
   * @param comp_id - ID of the competition
   * @returns {*}
   */
  getStanding (comp_id) {
    return this._get(`${STANDINGS_URL}/${comp_id}?Authorization=${this.apikey}`)
  }

  /**
   * Returns a list of matches in a specified date or in a range of dates. 
   * When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).
   * @param match_id - ID of the match
   */
  getMatches(){
    return this._get(`${MATCHES_URL}?${this.authorization}`)
  }


  /**
   * Returns a list of matches between a time span
   * @param from_date - String date to filter the matches - Format: DD.MM.YYYY
   * @param to_date - String date to filter the matches - Format: DD.MM.YYYY
   */
  getMatchesFromTo (from_date, to_date) {
    let url = `${MATCHES_URL}?from_date=${from_date}&to_date=${to_date}&Authorization=${this.apikey}`;
    return this._get(url)
  }
  /*
  /**
   * @todo: Fix
   * Returns a list of matches by some parameters
   * @param comp_id - ID of the competition
   * @param team_id - ID of the team
   * @param match_id - ID of the match
   * @param from_date - String date to filter the matches - Format: DD.MM.YYYY
   * @param to_date - String date to filter the matches - Format: DD.MM.YYYY
   
   getMatches (comp_id, team_id, match_id, from_date, to_date) {
   let url = `${MATCHES_URL}?`;
   if (comp_id) {
   url += `&comp_id=${comp_id}`;
   }
   if (team_id) {
   url += `&team_id=${team_id}`;
   }
   if (match_id) {
   url += `&match_id=${match_id}`;
   }
   if (from_date) {
   url += `&from_date=${from_date}`;
   }
   if (to_date) {
   url += `&to_date=${to_date}`;
   }
   return this._get(`${url}?Authorization=${this.apikey}`)
   }
   */

  /**
   * Returns a match by ID
   * @param match_id - ID of the match
   */
  getMatch(match_id){
    return this._get(`${MATCHES_URL}/${match_id}?${this.authorization}`)
  }

  /**
   * Returns a commentary of a match by its id.
   * @param match_id - ID of the match
   */
  getCommentary(match_id){
    return this._get(`${COMMENTARIES_URL}/${match_id}?${this.authorization}`)
  }

  /**
   * Returns general information about the team as well as squads and statistics.
   * @param team_id - ID of team
   */
  getTeam(team_id){
    return this._get(`${TEAM_URL}/${team_id}?${this.authorization}`)
  }

  /**
   * Returns general information about a player as well as statistics with different teams.
   * @param player_id - ID of player
   */

  getPlayer(player_id){
    return this._get(`${PLAYER_URL}/${player_id}?${this.authorization}`)
  }
}

module.exports = FootballAPI