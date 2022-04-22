const {db} = require('../utils/db');
const path = require('path');





exports.createContactUs =(req,res, next)=>{
    const {name, email, phone, message} = req.body;
    let sql = `INSERT INTO contactUs SET ?`
    let data={name: name, email: email, phone:phone, message: message}
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
exports.deleteContactUs =(req,res, next)=>{
    const {id} = req.body;
    const sql = `DELETE FROM contactUs WHERE id = '${id}'`;

        db.query(sql,(error, result)=>{
            if(error){
                console.log(error)
                return res.status(401).json({
                    message:"Database operation failed",
                })
            }
            return res.status(200).json({
                message:"Contact request deleted",
            })
        })
    
}
exports.getContactUs =(req,res, next)=>{
    let sql = `SELECT * FROM contactUs`;
    db.query(sql, (error,result)=>{
        if(error){
            console.log(error)
            return res.status(401).json({
                message:"Database operation failed",
            })
        }
        return res.status(200).json({
            message:"Contact request fetched",
            data:result
            // data: result[0]
        })
    })
}