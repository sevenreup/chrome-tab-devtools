import axios from "axios"

export const getPopularRedit = async (subreddit: string) => {
    const {data} = await axios.get(`https://www.reddit.com/r/${subreddit}.json?sort=popular`)
    console.log(data);
    
    return data;
}