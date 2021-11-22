<script lang="ts">
  import Header from '$lib/Header/Header.svelte'
  import Footer from '$lib/Footer/Footer.svelte'
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
</script>

<Header serviceTitle="svelte-dsfr" serviceDescription="design system de l'État pour Sveltekit" />

<main>
  <div class="fr-container">
    <slot />
  </div>
</main>

<Footer descText="design system de l'État pour Sveltekit" />

<style>
</style>
