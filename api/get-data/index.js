const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const databaseId = "ShiftManagerDB";
const containerId = "ShiftData";

const client = new CosmosClient({ endpoint, key });

module.exports = async function (context, req) {
    context.log('Get data function processed a request.');

    try {
        const database = client.database(databaseId);
        const container = database.container(containerId);

        // Get all data
        const { resources: items } = await container.items
            .query("SELECT * FROM c")
            .fetchAll();

        context.res = {
            status: 200,
            body: items[0] || {
                users: [],
                entries: [],
                periods: [],
                approvals: [],
                currentPeriodId: null,
                memos: {}
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (error) {
        context.log.error('Error fetching data:', error);
        context.res = {
            status: 500,
            body: { error: 'Failed to fetch data' }
        };
    }
};
