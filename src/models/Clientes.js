import {Schema,model} from "mongoose";


const schema = new Schema({
    nombre: {
        type: String,
        required:true,
        trim:true
    },
    doc: {
        type: String,
        required:true,
        trim:true
    },
    tel: {
        type: String,
        required:false,
        trim:true
    },
    tipo: {
        type: Number,
        default: 1
    },
}, {
    versionKey:false,
    timestamps:true
})

export default model('clientes',schema)

