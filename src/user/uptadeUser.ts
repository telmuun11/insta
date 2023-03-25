

import { DynamoDB } from "@aws-sdk/client-dynamodb"

import { S3 } from "@aws-sdk/client-s3"

const s3 = new S3({
  region: "ap-southeast-1",
});
const db = new DynamoDB({ region: "ap-southeast-1" });

export const uptadeUser = async (event: any) => {
  let params = {
    TableName: 'Users',

    Key: {
      'id': { S : "002"},
      'username': { S: 'From serverless telmuun uptaade' }
    }
  };

  await db.updateItem(params);

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
