
 <script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/link/link.css'
  import '@gouvfr/dsfr/dist/component/card/card.css'

  export let imgSrc: string
  export let to: string
  export let altImg: string = ''
  export let noArrow: boolean
  export let horizontal: boolean

  import { goto } from '$app/navigation'

</script>


<div
  class="fr-card fr-enlarge-link"
  class:fr-card--horizontal={horizontal}
  data-testid="fr-card"
  on:click|preventDefault={() => to && goto(to)}
>
  <div class="fr-card__body">
    <h4
      ref="title"
      class="fr-card__title"
    >
      {#if to}
        <a
          href={to}
          class="fr-card__link"
        >
          <slot name="title">
            Simple title
          </slot>
        </a>
      {:else}
        <slot name="title">
          Simple title
        </slot>
      {/if}
    </h4>
    <p class="fr-card__desc">
      <slot name="description">
        Simple description
      </slot>
    </p>
    {#if $$slots.detail}
      <p class="fr-card__detail">
        <slot name="detail"></slot>
      </p>
    {/if}
  <!--
    <v-icon
      v-if="!noArrow"
      class="fr-card__arrow"
      name="ri-arrow-right-line"
    /> -->
  </div>
  {#if imgSrc}
    <div class="fr-card__img">
      <img
        src={imgSrc}
        class="fr-responsive-img"
        alt={altImg}
        data-testid="card-img"
      >
      <!-- L'alternative de l'image (attribut alt) doit à priori rester vide car l'image est illustrative
        et ne doit pas être restituée aux technologies d’assistance. Vous pouvez toutefois remplir l'alternative si vous
        estimez qu'elle apporte une information essentielle à la compréhension du contenu non présente dans le texte -->
    </div>
  {/if}
</div>
