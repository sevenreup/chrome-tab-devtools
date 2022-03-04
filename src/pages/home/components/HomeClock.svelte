<script lang="ts">
  import { onMount } from "svelte";
  let date = new Date();
  $: hour = date.getHours();
  $: min = date.getMinutes();
  $: sec = date.getSeconds();
  onMount(() => {
    const interval = setInterval(() => {
      date = new Date();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="flex justify-center flex-col w-full text-center p-2">
  <span
    class="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl mb-2"
  >
    {hour} : {min} : {sec}
  </span>
  <span>{date}</span>
</div>
