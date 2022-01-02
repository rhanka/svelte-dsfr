
<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/link/link.css'

  import { session } from '$app/stores';

</script>

<button
  class="fr-link fr-fi-theme-fill fr-link--icon-left"
  aria-controls="fr-theme-modal"
  on:click={() => { $session.displayParamsModal = !$session.displayParamsModal }}
>
  Paramètres d'affichage
</button>