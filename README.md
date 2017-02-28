[![npm](https://img.shields.io/npm/v/football-api.svg?style=flat-square)](https://www.npmjs.com/package/football-api)
[![Gemnasium](https://img.shields.io/gemnasium/beevelop/football-api.svg?style=flat-square)](https://gemnasium.com/beevelop/football-api)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![Beevelop](https://links.beevelop.com/honey-badge)](https://beevelop.com)

# Football-API.js

```js
const FootballAPI = require('football-api')
const fapi = new FootballAPI('*YOUR AUTHORIZATION KEY*')

// Get all matches
fapi.getMatches().then((data) => {
  console.log(data.body)
}).catch(err => console.log(err))

// Get a team
fapi.getTeam(9002).then((data) => console.log(data.body.statistics[0]))

// Get a commentary
fapi.getCommentary(1967661).then((data) => {
  console.log(util.inspect(data.body, false, null))
}).catch((err) => console.log(err))
```
