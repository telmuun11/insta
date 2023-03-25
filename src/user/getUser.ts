

import { DynamoDB } from "@aws-sdk/client-dynamodb"
import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
import { S3 } from "@aws-sdk/client-s3"

const client = new SQSClient({ region: "ap-southeast-1" });
// const command = new SendMessageCommand() ;
// const response = await client.send(command);
const s3 = new S3({
  region: "ap-southeast-1",
});
const db = new DynamoDB({ region: "ap-southeast-1" });

export const getUser = async (event: any) => {
  let params = {
    TableName: 'Users',
    Key: {
      'id': {S: '001'}
    },
  };

  const data = await db.getItem(params);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function got the data successfully !  lalalall',
        body : data
      },
      null,
      2
    ),
  };

};
