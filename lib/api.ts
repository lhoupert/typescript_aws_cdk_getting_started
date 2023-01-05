import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

interface DocumentManagementAPIProps {

}

export class DocumentManagementAPI extends Construct {
  constructor(scope: Construct, id: string, props: DocumentManagementAPIProps) {
    super(scope, id);

    const getDocumentsFunction = new lambda.NodejsFunction(this, 'GetDocumentsFunction', {
      runtime: Runtime.NODEJS_12_X,
      entry: path.join(__dirname, '..', 'api', 'getDocuments', 'index.ts'),
      handler: 'getDocuments',
      bundling: {
        externalModules: [
        'aws-sdk'
      ]}
    })
  }
}
