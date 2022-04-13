const {db} = require('../utils/db');
const path = require('path');





exports.createTeamMember =(req,res, next)=>{
    const image = req.files[0].filename;
    const {name, role, rank, type} = req.body;
    let sql = `INSERT INTO ourTeam SET ?`
    let data={name: name,role:role, rank: rank ,type: type,image:image}
        db.query(sql,data, (error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Team member created",
            })
        })

}
exports.updateTeamMember =(req,res, next)=>{
    let image;
    if(req.files[0]){
        image = req.files[0].filename
    }
    else{
        image = req.body.filename
    }
        const {name,role, rank, type,id} = req.body;
    const sql = `UPDATE ourTeam SET name = ?,role = ?,rank = ?, image = ?, type = ? WHERE id = ?`;

        db.query(sql,[name, role, rank, image, type, id],(error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Team member updated",
            })
        })
}
exports.deleteTeamMember =(req,res, next)=>{
    const {id} = req.body;
    const sql = `DELETE FROM ourTeam WHERE id = '${id}'`;

        db.query(sql,(error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Team member deleted",
            })
        })
    
}
exports.getTeamMembers =(req,res, next)=>{
    let sql = `SELECT * FROM ourTeam`;
    db.query(sql, (error,result)=>{
        if(error){
            console.log(error)
            return res.status(401).json({
                message:"Database operation failed",
            })
        }
        return res.status(200).json({
            message:"Team members fetched",
            data:result
            // data: result[0]
        })
    })
}