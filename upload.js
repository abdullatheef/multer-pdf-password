const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
    
  },
  filename: (req, file, cb) => {
    let f_name = Date.now() + '-' + file.originalname
    cb(null, f_name);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
