<script lang="ts">
  import Sidebar from "./components/sidebar/Sidebar.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import Home from "./pages/Home.svelte";
  import GitHub from "./pages/GitHub.svelte";
  import "./tailwind.css";

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  let sideNavOpen = false;
</script>

<Router>
  <QueryClientProvider client={queryClient}>
    <main class="flex flex-no-wrap">
      <Sidebar
        sidebarOpen={sideNavOpen}
        toggleNav={() => (sideNavOpen = !sideNavOpen)}
      />
      <!-- Sidebar ends -->
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div class={!sideNavOpen ? "ml-[250px]" : "ml-[88px]"}>
        <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
          <div
            class="w-full h-full rounded border-dashed border-2 border-gray-300"
          >
            <Route path="/" component={Home} />
            <Route path="/github" component={GitHub} />
          </div>
        </div>
      </div>
    </main></QueryClientProvider
  >
</Router>
