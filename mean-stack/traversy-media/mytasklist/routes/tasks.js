var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://david:david@ds151941.mlab.com:51941/mytasklist',
  ['tasks']);

// Get All Tasks
router.get('/tasks', function(req, res, next) {
  db.tasks.find(function(err, tasks) {
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  });
});

// Get Single Task
router.get('/task/:id', function(req, res, next) {
  db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},
    function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
});


module.exports = router;
