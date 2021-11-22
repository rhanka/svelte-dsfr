<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css';
  import '@gouvfr/dsfr/dist/core/core.css';
  import '@gouvfr/dsfr/dist/component/form/form.css';
  import '@gouvfr/dsfr/dist/component/link/link.css';
  import '@gouvfr/dsfr/dist/component/button/button.css';
  import '@gouvfr/dsfr/dist/component/input/input.css';

  import uuid from 'uuid-random';
  import Icon from '@iconify/svelte';
  import Input from '$lib/Input/Input.svelte';
  import Button from '$lib/Button/Button.svelte';

  export let id: String = uuid();
  export let label: String = '';
  export let large: Boolean;
  export let buttonText: String = '';
  export let hideIcon: Boolean;
  export let labelVisible: Boolean;
  export let value: String = '';
  export let placeholder: String = 'Rechercher';
  export let onInputChange: any = () => undefined;
  export let onSearch: any = () => undefined;

  $: value && onInputChange(value);
</script>

<div class="fr-search-bar" class:fr-search-bar--lg={large}>
  <Input {id} type="search" {placeholder} bind:value {labelVisible} {label} />

  <Button title="Rechercher" on:click={onSearch}>
    <Icon class="fr-search-bar__icon" icon="ri:search-line" />
    <span class="fr-btn__text">
      {buttonText}
    </span>
  </Button>
</div>

<style>
</style>
