<p
    class="fr-logo"
    class:fr-logo--sm={small && !large}
    class:fr-logo--lg={large && !small}
>
    {@html text}
</p>

<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css';
  import '@gouvfr/dsfr/dist/core/core.css';
  import '@gouvfr/dsfr/dist/component/logo/logo.css';

  export let small: boolean
  export let large: boolean
  export let logoText: string|string[] = ['République','Française']
  let text: String;

  $: text = logoText.join('<br>')
</script>

<style>
</style>
