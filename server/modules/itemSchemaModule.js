const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListItemSchema = new Schema({
    instruction: { type: String },
    complete: { type: Boolean, default: false },
    confirm: {type: Boolean, default: true},
    priority: {type: Object}
});  

module.exports = mongoose.model('ListOfItems', ListItemSchema);