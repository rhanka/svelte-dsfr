<script lang="ts">
  import Header from '$lib/Header/Header.svelte'
  import DisplayParamsModal from '$lib/DisplayParams/DisplayParamsModal.svelte'
  import Navigation from '$lib/Navigation/Navigation.svelte'
  import Footer from '$lib/Footer/Footer.svelte'
  import Favicon from '$lib/Favicon/Favicon.svelte'
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '../app.css'

  const quickLinks=[
    { label: "Documentation", icon: "ri:book-line", to: "https://gouvfr.atlassian.net/wiki/spaces/DB/pages/193036295/COMPOSANTS" },
    { label: "Github", icon: "ri:github-line", to: "https://github.com/rhanka/svelte-dsfr" }
  ]

  const navItems=[
    { to: "https://google.com", label: "Google" }
  ]

</script>

<Favicon/>

<Header
  serviceTitle="Portage Svelte du Design System de l'État"
  serviceDescription="Avec Sveltekit - version Dsfr 1.2.1"
  quickLinks={quickLinks}
  displayParams={true}
>
  <Navigation navItems={navItems} slot="navigation"/>
</Header>

<DisplayParamsModal/>

<main>
  <div class="fr-container">
    <slot />
  </div>
</main>

<Footer descText="design system de l'État pour Sveltekit" />

<style>
</style>
