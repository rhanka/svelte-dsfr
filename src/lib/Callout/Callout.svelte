<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/callout/callout.css'

  export let icon: string

  import Icon from '@iconify/svelte'
</script>

<div class="fr-callout">
  <div
    class="fr-mt-n2w  fr-mb-2w  fr-ml-n4w"
  >
    {#if icon}
      <Icon
        icon={icon}
        color="var(--text-title-black)"
      />
    {/if}
  </div>

  <p class="fr-callout__title">
    <slot name="title">
      Titre somptueusement mis en avant
    </slot>
  </p>

  <p class="fr-callout__text">
    <slot name="content">
      Contenu admirablement mis en avant
    </slot>
  </p>
  <slot name="button">
  </slot>
  <!-- @slot Slot par défaut pour le contenu de la mise en avant. Sera dans `<div class="fr-callout">` -->
  <slot />
</div>
