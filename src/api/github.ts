import axios, { AxiosError } from "axios"
import type { Developer } from "src/models/developer";
import type { Language } from "src/models/language";
import type { Repository } from "src/models/repository";
import { useQuery } from '@sveltestack/svelte-query'

export const githubApi = axios.create({
    baseURL: "https://gtrend.yapie.me"
});

export const getTrendingDevs = async (language: string, since: string): Promise<Developer> => {
    return (await githubApi.get<Developer>(`/developers?language=${language}&since=${since}`)).data
}   

export const getTrendingRepos = async(language: string, since: string) => {
    const { data } = await githubApi.get<Repository[]>(`/repositories?language=${language}&since=${since}`)
        return data;
}

export const useGetTrendingRepos = (language: string, since: string) => {
    console.log({ language, since });

    return useQuery<Repository[], AxiosError>(["trending", language, since], () => getTrendingPage(),{enabled: false})
}

export const useGetLanguages = () => useQuery<Language[] | AxiosError>(['languages'], async () => {
    const data = await githubApi.get<Language[]>(`/languages`)
    return data.data;
}, {})