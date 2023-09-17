import { Bucket } from "@aws-sdk/client-s3";
import { S3ObjectResponse } from "../../../../aws/s3/types/s3.types";

export type UseGetS3ReturnType = {
  s3Data: Bucket[];
  isS3DataSuccess: boolean;
};

export type UseGetS3ObjectsReturnType = {
  s3ObjectsData: S3ObjectResponse[];
  isS3ObjectsDataSuccess: boolean;
};
