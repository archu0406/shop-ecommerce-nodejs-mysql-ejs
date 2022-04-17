const db = require('../_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete_item
};

async function getAll() {
    return await db.Item.findAll();
}

async function getById(id) {
    return await getItem(id);
}

async function create(params) {
    // validate
    if (await db.Item.findOne({ where: { name: params.name } })) {
        throw 'The Product Item Name "' + params.name + '" is already taken for another Product Item.';
    }

    const item = new db.Item(params);
    // Persisting item here
    await item.save();
}

async function update(id, params) {
    const item = await getItem(id);

    // validate
    const nameChanged = params.name && item.name !== params.name;
    if (nameChanged && await db.User.findOne({ where: { name: params.name } })) {
        throw 'The Product Item Name "' + params.name + '" is already taken for another Product Item.';
    }

    // copy params to user and save
    Object.assign(item, params);
    await item.save();
}

async function delete_item(id) {
    const item = await getItem(id);
    await item.destroy();
}

async function getItem(id) {
    const item = await db.Item.findByPk(id);
    if (!item) throw 'Item not found';
    return item;
}
