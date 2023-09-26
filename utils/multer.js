import multer from "multer";

// disk storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "staffPhoto") {
      cb(null, "public/staff");
    } else if (file.fieldname === "customerPhoto") {
      cb(null, "public/customer");
    } else if (file.fieldname === "studentPhoto") {
      cb(null, "public/student");
    } else if (file.fieldname === "userPhoto") {
      cb(null, "public/user");
    } else if (file.fieldname === "userCv") {
      cb(null, "public/cv");
    } else if (file.fieldname === "productPhoto") {
      cb(null, "public/products");
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        "_" +
        Math.round(Math.random() * 1000000) +
        "_" +
        file.originalname
    );
  },
});

// create customer middleware
export const createCustomerMulter = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
  limits: {
    fileSize: 10,
  },
}).single("customerPhoto");

export const createStaffrMulter = multer({ storage }).single("staffPhoto");

export const createStudentMulter = multer({ storage }).array("studentPhoto", 5);

export const createUserMulter = multer({ storage }).fields([
  {
    name: "userPhoto",
    maxCount: 1,
  },
  {
    name: "userCv",
    maxCount: 1,
  },
]);

export const createProductMulter = multer({ storage }).single("productPhoto");
