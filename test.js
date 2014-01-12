var ChildModel = Backbone.RelationalModel.extend({
});

var Mdl = Backbone.RelationalModel.extend({
    relations: [{
        type: Backbone.HasMany,
        key: 'children',
        relatedModel: ChildModel
    }]
});

var feck = new Mdl({
    children: [
        {id: 1, text: 'hello'},
        {id: 2, text: 'internet'}
    ]
});

console.log('event types after model creation', Backbone.Relational.store._collections[1]._events);

feck.trigger('relational:unregister', feck);

console.log('events types after model unregister', Backbone.Relational.store._collections[1]._events);
