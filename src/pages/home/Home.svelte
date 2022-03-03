<script lang="ts">
  import QuickRedditSection from "../../components/sections/QuickRedditSection.svelte";
  import HomeRight from "./components/HomeRight.svelte";
  import HomeCenter from "./components/HomeCenter.svelte";
</script>

<main class="home-grid h-screen w-screen p-4">
  <div class="overflow-y-scroll w-full">
    <QuickRedditSection />
  </div>
  <div class="">
    <HomeCenter />
  </div>
  <div class="">
    <HomeRight />
  </div>
</main>

<style lang="scss">
  .home-grid {
    display: grid;
    grid-template-columns: 25% 50% 25%;
  }
</style>
