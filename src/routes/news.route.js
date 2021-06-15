const express = require('express');
const router = express.Router();
const newsControllers = require('../app/controllers/NewsControllers');

router.get('/show', newsControllers.show);
router.get('/', newsControllers.index);

module.exports = router;
