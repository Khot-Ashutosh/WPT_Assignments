let datab = {
    port: 3306,
    host: "localhost",
    user: "ashutosh",
    password: "cdac123",
    database: "practice"
};
const mysql = require("mysql2");
const con = mysql.createConnection(datab);
let status = false;
let resourcename = "Notebook";
con.query("update resource set status=? where resourcename=?", [status, resourcename], (err, res) => {
    if (err) {
        console.log("Erroe while updating");
    } else {
        if (res.affectedRows === 0) {
            console.log("Zero rows affeted update failed");
        } else {
            console.log("Update successfull");
        }
    }
});