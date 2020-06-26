var Todos = require('../models/todoModels');

module.exports = function(app){
    app.get('/api/setUpTodos', function(req, res){
        //seed database
        var starterTodos = [
            {
                username : 'test',
                todo : 'Buy Milk',
                isDone : false,
                hasAttachment : false
            },
            {
                username : 'test',
                todo : 'Feed Dogs',
                isDone : false,
                hasAttachment : false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        })
    });
}