const { Item } = require('./database');

const createItem = data => new Item(data).save().catch(() => Promise.reject('Something went wrong when creating a new item.'));

exports.createItem = createItem;