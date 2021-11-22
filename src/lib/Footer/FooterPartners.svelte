<script lang="ts">
  export let mainPartner: any
  export let subPartners: any
  export let title: string = ''
</script>

<div class="fr-footer__partners">
  <h4 class="fr-footer__partners-title">
    {title}
  </h4>
  <div class="fr-footer__partners-logos">
    <div v-if="mainPartner" class="fr-footer__partners-main">
      <a
        class="fr-footer__partners-link"
        href={mainPartner.href}
        rel={mainPartner.href && mainPartner.href.startsWith('http') ? 'external' : undefined}
      >
        <img class="fr-footer__logo" src={mainPartner.logo} alt={mainPartner.name} />
      </a>
    </div>
    <div class="fr-footer__partners-sub">
      <ul>
        {#each subPartners as partner, idx}
          <li>
            <a
              class="fr-footer__partners-link"
              href={partner.href}
              rel={partner.href && partner.href.startsWith('http') ? 'external' : undefined}
            >
              <img class="fr-footer__logo" src={partner.logo} alt={partner.name} />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
