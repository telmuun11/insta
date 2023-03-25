

import { DynamoDB } from "@aws-sdk/client-dynamodb"

import { S3 } from "@aws-sdk/client-s3"

const s3 = new S3({
  region: "ap-southeast-1",
});
const db = new DynamoDB({ region: "ap-southeast-1" });

export const createUser = async (event: any) => {
  let params = {
    TableName: 'Users',
    Item: {
      'id': { S : "002"},
      'username': { S: 'From serverless telmuun 2222' }
    }
  };

  await db.putItem(params);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully !  lalalall',

      },
      null,
      2
    ),
  };

};
