<script lang="ts">
  import { getTrendingRepos, useGetLanguages } from "../api/github";
  import { useQuery } from "@sveltestack/svelte-query";
  import type { Repository } from "../models/repository";
  import type { AxiosError } from "axios";
  import { isArray } from "../util/types";
  let selectedLanguage: string | null = null;
  let selectedPeriod: string | null = null;

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
      {#each $trendingQuery.data as repo}
        <h3>{repo.author}</h3>
      {/each}
    {/if}
  {/if}
</main>
