import { APIGatewayProxyEventV2, Context, APIGatewayProxyStructuredResultV2 } from 'aws-lambda'

const bucketName = process.env.DOCUMENTS_BUCKET_NAME // access to environment variable on lambda 

export const getDocuments = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyStructuredResultV2> => {
    console.log(`Bucket Name: ${bucketName}`)
    
    return {
        statusCode: 200,
        body: 'Success'
    }
}