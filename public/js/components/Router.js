var Router = require('react-router');

// we can create a router instance before "running" it
var router = Router.create({
  location: Router.HistoryLocation.push
});

module.exports = router;