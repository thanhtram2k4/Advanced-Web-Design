const express = require('express');
const router = express.Router();
const rectangleController = require('../controllers/rectangleController');

// Route để hiển thị trang form tính chu vi với perimeter mặc định là null
router.get('/', (req, res) => {
    res.render('index', { perimeter: null }); // Thêm perimeter với giá trị ban đầu là null
});

// Route cho việc tính chu vi
router.post('/calculate', rectangleController.calculatePerimeter);

module.exports = router;
