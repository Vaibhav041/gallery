import {S3Client,
    ListObjectsCommand,GetObjectCommand
} from "@aws-sdk/client-s3";

const REGION = "ap-south-1";
// Create an Amazon S3 service client object.
const s3Client = new S3Client({
    region: REGION,
    signer: {
        sign: async (request) => request
    }
});


export const listAllObjects = async () => {
    const listObjectsParams = {
      Bucket: 'testbucketfp',
    };
  
    try {
      const data = await s3Client.send(new ListObjectsCommand(listObjectsParams));
      return data.Contents.map((object) => object.Key);
    } catch (err) {
      console.error("Error listing objects:", err);
      throw err;
    }
  };
 