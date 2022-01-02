<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/navigation/navigation.css'

  import uuid from 'uuid-random'

  export let id: string = uuid()
  export let active: boolean = false
</script>

<li
  id={id}
  class="fr-nav__item"
  aria-current={active ? 'page' : undefined}
>
  <!-- @slot Slot par défaut pour le contenu de l’item de liste. Sera dans `<li class="fr-nav__item">` -->
  <slot />
</li>
