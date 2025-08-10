const { model, Schema } = require('mongoose');
const productSchema = new Schema({
    title: {
        type: String, required: true
    }
    ,price:{
        type: Number, required: true
    },
     description: {
        type: String, required: true
    },
    color:{
     type: String, required: true   
    },
    sizes:{
        type: [String], required: true
    },
    category:{
        type: String, required: true
    }

})
module.exports = model('Product', productSchema);