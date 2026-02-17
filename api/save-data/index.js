const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const databaseId = "ShiftManagerDB";
const containerId = "ShiftData";

const client = new CosmosClient({ endpoint, key });

module.exports = async function (context, req) {
    context.log('Save data function processed a request.');

    if (!req.body) {
        context.res = {
            status: 400,
            body: { error: 'Request body is required' }
        };
        return;
    }

    try {
        const database = client.database(databaseId);
        const container = database.container(containerId);

        // Use a fixed ID for the single document
        const documentId = "shift-data";
        const data = {
            id: documentId,
            ...req.body,
            _ts: Date.now()
        };

        // Upsert the document
        await container.items.upsert(data);

        context.res = {
            status: 200,
            body: { success: true, message: 'Data saved successfully' },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (error) {
        context.log.error('Error saving data:', error);
        context.res = {
            status: 500,
            body: { error: 'Failed to save data' }
        };
    }
};
