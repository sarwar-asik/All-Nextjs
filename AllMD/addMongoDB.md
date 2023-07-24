### installation () :::

        npm i mongodb

### src>pages>api>news.js :::

    const { MongoClient, ServerApiVersion } = require("mongodb");
    const uri = process.env.DB_URL;
    

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
        });

    async function run(req, res) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log(" successfully connected to MongoDB!");
        const newsCollection = client.db("news-portal").collection("news");

        if (req.method === "GET") {
        const news = await newsCollection.find({}).toArray();
        res.send({ message: "success", status: 200, data: news });
        // res.send({data:"aaaaaaaaaaa"})
        }
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
    }
    // run().catch(console.dir);

    export default run;

### fetch the data with the url of below >>

         http://localhost:3000/api/news
