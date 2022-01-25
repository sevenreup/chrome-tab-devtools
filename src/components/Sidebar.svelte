<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
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
      icon: 2,
    },
    {
      name: "Github",
      path: "/github",
      icon: 2,
    },
  ];
</script>

<div
  style="min-height: 716px"
  class="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex"
>
  <div class="px-8">
    <div class="h-16 w-full flex items-center">
      <img
        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg1.svg"
        alt="Logo"
      />
    </div>
    <ul class="mt-12">
      {#each links as nav}
        <li
          class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6"
        >
          <Link
            to={nav.path}
            class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-grid"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="4" y="4" width="6" height="6" rx="1" />
              <rect x="14" y="4" width="6" height="6" rx="1" />
              <rect x="4" y="14" width="6" height="6" rx="1" />
              <rect x="14" y="14" width="6" height="6" rx="1" />
            </svg>
            <span class="text-sm ml-2">{nav.name}</span>
          </Link>
          {#if nav.notifications !== undefined}
            <div
              class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
            >
              5
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
  <div class="px-8 border-t border-gray-700">
    <ul class="w-full flex items-center justify-between bg-gray-800">
      <li class="cursor-pointer text-white pt-5 pb-3">
        <button
          aria-label="show notifications"
          class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
        >
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg3.svg"
            alt="notifications"
          />
        </button>
      </li>
      <li class="cursor-pointer text-white pt-5 pb-3">
        <button
          aria-label="open chats"
          class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
        >
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg4.svg"
            alt="chat"
          />
        </button>
      </li>
      <li class="cursor-pointer text-white pt-5 pb-3">
        <button
          aria-label="open settings"
          class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
        >
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg5.svg"
            alt="settings"
          />
        </button>
      </li>
      <li class="cursor-pointer text-white pt-5 pb-3">
        <button
          aria-label="open logs"
          class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
        >
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg6.svg"
            alt="drawer"
          />
        </button>
      </li>
    </ul>
  </div>
</div>
