<script lang="ts">
  import type { Repository } from "../models/repository";

  export let repo: Repository;
</script>

<div
  class="w-full flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4"
>
  <div class="flex items-center justify-start text-gray-800 dark:text-gray-100">
    <img class="h-14 rounded-full mr-2" src={repo.avatar} alt={repo.name} />
    <div>
      <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-1">
        {repo.name}
      </h4>
      <p class="text-gray-800 dark:text-gray-100 text-sm">{repo.author}</p>
    </div>
  </div>
  <div>
    <p class="text-gray-800 dark:text-gray-100 text-sm my-2">{repo.description ?? ""}</p>
  </div>
  <div>
    <div
      class="flex items-center justify-between text-gray-800 dark:text-gray-100"
    >
      <p class="text-sm">March 28, 2020</p>
    </div>
  </div>
</div>
