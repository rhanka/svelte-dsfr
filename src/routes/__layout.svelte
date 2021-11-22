<script lang="ts">
  import Header from '$lib/Header/Header.svelte'
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
</script>

<Header serviceTitle="svelte-dsfr" serviceDescription="design system de l'État pour Sveltekit" />

<main>
  <div class="fr-container">
    <slot />
  </div>
</main>

<style>
</style>
