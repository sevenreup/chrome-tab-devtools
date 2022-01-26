<script lang="ts">
  import { useQuery, Query } from "@sveltestack/svelte-query";
  import type { Repository } from "../../models/repository";
  import type { AxiosError } from "axios";
  import { githubApi } from "../../api/github";

  export let language: any;
  export let since: any;

  const getTrending = async () => {
    const { data } = await githubApi.get<Repository[]>(
      `/repositories?language=${language}&since=${since}`
    );
    return data;
  };
  const queryResult = useQuery<Repository[] | AxiosError>(
    ["trending", language, since],
    getTrending,
    {
      enabled: !!language
    }
  );
</script>

<Query
  options={{
    queryKey: ["trending", language, since],
    queryFn: getTrending,
    enabled: !!language,
  }}
>
  <slot query={queryResult} />
</Query>
