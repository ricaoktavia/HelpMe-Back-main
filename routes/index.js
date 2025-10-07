const router = require('express').Router();

router.use('/student', require('./student'));

router.get('/', (req, res) => {
  res.json({
    message: 'Saya berhasil menginstall express!'
  })
});


router.post('/', (req, res) => {
  res.json({
    message: 'Ini adalah halaman POST!'
  })
});

router.put('/', (req, res) => {
  res.json({
    message: 'Ini adalah halaman PUT!'
  })
});

router.delete('/', (req, res) => {
  res.json({
    message: 'Ini adalah halaman DELETE!'
  })
});


module.exports = router;