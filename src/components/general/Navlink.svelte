<script lang="ts">
  import { Link } from "svelte-routing";

  export let to = "";
  export let activeClass = "active";
  export let normalClass = "normal";

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: `${activeClass} ${normalClass}` };
    }
    return { class: normalClass };
  }
</script>

<Link {to} {getProps}>
  <slot />
</Link>
