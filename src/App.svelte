<script lang="ts">
  import Sidebar from "./components/sidebar/Sidebar.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import Home from "./pages/home/Home.svelte";
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
        <Route path="/" component={Home} />
        <Route path="/github" component={GitHub} />
      </div>
    </main></QueryClientProvider
  >
</Router>
