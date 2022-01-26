<script lang="ts">
  import { getTrendingRepos, useGetLanguages } from "../api/github";
  import { useQuery } from "@sveltestack/svelte-query";
  import type { Repository } from "../models/repository";
  import type { AxiosError } from "axios";
  import { isArray } from "../util/types";
  import RepositoryCard from "../components/RepositoryCard.svelte";
  let selectedLanguage: string | null = 'all';
  let selectedPeriod: string | null = 'daily';

  const languageQuery = useGetLanguages();
  const trendingQuery = useQuery<Repository[], AxiosError>(
    ["trending", selectedLanguage, selectedPeriod],
    async () => await getTrendingRepos(selectedLanguage, selectedPeriod),
    { enabled: !!selectedLanguage && !!selectedPeriod }
  );

  $: {
    trendingQuery.setOptions(
      ["trending", selectedLanguage, selectedPeriod],
      async () => await getTrendingRepos(selectedLanguage, selectedPeriod),
      {
        enabled: !!selectedLanguage,
      }
    );
  }
</script>

<main>
  {#if $languageQuery.status === "success"}
    <select bind:value={selectedLanguage}>
      <option value="all">All Languages</option>
      {#each $languageQuery.data as { name, urlParam }}
        <option value={urlParam}>{name}</option>
      {/each}
    </select>
  {/if}
  <select bind:value={selectedPeriod}>
    <option value="daily">Daily</option>
    <option value="weekly">Weekly</option>
    <option value="monthly">Monthly</option>
  </select>
  {#if $languageQuery.status === "success"}
    {#if isArray($trendingQuery.data)}
      <div class="mx-auto container py-20 px-6">
        <div
          class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {#each $trendingQuery.data as repo}
            <RepositoryCard {repo} />
          {/each}
        </div>
      </div>
    {/if}
  {/if}
</main>
