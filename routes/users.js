var express = require('express');
const {
  addContact
} = require('../utils')

var router = express.Router();

/* GET users listing. */
router.post("/contacts", (req, res)=> {
  addContact(req, res)
})

router.post("/purchases", (req, res)=> {
  addContact(req, res)
})

module.exports = router;
