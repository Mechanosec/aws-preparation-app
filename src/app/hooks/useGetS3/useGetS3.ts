import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/app/common-types/query";
import { S3Service } from "@/aws/s3/s3.service";
import {
  UseGetS3ObjectsReturnType,
  UseGetS3ReturnType,
} from "./hooks-s3.types";

export const useGetS3 = (): UseGetS3ReturnType => {
  const s3Service = S3Service.initInstance();

  const { isSuccess, data } = useQuery([QueryKey.BUCKET], () => {
    return s3Service.getAll();
  });

  return {
    s3Data: data ?? [],
    isS3DataSuccess: isSuccess,
  };
};

export const useGetS3Objects = (
  bucketName: string
): UseGetS3ObjectsReturnType => {
  const s3Service = S3Service.initInstance();

  const { isSuccess, data } = useQuery([QueryKey.BUCKET_OBJECTS], () => {
    return s3Service.getObjects(bucketName);
  });

  return {
    s3ObjectsData: data ?? [],
    isS3ObjectsDataSuccess: isSuccess,
  };
};
