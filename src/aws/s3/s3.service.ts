import {
  Bucket,
  BucketCannedACL,
  CreateBucketCommand,
  ListBucketsCommand,
  ListBucketsCommandOutput,
  PutBucketPolicyCommand,
  PutBucketWebsiteCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { awsConfig } from "../configs/aws-config";

export class S3Service {
  private readonly client: S3Client;

  constructor() {
    this.client = new S3Client(awsConfig);
  }

  public async create(bucketName: string) {
    const bucketCommand = new CreateBucketCommand({
      Bucket: bucketName,
      ACL: BucketCannedACL.public_read_write,
    });

    const policeCommand = new PutBucketPolicyCommand({
      Bucket: bucketName,
      Policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "PublicReadGetObject",
            Effect: "Allow",
            Principal: "*",
            Action: "s3:GetObject",
            Resource: `arn:aws:s3:::${bucketName}/*`,
          },
        ],
      }),
    });

    const websiteCommand = new PutBucketWebsiteCommand({
      Bucket: bucketName,
      WebsiteConfiguration: {
        IndexDocument: { Suffix: "index.html" },
        ErrorDocument: { Key: "index.html" },
      },
    });

    try {
      await this.client.send(bucketCommand);
      await this.client.send(policeCommand);
      await this.client.send(websiteCommand);

      console.log("_____BUCKET CREATED_____");
    } catch (error) {
      console.error(error);
    }
  }

  public async getAll(): Promise<Bucket[] | undefined> {
    const listCommand = new ListBucketsCommand({});

    try {
      const s3List = await this.client.send(listCommand);

      return s3List.Buckets;
    } catch (error) {
      console.error(error);
    }
  }

  // async update() {}
  // async delete() {}
  // async getAll() {}
  // async getOne() {}
}
