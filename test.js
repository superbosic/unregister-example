var ChildModel = Backbone.RelationalModel.extend({
});

var Mdl = Backbone.RelationalModel.extend({
    relations: [{
        type: Backbone.HasMany,
        key: 'children',
        relatedModel: ChildModel
    }]
});

var children = [
    {id: 1, text: 'hello'},
    {id: 2, text: 'internet'}
];
children.forEach(function(child){
    ChildModel.findOrCreate(child);
});

// Should be no events on this ChildModel store before this model is created
console.log('events types before model', Backbone.Relational.store._collections[0]._events);

var feck = new Mdl({
    children: children
});

// ChildModel store should now have various events which point to the model feck
console.log('event types after model creation', Backbone.Relational.store._collections[0]._events);

feck.trigger('relational:unregister', feck);

// ChildModel store should now have no event listeners
console.log('events types after model unregister', Backbone.Relational.store._collections[0]._events);
