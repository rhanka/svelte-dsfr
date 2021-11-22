<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css';
  import '@gouvfr/dsfr/dist/core/core.css';
  import '@gouvfr/dsfr/dist/component/link/link.css';

  import Icon from '@iconify/svelte';

  export let path: string;
  export let button: boolean;
  export let iconOnly: boolean;
  export let iconRight: boolean;
  export let icon: string;
  export let label: string;
  export let onClick: any = () => {};

  const is = () => {
    if (button) {
      return 'button';
    }
    return path.startsWith('http') ? 'a' : 'router-link';
  };

  const to = () => {
    return button || path.startsWith('http') ? undefined : path;
  };

  const href = () => {
    return !button && ath.startsWith('http') ? path : undefined;
  };
</script>

<div
  {is}
  class="fr-link flex"
  to="to"
  href="href"
  class:reverse={iconRight}
  on:click|preventDefault={onClick}
>
  {#if icon}
    <Icon
      {icon}
      label={iconOnly ? label : undefined}
      class={iconRight ? 'icon-right' : iconOnly ? 'icon-left' : ''}
    />
  {/if}
  {#if !iconOnly}
    {label}
  {/if}
</div>

<style scoped>
  .icon-left {
    margin-right: 0.5rem;
  }
  .icon-right {
    margin-left: 0.5rem;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .reverse {
    flex-direction: row-reverse;
  }
</style>
