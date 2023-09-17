import { WebsiteConfiguration, _Object } from "@aws-sdk/client-s3";

export interface S3Config {
  policyConfig?: S3PolicyConfig;
  websiteConfig?: S3WebsiteConfig;
}

export interface S3PolicyConfig {
  Version: string;
  Statement: [
    {
      Sid: string;
      Effect: string;
      Principal: string;
      Action: string;
      Resource: string;
    },
  ];
}

export interface S3WebsiteConfig extends WebsiteConfiguration {}

export interface S3Object extends _Object {}
