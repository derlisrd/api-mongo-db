import Clientes from "../models/Clientes"
import { getPagination } from "../libs/getPagination"

export const ClientesController = {

    where: async(req,res)=>{
        let where = req.body
        try {
            let resul = await Clientes.find(where)
            return  res.json({
                results: resul,
                response:true,
                error:false
            })
        } catch (error) {
            return  res.json({
                response:false,
                error:true,
                message:error
            })
        }
    },
    all: async(req,res)=>{
        try {
            const {page,size} = req.query

            const {limit,offset} =  getPagination(page,size)

            let resul = await Clientes.find().limit(limit).skip(offset)


         return  res.json({
                results: resul,
                response:true,
                error:false
            })
        } catch (error) {
            return  res.json({
                response:false,
                error:true,
                message:error.message
            })
        }
    },
    find: async(req,res)=>{

        let id = req.params.id
        let resul = await Clientes.findById(id)
        res.json({
            results: resul,
            response:true,
            error:false,
            first:resul
        })
    },
    insert: async(req,res)=>{
        try {
            let body = req.body
        const newcliente = new Clientes({
            nombre:body.nombre,
            tel:body.tel,
            doc:body.doc
        });
        let last = await newcliente.save();
        res.json({
            response:true,
            message:'Inserted',
            last: last
        })
        } catch (error) {
            res.json({
                response:false,
                message:error
            })
        }
    },
    delete: async(req,res)=>{
        try {
            let id = req.params.id
            await Clientes.findByIdAndDelete(id);
            res.json({
                response:true,
                message:'Deleted!'
            })
        } catch (error) {
            res.json({
                response:false,
                message:error
            })
        }
    },
    update: async(req,res)=>{
        try {
            let id = req.params.id
            let result = await Clientes.findByIdAndUpdate(id, req.body);
            res.json({
                response:true,
                results: result, 
                message:'Updated!'
            })
        } catch (error) {
            res.json({
                response:false,
                message:error
            })
        }
    }
}