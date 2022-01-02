<script lang="ts">
import '@gouvfr/dsfr/dist/scheme/scheme.css'
import '@gouvfr/dsfr/dist/core/core.css'
import '@gouvfr/dsfr/dist/component/navigation/navigation.css'

import NavigationItem from '$lib/Navigation/NavigationItem.svelte'
import NavigationMenuLink from '$lib/Navigation/NavigationMenuLink.svelte'
import NavigationMenu from '$lib/Navigation/NavigationMenu.svelte'
import NavigationMegaMenu from '$lib/Navigation/NavigationMegaMenu.svelte'

import uuid from 'uuid-random'

export let id: string = uuid()
export let label: string = 'Menu principal'
export let navItems: any = []
let expandedMenuId: string

$: navItemsWithId = navItems.map((navItem: any) => {
  return {...navItem, id: uuid()}
});

const toggle = (id) => {
  if (id === expandedMenuId) {
    expandedMenuId = undefined
    return
  }
  expandedMenuId = id
}

</script>

<nav
  id={id}
  class="fr-nav"
  role="navigation"
  aria-label={label}
>
  <ul class="fr-nav__list">
    <!-- @slot Slot par défaut pour le contenu de la liste. Sera dans `<ul class="fr-nav__list">` -->
    <slot />
    {#each navItemsWithId as navItem, idx}
      <NavigationItem>
        {#if navItem && navItem.to && navItem.text}
          <NavigationMenuLink
            {...navItem}
            on:click={toggle(navItem.id)}
          />
        {:else if navItem && navItem.title && navItem.links}
          <NavigationMenu
            {...navItem}
            expanded={navItem.id === expandedMenuId}
            onClickCallback={() => toggle(navItem.id)}
          />
        {:else if navItem && navItem.title && navItem.menus}
          <NavigationMegaMenu
            {...navItem}
            expanded={navItem.id === expandedMenuId}
            onClickCallback={() => toggle(navItem.id)}
          />
        {/if}
      </NavigationItem>
    {/each}
  </ul>
</nav>

