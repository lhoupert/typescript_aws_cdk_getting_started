import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Networking } from './networking'
import { Tags } from 'aws-cdk-lib';


export class PluralsightTypescriptAwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'DocumentsBucket', {
      encryption: s3.BucketEncryption.S3_MANAGED,
    });

    const networkingStack = new Networking(this, 'NetworkingConstruct', {
      maxAZs: 2
    } )

    Tags.of(networkingStack).add('Module', 'Networking');

  }
}
 