const {db} = require('../utils/db');
const path = require('path');





exports.createCareer =(req,res, next)=>{
    const image = req.files[0].filename;
    const {job, cat1, cat2} = req.body;
    let sql = `INSERT INTO careers SET ?`
    let data={job: job, cat1: cat1, cat2:cat2, image: image}
        db.query(sql,data, (error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Career created",
            })
        })

}
exports.updateCareer =(req,res, next)=>{
    let image;
    if(req.files[0]){
        image = req.files[0].filename
    }
    else{
        image = req.body.filename
    }
        const {job, id, cat1, cat2} = req.body;
    const sql = `UPDATE careers SET job = ?, cat1 = ?, cat2= ?, image = ? WHERE id = ?`;

        db.query(sql,[job,cat1, cat2,image,id],(error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Career updated",
            })
        })
}
exports.deleteCareer =(req,res, next)=>{
    const {id} = req.body;
    const sql = `DELETE FROM careers WHERE id = '${id}'`;

        db.query(sql,(error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Career deleted",
            })
        })
    
}
exports.getCareers =(req,res, next)=>{
    let sql = `SELECT * FROM careers`;
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