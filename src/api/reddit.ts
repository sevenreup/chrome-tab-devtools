import axios from "axios"

const getPopularRedit = async (subreddit: string) => {
    const {data} = await axios.get(`https://www.reddit.com/r/${subreddit}.json?sort=popular`)
    return data;
}