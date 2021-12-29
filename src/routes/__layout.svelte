<script lang="ts">
  import Header from '$lib/Header/Header.svelte'
  import Footer from '$lib/Footer/Footer.svelte'
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'

  const quickLinks=[
    { label: "Documentation", icon: "ri:book-line", href: "https://gouvfr.atlassian.net/wiki/spaces/DB/pages/193036295/COMPOSANTS" },
    { label: "Github", icon: "ri:github-line", href: "https://github.com/rhanka/svelte-dsfr" }
  ]
</script>

<Header
  serviceTitle="svelte-dsfr"
  serviceDescription="design system de l'État pour Sveltekit"
  quickLinks={quickLinks}
/>

<main>
  <div class="fr-container">
    <slot />
  </div>
</main>

<Footer descText="design system de l'État pour Sveltekit" />

<style>
</style>
