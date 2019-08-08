import mongoose from 'mongoose';
import config from '../../config';
const File = mongoose.model('File');
export default async req => {
  const { file } = req;
  const obj = new File({
    name: file.filename,
    path: file.path,
    size: file.size,
    type: file.mimetype,
    original_name: file.originalname,
    deleted: false
  });
  await obj.save();

  return {
    code: config.code.success,
    data: {
      name: obj.name
    }
  };
};
