require('dotenv').config()
const fs = require('fs');
const s3 = require('aws-sdk/clients/s3')


const bucketName= process.env.BUCKET_NAME
const region= process.env.REGION
const accessKeyId= process.env.ACCESS_ID
const secretAccessKey= process.env.SECRET_ACCESS_KEY


const s3A = new s3 ({
    region, 
    accessKeyId,
    secretAccessKey
})

function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
}
return s3A.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile