// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchCoffeeStores } from "../../lib/coffee-stores";

const getCoffeeStoresByLocation = async (req, res) => {
    try {
        const latLong = req.query.latLong;
        console.log(req);
        const response = await fetchCoffeeStores(latLong, 6);
        console.log(response);
        res.status(200);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send("Error!!!")
    }
}
export default getCoffeeStoresByLocation