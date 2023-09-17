import { awsConfig } from "../configs/aws-config";
import { S3Config, S3Object } from "./types/s3.types";
import {
  POLICY_CONFIG_DEFAULT,
  WEBSITE_CONFIG_DEFAULT,
} from "./constants/s3.constants";
import {
  Bucket,
  BucketCannedACL,
  CreateBucketCommand,
  ListBucketsCommand,
  ListObjectsCommand,
  PutBucketPolicyCommand,
  PutBucketWebsiteCommand,
  S3Client,
} from "@aws-sdk/client-s3";

export class S3Service {
  private readonly client: S3Client;
  private static instance: S3Service;

  constructor() {
    this.client = new S3Client(awsConfig);
  }

  public static initInstance() {
    if (!S3Service.instance) {
      S3Service.instance = new S3Service();
    }

    return S3Service.instance;
  }

  public async create(bucketName: string, s3Config?: S3Config) {
    const bucketCommand = new CreateBucketCommand({
      Bucket: bucketName,
      ACL: BucketCannedACL.public_read_write,
    });

    const preparePolicyConfig = s3Config?.policyConfig ?? POLICY_CONFIG_DEFAULT;
    const prepareWebsiteConfig =
      s3Config?.websiteConfig ?? WEBSITE_CONFIG_DEFAULT;

    const policeCommand = new PutBucketPolicyCommand({
      Bucket: bucketName,
      Policy: JSON.stringify(preparePolicyConfig),
    });

    const websiteCommand = new PutBucketWebsiteCommand({
      Bucket: bucketName,
      WebsiteConfiguration: prepareWebsiteConfig,
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

  public async getObjects(bucket: string): Promise<S3Object[] | undefined> {
    const listObjectsCommand = new ListObjectsCommand({ Bucket: bucket });
    try {
      const objectsList = await this.client.send(listObjectsCommand);

      return objectsList.Contents;
    } catch (error) {
      console.error(error);
    }
  }

  // async update() {}
  // async delete() {}
}
