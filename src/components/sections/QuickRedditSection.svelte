<script lang="ts">
  import type { AxiosError } from "axios";
  import { useQuery } from "@sveltestack/svelte-query";
  import { getPopularRedit } from "../../api/reddit";
  import type { SubRedditResponse } from "../../models/reddit";

  let subReddit = "Javascript";
  const redditQuery = useQuery<SubRedditResponse, AxiosError>(
    ["reddit", subReddit],
    async () => getPopularRedit(subReddit),
    { enabled: !!subReddit }
  );
  $: {
    redditQuery.setOptions(
      ["reddit", subReddit],
      async () => getPopularRedit(subReddit),
      { enabled: !!subReddit }
    );
  }
</script>

<main>
  <h3>/javascript</h3>
  {#if $redditQuery.status === "success"}
    {#each $redditQuery.data?.data?.children as { data }}
      <div class="m-2 border-l-2 border-indigo-500 pl-2">
        <div>
          <h3>{data.title}</h3>
        </div>
        <p>Posted By: {data.author}</p>
        <span>Score: {data.score}</span>
      </div>
    {/each}
  {:else}
    <h3>Loading</h3>
  {/if}
</main>
