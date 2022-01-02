<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/navigation/navigation.css'

  import uuid from 'uuid-random'

  export let id: string = uuid()
  export let to: any
  export let label: string
  export let icon: string
  export let iconRight: boolean
</script>

<a
  href={to}
  class="fr-nav__link"
  class:reverse={iconRight}
  target={to.startsWith('http') ? '_blank' : ''}
>
  {#if icon}
    <span
      class="icon"
      class:fr-ml-1w={label && iconRight}
      class:fr-mr-1w={label && !iconRight}
    >
      <Icon {icon}/>
    </span>
  {/if}
  {#if label}
    {label}
  {/if}
</a>

<style scoped>
  .icon {
    margin-bottom: -0.25rem;
  }
  .reverse {
    flex-direction: row-reverse;
  }
</style>