import {FC} from "react";
import {useQuery} from "@tanstack/react-query";
import {QueryKey} from "@/app/common-types/query";
import {S3Service} from "@/aws/s3/s3.service";
import {Bucket} from "@aws-sdk/client-s3";

type UseGetS3ReturnType = {
  s3Data: Bucket[];
  isS3DataSuccess: boolean;
}

export const useGetS3 = (): UseGetS3ReturnType => {
  const {isSuccess, data} = useQuery([QueryKey.BUCKET], () => {
    return new S3Service().getAll();
  })

  return {
    s3Data: data ?? [],
    isS3DataSuccess: isSuccess
  }
}