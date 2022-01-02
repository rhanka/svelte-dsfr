<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/navigation/navigation.css'

  import NavigationMenuLink from '$lib/Navigation/NavigationMenuLink.svelte'

  export let title: string
  export let links: any = []
</script>

<div class="fr-col-12 fr-col-md-3">
  <h5 class="fr-mega-menu__category">
    <a
      class="fr-nav__link"
      href="#"
      on:click|preventDefault={() => {}}
    >
      { title }
    </a>
  </h5>
  <ul class="fr-mega-menu__list">
    {#each links as link, idx}
      <li class="fr-mega-menu__item">
        <NavigationMenuLink {...link} />
      </li>
    {/each}
  </ul>
</div>