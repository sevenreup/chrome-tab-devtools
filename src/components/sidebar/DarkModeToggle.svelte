<script>
  import IoIosMoon from "svelte-icons/io/IoIosMoon.svelte";

  import IoIosSunny from "svelte-icons/io/IoIosSunny.svelte";

  let darkMode = false;
</script>

<li
  class="h-12 list-none flex items-center mt-2 bg-slate-400 p-2 rounded-lg relative"
>
  <div class="flex items-center">
    <div class="sun-moon h-8 w-8">
      <i class:hidden={darkMode}>
        <IoIosSunny />
      </i>
      <i class:hidden={!darkMode}>
        <IoIosMoon />
      </i>
    </div>
    <span class="mode-text text">Dark mode</span>
  </div>

  <div
    class="toggle-switch absolute right-0 h-full flex items-center justify-center rounded-lg cursor-pointer"
    on:click={() => (darkMode = !darkMode)}
  >
    <span
      class={`relative h-[22px] w-[40px] bg-slate-600 rounded-lg before:content-[''] before:bg-slate-700 before:absolute before:h-[15px] before:w-[15px] before:top-1/2 before:-translate-y-1/2 ${
        darkMode ? " before:left-[5px]" : " before:left-[20px]"
      }`}
    />
  </div>
</li>
