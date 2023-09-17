import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/app/common-types/query";
import { S3Service } from "@/aws/s3/s3.service";
import { S3Object } from "../../../aws/s3/types/s3.types";

type UseGetS3ReturnType = {
  s3ObjectsData: S3Object[];
  isS3ObjectsDataSuccess: boolean;
};

export const useGetS3Objects = (bucketName: string): UseGetS3ReturnType => {
  const s3Service = S3Service.initInstance();

  const { isSuccess, data } = useQuery([QueryKey.BUCKET_OBJECTS], () => {
    return s3Service.getObjects(bucketName);
  });

  return {
    s3ObjectsData: data ?? [],
    isS3ObjectsDataSuccess: isSuccess,
  };
};
