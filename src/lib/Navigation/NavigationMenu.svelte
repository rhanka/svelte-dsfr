<script lang="ts">
  import '@gouvfr//dist/scheme/scheme.css'
  import '@gouvfr//dist/core/core.css'
  import '@gouvfr//dist/component/navigation/navigation.css'

  import Icon from '@iconify/svelte'
  import NavigationMenuItem from '$lib/Navigation/NavigationMenuItem.svelte'
  import NavigationMenuLink from '$lib/Navigation/NavigationMenuLink.svelte'

  import uuid from 'uuid-random'

  export let id: string = uuid()
  export let title: string = "Mon beau menu"
  export let links: any = []
  export let expanded: boolean = false
  export let onClickCallback: any = () => { expanded = !expanded }

</script>

<button
  class="fr-nav__btn"
  aria-expanded={expanded}
  aria-controls={id}
  on:click={onClickCallback}
>
  <span>{{ title }}</span>
  <Icon
    icon="ri:arrow-drop-down-line"
  />
</button>
<div
  id={id}
  class="fr-collapse fr-menu"
  class:fr-collapse--expanded={expanded}
>
  <ul class="fr-menu__list">
    <!-- @slot Slot par défaut pour le contenu de l’item de liste. Sera dans `<ul class="fr-menu__list">` -->
    <slot />
    {#each links as link, idx}
      <NavigationMenuItem>
        <NavigationMenuLink {link} />
      </NavigationMenuItem>
    {/each}
  </ul>
</div>