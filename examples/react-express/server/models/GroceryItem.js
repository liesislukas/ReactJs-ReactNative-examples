var mongoose = require('mongoose');

var GroceryItemSchema = {
    id: String,
    name: String,
    purchased: Boolean
};

var GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema, 'groceryItems');

module.exports = GroceryItem;