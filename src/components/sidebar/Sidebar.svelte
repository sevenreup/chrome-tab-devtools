<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import TiHome from "svelte-icons/ti/TiHome.svelte";
  import TiThMenuOutline from "svelte-icons/ti/TiThMenuOutline.svelte";
  import IoMdClose from "svelte-icons/io/IoMdClose.svelte";
  import MdSettings from "svelte-icons/md/MdSettings.svelte";
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import SidebarLink from "./SidebarLink.svelte";
  import DarkModeToggle from "./DarkModeToggle.svelte";
  interface NavItems {
    name: string;
    path: string;
    icon: any;
    notifications?: number;
  }
  let links: NavItems[] = [
    {
      name: "Home",
      path: "/",
      icon: TiHome,
    },
    {
      name: "Github",
      path: "/github",
      icon: FaGithub,
    },
  ];

  export let sidebarOpen = false;

  export let toggleNav = () => {};
</script>

<nav
  class="sidebar fixed top-0 left-0 h-full z-50 w-[250px] bg-slate-100"
  class:close={sidebarOpen}
>
  <header class="flex justify-start pl-8 mt-2">
    <span class="text-blue-600 w-6 h-6" on:click={toggleNav}>
      {#if !sidebarOpen}
        <IoMdClose />
      {:else}
        <TiThMenuOutline />
      {/if}
    </span>
  </header>

  <div class="menu-bar flex justify-between overflow-y-scroll flex-col">
    <div class="menu">
      <ul class="menu-links">
        {#each links as nav}
          <SidebarLink title={nav.name} path={nav.path} icon={nav.icon} />
        {/each}
      </ul>
    </div>

    <div class="bottom-content">
      <SidebarLink title="Settings" path="/settings" icon={MdSettings} />

      <DarkModeToggle />
    </div>
  </div>
</nav>

<style lang="scss">
  .menu-bar {
    height: calc(100% - 55px);

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .sidebar {
    padding: 10px 14px;
    &.close {
      width: 88px;

      .text {
        opacity: 0;
      }
    }
  }
</style>
