<script lang="ts">
  import Navlink from "../general/Navlink.svelte";

  export let path = "";
  export let icon: any;
  export let title = "";
</script>

<li class="h-12 list-none flex items-center mt-2">
  <Navlink
    to={path}
    normalClass="hover:bg-sky-700 hover:text-white h-full flex w-full bg-transparent items-center no-underline rounded-lg p-2"
  >
    <i class="min-w-[60px] h-full w-auto flex items-center justify-center"
      ><svelte:component this={icon} /></i
    >
    <span class="text-sm font-medium whitespace-nowrap">{title}</span>
  </Navlink>
</li>
