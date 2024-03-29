<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/navigation/navigation.css'
  import '@gouvfr/dsfr/dist/component/modal/modal.css'
  import '@gouvfr/dsfr/dist/component/header/header.css'

  import Icon from '@iconify/svelte'
  import Logo from '$lib/Logo/Logo.svelte'
  import SearchBar from '$lib/SearchBar/SearchBar.svelte'
  import HeaderMenuLinks from '$lib/Header/HeaderMenuLinks.svelte'

  export let serviceTitle: string
  export let serviceDescription: string
  export let homeTo: string = '/'
  export let value: string = ''
  export let quickLinks: any
  export let showSearch: boolean
  export let displayParams: boolean
  export let logoText: string | string[]

  let menuOpened: boolean = false
  let searchModalOpened: boolean = false
  let modalOpened: boolean = false

  const hideModal = () => {
    modalOpened = false
    menuOpened = false
    searchModalOpened = false
  }
  const showModal = () => {
    modalOpened = true
  }

  const showMenu = () => {
    showModal()
    menuOpened = true
  }

  const showSearchModal = () => {
    showModal()
    searchModalOpened = true
  }
</script>

<header role="banner" class="fr-header">
  <div class="fr-header__body">
    <div class="fr-container">
      <div class="fr-header__body-row">
        <div class="fr-header__brand fr-enlarge-link">
          <div class="fr-header__brand-top">
            <div class="fr-header__logo">
              <Logo {logoText} data-testid="header-logo" />
            </div>
            {#if showSearch || (quickLinks && quickLinks.length)}
              <div class="fr-header__navbar">
                {#if showSearch}
                  <button
                    class="fr-btn--search fr-btn"
                    aria-controls="header-search"
                    aria-label="Recherche"
                    title="Recherche"
                    data-fr-opened={modalOpened}
                    on:click={showSearchModal}
                  >
                    <Icon icon="ri:search-line" />
                  </button>
                {/if}
                {#if (quickLinks && quickLinks.length) || $$slots.navigation}
                  <button
                    id="button-menu"
                    class="fr-btn--menu fr-btn"
                    data-fr-opened={modalOpened}
                    aria-controls="header-navigation"
                    aria-haspopup="menu"
                    aria-label="Menu"
                    title="Menu"
                    data-testid="open-menu-btn"
                    on:click={showMenu}
                  >
                    <Icon icon="ri:menu-fill" />
                  </button>
                {/if}
              </div>
            {/if}
          </div>
          {#if serviceTitle}
            <div class="fr-header__service">
              <a
                href={homeTo}
                title={`Accueil - ${serviceTitle}`}
                rel={homeTo.startsWith('http') ? 'external' : undefined}
              >
                <p class="fr-header__service-title">
                  {serviceTitle}
                </p>
              </a>
              {#if serviceDescription}
                <p class="fr-header__service-tagline">
                  {serviceDescription}
                </p>
              {/if}
            </div>
          {/if}
        </div>
        <div class="fr-header__tools">
          {#if quickLinks && quickLinks.length}
            <div class="fr-header__tools-links">
              {#if !menuOpened}
                <HeaderMenuLinks links={quickLinks} displayParams={displayParams}/>
              {/if}
            </div>
          {/if}
          {#if showSearch}
            <div class="fr-header__search fr-modal">
              <SearchBar blind:value={value} style="justify-content: flex-end" />
            </div>
          {/if}
        </div>
      </div>
      {#if showSearch || (quickLinks && quickLinks.length)}
        <div
          id="header-navigation"
          class="fr-header__menu fr-modal"
          class:fr-modal--opened={modalOpened}
          aria-labelledby="button-menu"
        >
          <div class="fr-container">
            <button
              class="fr-link--close fr-link"
              aria-controls="header-navigation"
              data-testid="close-modal-btn"
              on:click={hideModal}
            >
              Fermer
            </button>
            <div class="fr-header__menu-links">
              {#if menuOpened}
                <HeaderMenuLinks links={quickLinks} />
              {/if}
            </div>
            {#if searchModalOpened}
              <div class="flex justify-center items-center">
                <SearchBar blind:value={value} style="justify-content: flex-end" />
              </div>
            {/if}
            <slot name="navigation"/>
          </div>
        </div>
      {/if}
    </div>
  </div>
</header>

<style>
</style>
