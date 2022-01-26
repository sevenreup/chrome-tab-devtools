import axios, { AxiosError } from "axios"
import type { Developer } from "src/models/developer";
import type { Language } from "src/models/language";
import type { Repository } from "src/models/repository";
import { useQuery } from '@sveltestack/svelte-query'
import moment from "moment";

const transformFilters = (filters: any) => {
    const transformedFilters = {
        q: '',
        sort: 'stars',
        order: 'desc'
    };

    const startMoment = moment(filters.dateRange.start);
    const endMoment = moment(filters.dateRange.end);
    const reposDate = `created:${startMoment.format()}..${endMoment.format()}`;
    const reposLanguage = filters.language !== "all" ? `language:${filters.language} ` : '';

    transformedFilters.q = reposLanguage + reposDate;

    return transformedFilters;
};

export const githubApi = axios.create({
    baseURL: "https://gtrend.yapie.me"
});

export const getTrendingDevs = async (language: string, since: string): Promise<Developer> => {
    return (await githubApi.get<Developer>(`/developers?language=${language}&since=${since}`)).data
}

export const getTrendingRepos = async (filters: any) => {
    const { data } = await axios.get(`https://api.github.com/search/repositories`, { params: transformFilters(filters), })
    return data;
}


export const useGetLanguages = () => useQuery<Language[] | AxiosError>(['languages'], async () => {
    const data = await githubApi.get<Language[]>(`/languages`)
    return data.data;
}, {})