import multer from "multer";
import path from "path";
import fs from "fs";
import os from "os";

// In serverless environments (like Vercel), the filesystem is read-only (EROFS).
// Use os.tmpdir() (/tmp on Linux/Vercel) which is writable.
let uploadDir = "uploads";

try {
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    uploadDir = os.tmpdir();
  } else {
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
  }
} catch (err) {
  uploadDir = os.tmpdir();
}

//Storage
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,uploadDir);
    },
    filename:(req,file,cb) => {
        const uniqueName = Date.now() + "-" + Math.round(Math.random()*1e9)
        cb(null, uniqueName + path.extname(file.originalname));
    }
});

//File Filter
const fileFilter = (req,file,cb) => {
    const allowedTypes = [".jpg",".jpeg",".png",".gif",".webp"];
    const ext = path.extname(file.originalname).toLowerCase();
    if(allowedTypes.includes(ext)){
        cb(null,true);
    }else{
        cb(new Error("Invalid file type"));
    }
};

//Multer Instance
export const upload = multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize: 5 * 1024 * 1024 //5MB
    }
});

export default upload;