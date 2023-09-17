import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/app/common-types/query";
import { Route53Service } from "../../../aws/route53/route53.service";
import { HostedZone } from "@aws-sdk/client-route-53";

type UseGetRoute53ReturnType = {
  route53Data: HostedZone[];
  isRoute53DataSuccess: boolean;
};

export const useGetRoute53 = (): UseGetRoute53ReturnType => {
  const route53Service = Route53Service.initInstance();

  const { isSuccess, data } = useQuery([QueryKey.BUCKET], () => {
    return route53Service.getAll();
  });

  return {
    route53Data: data ?? [],
    isRoute53DataSuccess: isSuccess,
  };
};
