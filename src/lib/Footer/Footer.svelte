<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/footer/footer.css'

  import Icon from '@iconify/svelte'
  import Logo from '$lib/Logo/Logo.svelte'
  import FooterPartners from '$lib/Footer/FooterPartners.svelte'

  export let a11yCompliance: string = 'non conforme'
  export let a11yComplianceLink: string = '/a11y'
  export let legalLink: string = '/mentions-legales'
  export let homeLink: string = '/'
  export let partners: any
  export let personalDataLink: string = '/donnees-personnelles'
  export let cookiesLink: string = '/cookies'
  export let logoText: string | string[] = ['République', 'Française']
  export let descText: string
  export let beforeMandatoryLinks: string[] = []
  export let afterMandatoryLinks: string[] = []

  const ecosystemLinks = [
    {
      label: 'legifrance.gouv.fr',
      href: 'https://legifrance.gouv.fr'
    },
    {
      label: 'gouvernement.fr',
      href: 'https://gouvernement.fr'
    },
    {
      label: 'service-public.fr',
      href: 'https://service-public.fr'
    },
    {
      label: 'data.gouv.fr',
      href: 'https://data.gouv.fr'
    }
  ]

  let mandatoryLinks = [
    {
      label: `Accessibilité : ${a11yCompliance}`,
      to: a11yComplianceLink
    },
    {
      label: 'Mentions légales',
      to: legalLink
    },
    {
      label: 'Données personnelles',
      to: personalDataLink
    },
    {
      label: 'Gestion des cookies',
      to: cookiesLink
    }
  ]

  let allLinks

  $: allLinks = [...beforeMandatoryLinks, ...mandatoryLinks, ...afterMandatoryLinks]
</script>

<footer id="footer" class="fr-footer" role="contentinfo">
  <div class="fr-footer__top">
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--start fr-grid-row--gutters">
        <slot name="footer-link-lists" />
      </div>
    </div>
  </div>
  <div class="fr-container">
    <div class="fr-footer__body">
      <div class="fr-footer__brand fr-enlarge-link">
        <a
          href={homeLink}
          rel={homeLink && homeLink.startsWith('http') ? 'external' : undefined}
          title="Retour à l’accueil"
        >
          <Logo logo-text={logoText} />
        </a>
      </div>
      <div class="fr-footer__content">
        <p class="fr-footer__content-desc">
          <slot name="description">
            {descText}
          </slot>
        </p>
        <ul class="fr-footer__content-list">
          {#each ecosystemLinks as link, index}
            <li class="fr-footer__content-item">
              <a
                class="fr-footer__content-link"
                href={link.href}
                rel={link.href && link.href.startsWith('http') ? 'external' : undefined}
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    {#if partners}
      <FooterPartners {partners} />
    {/if}
    <div class="fr-footer__bottom">
      <ul class="fr-footer__bottom-list">
        {#each allLinks as link, index}
          <li class="fr-footer__bottom-item">
            <a
              class="fr-footer__bottom-link"
              href={link.to}
              rel={link.to && link.to.startsWith('http') ? 'external' : undefined}
              data-testid={link.to}
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <div class="fr-footer__bottom-copy">
        <p>
          Sauf mention contraire, tous les textes de ce site sont sous
          <a
            class="fr-link-licence no-content-after"
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            target="_blank"
            rel="external"
          >
            licence etalab-2.0
            <Icon icon="ri:external-link-line" />
          </a>
        </p>
      </div>
    </div>
  </div>
</footer>

<style>
</style>
