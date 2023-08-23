const express = require("express");
const router = express.Router();

const db = require("../database/connection");
const response = require("../response");
const dayjs = require("dayjs");
const format = "YYYY-MM-DD HH:mm:ss";


router.get("/getdata", (req, res) => {
  const sql = "SELECT target_ppm,target_pH,DATE_FORMAT(waktu_siramPagi, '%H:%i') AS waktu_siramPagi,DATE_FORMAT(waktu_siramSore, '%H:%i') AS waktu_siramSore, DATE_FORMAT(waktu_pH, '%H:%i') AS waktu_pH, DATE_FORMAT(waktu_ppm, '%H:%i') AS waktu_ppm FROM parameter_val";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/gettarget", (req, res) => {
  const sql =
  "SELECT target_ppm,target_pH FROM parameter_val";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/getwaktupompa", (req, res) => {
  const sql = "SELECT waktu_siramPagi,waktu_siramSore, waktu_pH, waktu_ppm FROM parameter_val ";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.post("/updatetarget", (req, res) => {
  let formData = {
    target_ppm: req.query.target_ppm,
    target_pH: req.query.target_pH,
  };
  const sql2 = `UPDATE parameter_val SET ? WHERE id = 1 `;
  db.query(sql2, formData, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.message,
      };
      response(200, data, "Post Data Success", res);
    }
  });
});

router.post("/updatewaktu", (req, res) => {
  let formData = {
    waktu_siramPagi: req.query.waktu_siramPagi,
    waktu_siramSore: req.query.waktu_siramSore,
    waktu_ppm: req.query.waktu_ppm,
    waktu_pH: req.query.waktu_pH,
  };
  const sql2 = `UPDATE parameter_val SET ? WHERE id = 1 `;
  db.query(sql2, formData, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.message,
      };
      response(200, data, "Post Data Success", res);
    }
  });
});
module.exports = router;
