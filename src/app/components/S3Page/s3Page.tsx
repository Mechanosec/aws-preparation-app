"use client";
import { FC } from "react";
import { S3Service } from "../../../aws/s3/s3.service";
import { useQuery } from "@tanstack/react-query";

const someS3data = [
  {
    name: "asd",
    region: "asd",
    access: "asdasd",
    creationDate: "",
  },
  {
    name: "asd",
    region: "asd",
    access: "asdasd",
    creationDate: "",
  },
  {
    name: "asd",
    region: "asd",
    access: "asdasd",
    creationDate: "",
  },
  {
    name: "asd",
    region: "asd",
    access: "asdasd",
    creationDate: "",
  },
];

const S3Page: FC = () => {
  const s3Service = new S3Service();
  const { data } = useQuery(["Bucket"], s3Service.getAll());
  console.log(data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>AWS Region</th>
            <th>Access</th>
            <th>Creation date</th>
          </tr>
        </thead>
        <tbody>
          {someS3data.map((s3Data) => {
            return (
              <tr key={s3Data.name}>
                <td></td>
                <td>{s3Data.name}</td>
                <td>{s3Data.region}</td>
                <td>{s3Data.access}</td>
                <td>{s3Data.creationDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default S3Page;
