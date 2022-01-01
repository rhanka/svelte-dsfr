<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/navigation/navigation.css'

  import uuid from 'uuid-random'

  export let id: string = uuid()
  export let to: any
  export let text: string
</script>

<a
  class="fr-nav__link"
  href={to}
>
  { text }
</a>
