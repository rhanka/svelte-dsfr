<script lang="ts">
  import '@gouvfr//dist/scheme/scheme.css'
  import '@gouvfr//dist/core/core.css'
  import '@gouvfr//dist/component/navigation/navigation.css'

  import NavigationMenuLink from '$lib/Navigation/NavigationMenuLink.vue'

  export let title: string
  exprot let links: any = []
</script>

<div class="fr-col-12 fr-col-md-3">
  <h5 class="fr-mega-menu__category">
    <a
      class="fr-nav__link"
      href="#"
      on:click|preventDefault={}
    >
      { title }
    </a>
  </h5>
  <ul class="fr-mega-menu__list">
    {#each links as link, idx}
      <li class="fr-mega-menu__item">
        <NavigationMenuLink {link} />
      </li>
    {/each}
  </ul>
</div>