const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keymdG7uk3KGKMg21" }).base(
    "apppzw4WfOd778rJc"
);

const table = base("discover-coffees");

console.log({ table });

const createCoffeeStore = async (req, res) => {
    console.log(req);
    if (req.method === "POST") {
        const findCoffeeStoreRecords = await table.select({
            filterByFormula: `id="0"`,
        }).firstPage();

        console.log({ findCoffeeStoreRecords });

        if (findCoffeeStoreRecords.length !== 0) {
            res.json(findCoffeeStoreRecords)
        }
        else {
            res.json({ message: "create a record bro" });
        }
    }


    if (req.method === "GET") {
        res.json({ message: "Hi bro page is running fine" })
    }
}

export default createCoffeeStore 