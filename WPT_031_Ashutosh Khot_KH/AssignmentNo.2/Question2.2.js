const url = "";
let datab = {
    port: 3306,
    host: "localhost",
    user: "ashutosh",
    password: "cdac123",
    database: "practice"
};

const mysql = require("mysql2");
const con = mysql.createConnection(datab);
let category = "Office";
let itemno = 10;
con.query("update item set category=? where itemno=?", [category, itemno], (err, res) => {
    if (err) {
        console.log("Update command failed");
    } else {
        if (res.affectedRows === 0) {
            console.log("Zero rows affected , update failed")
        } else {
            console.log("Update command succeed" + res.affectedRows);
        }
    }
});