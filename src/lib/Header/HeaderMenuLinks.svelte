<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/link/link.css'

  import HeaderMenuLink from '$lib/Header/HeaderMenuLink.svelte'
  import DisplayParamsButton from '$lib/DisplayParams/DisplayParamsButton.svelte'

  export let links: any = () => undefined
  export let displayParams: boolean = false
</script>

<ul class="fr-links-group">
  {#each links as quickLink, index}
    <li>
      <HeaderMenuLink {...quickLink} />
    </li>
  {/each}
  {#if displayParams}
    <li>
      <DisplayParamsButton/>
    </li>
  {/if}
</ul>

<style>
</style>
