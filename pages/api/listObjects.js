import { listAllObjects } from '@/utility/s3Config';

export default async function handler(req, res) {
  const bucketName = 'YOUR_S3_BUCKET_NAME';

  try {
    const objects = await listAllObjects();
    res.status(200).json({ objects });
  } catch (error) {
    console.error('Error fetching objects:', error);
    res.status(500).json({ error: 'Error listing objects from S3' });
  }
}