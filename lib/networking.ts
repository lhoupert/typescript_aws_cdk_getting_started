import { Construct } from 'constructs';

interface NetworkingProps {
    maxAZs:number
}

export class Networking extends Construct {
    constructor(scope: Construct, id:string, props?: NetworkingProps) {
        super(scope,id)
    }
}