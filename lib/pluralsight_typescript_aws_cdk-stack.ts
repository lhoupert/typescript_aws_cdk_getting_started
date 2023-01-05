import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Networking } from './networking'
import { DocumentManagementAPI } from './api';
import { Tags } from 'aws-cdk-lib';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as path from 'path';

export class PluralsightTypescriptAwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'DocumentsBucket', {
      encryption: s3.BucketEncryption.S3_MANAGED,
    });

    new s3Deploy.BucketDeployment(this, 'DocumentsDeployment', {
      sources: [ 
        s3Deploy.Source.asset(path.join(__dirname,'..', 'documents'))
      ],
      destinationBucket: bucket,
      memoryLimit: 512
    })

    const networkingStack = new Networking(this, 'NetworkingConstruct', {
      maxAZs: 2
    } )

    Tags.of(networkingStack).add('Module', 'Networking');

    const api = new DocumentManagementAPI(this, 'DocumentManagementAPI', {
      documentBucket: bucket
    });

    Tags.of(api).add('Module', 'API');

  }
}
 