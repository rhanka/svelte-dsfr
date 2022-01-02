<script lang="ts">
  import { goto } from '$app/navigation';

  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/link/link.css'

  import Icon from '@iconify/svelte'

  export let to: string
  export let button: boolean
  export let iconRight: boolean
  export let icon: string
  export let label: string
  export let onClick: any = () => {
    goto(to)
  }

</script>

{#if button}
  <button
    class="fr-btn"
    class:fr-link={to}
    class:reverse={iconRight}
    on:click|preventDefault={onClick}
  >
    {#if icon}
      <span
        class="icon"
        class:fr-ml-1v={label && iconRight}
        class:fr-mr-1v={label && !iconRight}
      >
        <Icon {icon}/>
      </span>
    {/if}
    {#if label}
      {label}
    {/if}
  </button>
{:else}
  <a
    href={to}
    class="fr-link"
    class:fr-row-reverse={iconRight}
    target={to.startsWith('http') ? '_blank' : ''}
  >
    {#if icon}
      <span
        class="fr-icon"
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
{/if}
