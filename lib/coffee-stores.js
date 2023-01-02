import { createApi } from 'unsplash-js';

const serverApi = createApi({
    accessKey: 'HCHdVztQ9TOTVZp-FwMmphEcUWjCe-Ctxsp7Q2VbZe0',
    //...other fetch options
});
const getListOfCoffeeStorePhotos = async () => {
    const photos = await serverApi.search.getPhotos({
        query: "coffee shop",
        perPage: 30,
    });
    const unsplashResults = photos.response.results;
    return unsplashResults.map((result) => result.urls["small"]);
};

export const fetchCoffeeStores = async () => {
    const photos = await getListOfCoffeeStorePhotos();

    const searchParams = new URLSearchParams({
        query: 'coffee',
        ll: '28.63412421042539,77.21353641789399'
    });
    const results = await fetch(
        `https://api.foursquare.com/v3/places/search?${searchParams}&limit=6`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'fsq3kdGD9xgJITIEmEyBcs7laFbChZWM9lya4JJC+9IkA30=',
            }
        }
    );
    const data = await results.json();
    // console.log("api data", data.results);
    return data.results.map((result, idx) => {
        return {
            ...result,
            imgUrl: photos[idx],
        };
    });
}
