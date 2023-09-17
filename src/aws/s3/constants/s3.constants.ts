import { S3PolicyConfig, S3WebsiteConfig } from "../types/s3.types";

export const POLICY_CONFIG_DEFAULT: S3PolicyConfig = {
  Version: "2012-10-17",
  Statement: [
    {
      Sid: "PublicReadGetObject",
      Effect: "Allow",
      Principal: "*",
      Action: "s3:GetObject",
      Resource: `arn:aws:s3:::BUKET_BANE/*`,
    },
  ],
};

export const WEBSITE_CONFIG_DEFAULT: S3WebsiteConfig = {
  IndexDocument: { Suffix: "index.html" },
  ErrorDocument: { Key: "index.html" },
};
