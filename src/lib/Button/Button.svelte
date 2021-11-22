<script lang="ts">
  export let disabled: boolean
  export let label: string
  export let secondary: boolean
  export let icon: string
  export let iconRight: boolean

  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/form/form.css'
  import '@gouvfr/dsfr/dist/component/link/link.css'
  import '@gouvfr/dsfr/dist/component/button/button.css'
</script>

<button
  class="fr-btn inline-flex"
  class:fr-btn--secondary={secondary}
  class:reverse={iconRight}
  {disabled}
  aria-disabled={disabled}
>
  {#if icon}
    <Icon icon="icon" class={iconRight ? 'icon-right' : 'icon-left'} />
  {/if}

  <span>
    {label}
    <slot />
  </span>
</button>

<style>
  .icon-left {
    margin-right: 0.5rem;
  }
  .icon-right {
    margin-left: 0.5rem;
  }

  .inline-flex {
    display: inline-flex;
    align-items: center;
  }

  .reverse {
    flex-direction: row-reverse;
  }
</style>
