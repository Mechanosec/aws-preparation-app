export type AwsConfig = {
  region: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  };
};

export const awsConfig: AwsConfig = {
  region: process.env.AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
};
