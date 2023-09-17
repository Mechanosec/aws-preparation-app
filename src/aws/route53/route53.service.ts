import {
  Change,
  ChangeResourceRecordSetsCommand,
  HostedZone,
  ListHostedZonesByNameCommand,
  ListHostedZonesByNameCommandOutput,
  Route53Client,
} from "@aws-sdk/client-route-53";
import { awsConfig } from "../configs/aws-config";

export class Route53Service {
  private readonly client: Route53Client;
  private static instance: Route53Service;

  constructor() {
    this.client = new Route53Client(awsConfig);
  }

  public static initInstance() {
    if (!Route53Service.instance) {
      Route53Service.instance = new Route53Service();
    }

    return Route53Service.instance;
  }

  public async create(hostedZoneId: string, changes: Change[]) {
    if (!changes.length) {
      console.error("Need some data for creation");
    }

    const distributionRecord = new ChangeResourceRecordSetsCommand({
      HostedZoneId: hostedZoneId,
      ChangeBatch: {
        Changes: changes,
      },
    });

    try {
      await this.client.send(distributionRecord);

      console.log("_____RECORD CREATED_____");
    } catch (error) {
      console.error(error);
    }
  }

  public async getAll(): Promise<HostedZone[] | undefined> {
    const hostedZoneList = new ListHostedZonesByNameCommand({});
    try {
      const response: ListHostedZonesByNameCommandOutput =
        await this.client.send(hostedZoneList);

      const responseApp = this.hostedZoneListMapping(
        response.HostedZones ?? [],
      );
      console.log(responseApp);
      return responseApp;
    } catch (error) {
      console.error(error);
    }
  }

  private hostedZoneListMapping(hostedZoneList: HostedZone[]) {
    try {
      return hostedZoneList.map((hostedZone) => {
        hostedZone.Id = hostedZone.Id?.replace("/hostedzone/", "");
        hostedZone.Name = hostedZone.Name?.slice(0, -1);
        return hostedZone;
      });
    } catch (error) {
      console.error(error);
    }
  }
}
