const express = require("express");
const router = express.Router();

const db = require("../database/connection");
const response = require("../response");
const dayjs = require("dayjs");
const format = "YYYY-MM-DD HH:mm:ss";


router.get("/getdata", (req, res) => {
  const sql = "SELECT target_ppm,target_pH,DATE_FORMAT(waktu_siram, '%H:%i') AS waktu_siram, DATE_FORMAT(waktu_pH, '%H:%i') AS waktu_pH, DATE_FORMAT(waktu_ppm, '%H:%i') AS waktu_ppm FROM parameter_val";
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
  const sql = "SELECT waktu_siram, waktu_pH, waktu_ppm FROM parameter_val ";
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
    waktu_siram: req.query.waktu_siram,
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

router.get("/putdata", (req, res) => {
  let formData = {
    suhu: req.query.suhu,
    suhuAir: req.query.suhuDS,
    kelembaban : req.query.kelembaban,
    ppm : req.query.ppm
  };
  const sql1 = `INSERT INTO data_sensors SET ?`;
  db.query(sql1, formData, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    console.log(err)
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.insertId,
      };
    }
  });
  const sql2 = `UPDATE logs_sensors SET ? WHERE id = 1`;
  db.query(sql2, formData, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.message,
      };
    }
  });
  const sql4 = "SELECT * FROM response_toarduino";
  db.query(sql4, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    return response(200, fields, "Arduino Data Sucess", res);
  });
});

router.get("/insertdt", (req, res) => {
  let formData = {
    suhu: req.query.suhu,
    suhuAir: req.query.suhuDS,
    kelembaban : req.query.kelembaban,
    // kelembaban_med : '0',
    ppm : req.query.ppm
  };
  const sql2 = `INSERT INTO data_sensors SET ?`;
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
