const {db} = require('../utils/db');
const path = require('path');





exports.createCompany =(req,res, next)=>{
    const image = req.files[0].filename;
    const {name, rank} = req.body;
    let sql = `INSERT INTO ourCompany SET ?`
    let data={name: name, rank: rank, image:image}
        db.query(sql,data, (error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Company created",
            })
        })

}
exports.updateCompany =(req,res, next)=>{
    let image;
    if(req.files[0]){
        image = req.files[0].filename
    }
    else{
        image = req.body.filename
    }
        const {name, id, rank} = req.body;
    const sql = `UPDATE ourCompany SET name = ?, rank = ?, image = ? WHERE id = ?`;

        db.query(sql,[name,rank,image,id],(error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Company updated",
            })
        })
}
exports.deleteCompany =(req,res, next)=>{
    const {id} = req.body;
    const sql = `DELETE FROM ourCompany WHERE id = '${id}'`;

        db.query(sql,(error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Company deleted",
            })
        })
    
}
exports.getCompanies =(req,res, next)=>{
    console.log("hello")
    let sql = `SELECT * FROM ourCompany`;
    db.query(sql, (error,result)=>{
        if(error){
            console.log(error)
            return res.status(401).json({
                message:"Database operation failed",
            })
        }
        return res.status(200).json({
            message:"Companies fetched",
            data:result
            // data: result[0]
        })
    })
}