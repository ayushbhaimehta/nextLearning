export const fetchCoffeeStores = async () => {
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
    console.log("api data", data.results);
    const final = data.results;
    return final;
}
