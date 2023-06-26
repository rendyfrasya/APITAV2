const express = require("express");
const router = express.Router();
const db = require("../database/connection");
const response = require("../response");
const dayjs = require("dayjs");
const format = "YYYY-MM-DD HH:mm:ss";

router.get("/getdata", (req, res) => {
  const sql = "SELECT suhu, kelembaban, kelembaban_med,ppm,waktu FROM data_sensors";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/getsingledata", (req, res) => {
  const sql =
    "SELECT suhu,suhuAir, kelembaban, kelembaban_med,ppm,waktu FROM logs_sensors ORDER BY id DESC LIMIT 1";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/getresponse", (req, res) => {
  const sql = "SELECT waktu_siram, waktu_pH, waktu_ppm, pompa_ppmU, pompa_ppmD, pompa_siram, pompa_pH FROM response_toarduino ORDER BY id DESC LIMIT 1";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/getppmU", (req, res) => {
  const sql =
  "SELECT pompa_ppmU FROM response_toarduino ORDER BY id DESC LIMIT 1";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/getppmD", (req, res) => {
  const sql =
  "SELECT pompa_ppmD FROM response_toarduino ORDER BY id DESC LIMIT 1";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/getphU", (req, res) => {
  const sql =
  "SELECT pompa_pHU FROM response_toarduino ORDER BY id DESC LIMIT 1";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/getphD", (req, res) => {
  const sql =
  "SELECT pompa_pHD FROM response_toarduino ORDER BY id DESC LIMIT 1";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/getsiram", (req, res) => {
  const sql =
  "SELECT pompa_siram FROM response_toarduino ORDER BY id DESC LIMIT 1";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/gettargetppm", (req, res) => {
  const sql =
  "SELECT target_ppm FROM response_toarduino ORDER BY id DESC LIMIT 1";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/gettarget", (req, res) => {
  const sql =
  "SELECT target_ppm,target_ph FROM response_toarduino ORDER BY id DESC LIMIT 1";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/gettargetppm", (req, res) => {
  const sql =
  "SELECT target_ppm FROM response_toarduino ORDER BY id DESC LIMIT 1";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.get("/getwaktupompa", (req, res) => {
  const sql = "SELECT waktu_siram, waktu_pH, waktu_ppm FROM response_toarduino";
  db.query(sql, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "ini message", res);
  });
});

router.post("/pompappmU", (req, res) => {
  let formData = {
    pompa_ppmU: req.query.pompa_ppmU,
  };
  const sql2 = `UPDATE response_toarduino SET ? WHERE id = 1 `;
  db.query(sql2, formData, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message,
      };
      response(200, data, "Update Data Success", res);
    }
  });
});

router.post("/pompappmD", (req, res) => {
  let formData = {
    pompa_ppmD: req.query.pompa_ppmD,
  };
  const sql2 = `UPDATE response_toarduino SET ? WHERE id = 1 `;
  db.query(sql2, formData, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message,
      };
      response(200, data, "Update Data Success", res);
    }
  });
});

router.post("/pompapHU", (req, res) => {
  let formData = {
    pompa_pHU: req.query.pompa_pHU,
  };
  const sql2 = `UPDATE response_toarduino SET ? WHERE id = 1 `;
  db.query(sql2, formData, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message,
      };
      response(200, data, "Update Data Success", res);
    }
  });
});

router.post("/pompapHD", (req, res) => {
  let formData = {
    pompa_pHD: req.query.pompa_pHD,
  };
  const sql2 = `UPDATE response_toarduino SET ? WHERE id = 1 `;
  db.query(sql2, formData, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message,
      };
      response(200, data, "Update Data Success", res);
    }
  });
});

router.post("/pompasiram", (req, res) => {
  let formData = {
    pompa_siram: req.query.pompa_siram,
  };
  const sql2 = `UPDATE response_toarduino SET ? WHERE id = 1 `;
  db.query(sql2, formData, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message,
      };
      response(200, data, "Update Data Success", res);
    }
  });
});

router.post("/updatetarget", (req, res) => {
  let formData = {
    target_ppm: req.query.target_ppm,
    target_pH: req.query.target_pH,
  };
  const sql2 = `UPDATE response_toarduino SET ? WHERE id = 1 `;
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
  const sql2 = `UPDATE response_toarduino SET ? WHERE id = 1 `;
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
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.insertId,
      };
    }
  });
  const sql2 = `UPDATE logs_sensors SET ? WHERE id =1`;
  db.query(sql2, formData, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.message,
      };
    }
  });
  const sql4 =
    "SELECT * FROM response_toarduino";
  db.query(sql4, (err, fields) => {
    if (err) response(500, "INVALID", "ERROR", res);
    response(200, fields, "Arduino Data Sucess", res);
  });
});
module.exports = router;
