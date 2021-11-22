<label
    class="fr-label"
    class:invisible={!labelVisible}
    for={id}
>
    {label}
</label>
<input
    {id}
    {type}
    class="fr-input"
    {placeholder}
    {value}
    on:input={handleInput}
>

<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/form/form.css'
  import '@gouvfr/dsfr/dist/component/link/link.css'
  import '@gouvfr/dsfr/dist/component/button/button.css'
  import '@gouvfr/dsfr/dist/component/input/input.css'

  import uuid from 'uuid-random';

  export let id: string = uuid();
  export let label: string = '';
  export let labelVisible: boolean;
  export let value: string = '';
  export let placeHolder: string = '';
  export let type: string = 'text';

  const handleInput = e => {
    value = type.match(/^(number|range)$/)
      ? +e.target.value
      : e.target.value;
  };
</script>

<style>
</style>
