<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/navigation/navigation.css'

  import Icon from '@iconify/svelte'
  import NavigationMegaMenuCategory from '$lib/Navigation/NavigationMegaMenuCategory.svelte'

  import uuid from 'uuid-random'

  export let id: string = uuid()
  export let label: string
  export let description: string = ''
  export let link: any = { to: '#', text: 'Voir toute la rubrique' }
  export let menu: any = []
  export let expanded: boolean = false
  export let onClickCallback = () => { expanded = !expanded }

</script>

<button
  class="fr-nav__btn"
  aria-expanded={expanded}
  aria-controls={id}
  on:click={onClickCallback}
>
  { label }
</button>
<div
  id={id}
  class="fr-collapse fr-mega-menu"
  tabindex="-1"
  class:fr-collapse--expanded={expanded}
>
  <div class="fr-container">
    <button
      class="fr-link--close fr-link"
      aria-controls="mega-menu-695"
    >
      <Icon
        icon="ri:close-line"
      />
      Fermer
    </button>
    <div class="fr-grid-row fr-grid-row--gutters">
      <div class="fr-col-12 fr-mb-4v">
        <h4 class="fr-h4 fr-mb-2v">
          { title }
        </h4>
        <p class="fr-text--sm">
          { description }
          <!-- @slot Slot par défaut pour le contenu de la description du mega-menu. Sera dans `<p class="fr-text--sm">` -->
          <slot name="description" />
        </p>
        <a
          vi
          class="fr-link fr-link--icon-right"
          to={link.to}
        >
          { link.text }
          <Icon icon="ri-arrow-right-line" />
        </a>
      </div>
      <!-- @slot Slot par défaut pour le contenu du mega-menu. Sera dans `<div class="fr-grid-row fr-grid-row--gutters">` -->
      <slot />
      {#each menus as menu, idx}
        <NavigationMegaMenuCategory {...menu} />
      {/each}
    </div>
  </div>
</div>