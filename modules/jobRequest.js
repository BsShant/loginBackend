const {db} = require('../utils/db');
const path = require('path');





exports.createJobRequest =(req,res, next)=>{
    const {name, email, phone, message} = req.body;
    let sql = `INSERT INTO jobRequest SET ?`
    let data={name: name, email: email, placement:placement, message: message}
        db.query(sql,data, (error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Request send",
            })
        })

}
// exports.updateContactUs =(req,res, next)=>{
//     let image;
//     if(req.files[0]){
//         image = req.files[0].filename
//     }
//     else{
//         image = req.body.filename
//     }
//         const {job, id, cat1, cat2} = req.body;
//     const sql = `UPDATE contactUs SET job = ?, cat1 = ?, cat2= ?, image = ? WHERE id = ?`;

//         db.query(sql,[job,cat1, cat2,image,id],(error, result)=>{
//             if(error){
//                 console.log(error)
//                 return res.status(401).json({
//                     message:"Database operation failed",
//                 })
//             }
//             return res.status(200).json({
//                 message:"Career updated",
//             })
//         })
// }
exports.deleteJobRequest =(req,res, next)=>{
    const {id} = req.body;
    const sql = `DELETE FROM jobRequest WHERE id = '${id}'`;

        db.query(sql,(error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Job request deleted",
            })
        })
    
}
exports.getJobRequests =(req,res, next)=>{
    let sql = `SELECT * FROM jobRequest`;
    db.query(sql, (error,result)=>{
        if(error){
            console.log(error)
            return res.status(401).json({
                message:"Database operation failed",
            })
        }
        return res.status(200).json({
            message:"Job request fetched",
            data:result
            // data: result[0]
        })
    })
}