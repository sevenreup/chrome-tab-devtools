<script lang="ts">
  import { getTrendingRepos, useGetLanguages } from "../api/github";
  import { useQuery } from "@sveltestack/svelte-query";
  import type { RepositoryResponse } from "../models/repository";
  import type { AxiosError } from "axios";
  import { isArray } from "../util/types";
  import RepositoryCard from "../components/RepositoryCard.svelte";
  import moment from "moment";
  let selectedLanguage: string | null = "all";
  let selectedPeriod: moment.DurationInputArg2 | null = "day";
  let token: string | undefined = undefined;

  const languageQuery = useGetLanguages();
  const getFilters = () => {
    const filters: { dateRange?: any; token?: any; language?: any } = {};

    filters.dateRange = getNextDateRange();
    if (selectedLanguage) {
      filters.language = selectedLanguage;
    }

    if (token) {
      filters.token = token;
    }

    return filters;
  };
  const trendingQuery = useQuery<RepositoryResponse, AxiosError>(
    ["trending", selectedLanguage, selectedPeriod],
    async () => await getTrendingRepos(getFilters()),
    { enabled: !!selectedLanguage && !!selectedPeriod }
  );

  $: {
    trendingQuery.setOptions(
      ["trending", selectedLanguage, selectedPeriod],
      async () => await getTrendingRepos(getFilters()),
      {
        enabled: !!selectedLanguage,
      }
    );
  }

  function getNextDateRange() {
    const repositories = $trendingQuery.data?.items || [];
    const dateJump = selectedPeriod;

    const dateRange: { start?: moment.Moment; end?: moment.Moment } = {};
    const lastRecords: any = repositories[repositories.length - 1];

    if (lastRecords) {
      dateRange.start = moment(lastRecords.start)
        .subtract(1, dateJump)
        .startOf("day");
      dateRange.end = lastRecords.start;
    } else {
      dateRange.start = moment().subtract(1, dateJump).startOf("day");
      dateRange.end = moment().startOf("day");
    }

    return dateRange;
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
    <option value="day">Daily</option>
    <option value="week">Weekly</option>
    <option value="month">Monthly</option>
    <option value="year">Yearly</option>
  </select>
  {#if $languageQuery.status === "success"}
    {#if isArray($trendingQuery.data?.items)}
      <div class="mx-auto container py-20 px-6">
        <div
          class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {#each $trendingQuery.data?.items as repo}
            <RepositoryCard {repo} />
          {/each}
        </div>
      </div>
    {/if}
  {/if}
</main>
