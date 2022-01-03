<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
  import '@gouvfr/dsfr/dist/scheme/scheme.css'
  import '@gouvfr/dsfr/dist/core/core.css'
  import '@gouvfr/dsfr/dist/component/link/link.css'
  import '@gouvfr/dsfr/dist/component/modal/modal.css'
  import '@gouvfr/dsfr/dist/component/form/form.css'
  import '@gouvfr/dsfr/dist/component/radio/radio.css'

  import darkSVG from '@gouvfr/dsfr/dist/artwork/dark.svg?url'
  import lightSVG from '@gouvfr/dsfr/dist/artwork/light.svg?url'
  import systemSVG from '@gouvfr/dsfr/dist/artwork/system.svg?url'

  import { browser } from '$app/env';
  import { session } from '$app/stores'

  import { clickOutside } from '$lib/utils/clickOutside.ts'
  import SessionStorage from '$lib/utils/SessionStorage.svelte'

  $: if (browser && $session.theme) {
    document.documentElement.setAttribute("data-fr-theme", $session.theme)
    document.documentElement.setAttribute("data-fr-scheme", $session.theme)
  }

</script>

<SessionStorage/>

<dialog
  id="fr-theme-modal"
  class="fr-modal"
  class:fr-modal--opened={$session.displayParamsModal}
  role="dialog"
  aria-labelledby="fr-theme-modal-title"
  aria-modal="true"
>
  <div class="fr-container fr-container--fluid fr-container-md">
    <div class="fr-grid-row fr-grid-row--center">
      <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-modal__body"  use:clickOutside on:click-outside={() => $session.displayParamsModal = false}>
          <div class="fr-modal__header">
            <button
              class="fr-link--close fr-link"
              aria-controls="fr-theme-modal"
              on:click={() => $session.displayParamsModal = false}
            >
              Fermer
            </button>
          </div>
          <div class="fr-modal__content">
            <h1 id="fr-theme-modal-title" class="fr-modal__title">
                Paramètres d’affichage
            </h1>
            <div id="fr-display" class="fr-form-group fr-display">
              <div class="fr-form-group">
                <fieldset class="fr-fieldset">
                  <legend class="fr-fieldset__legend fr-text--regular" id='-legend'>
                    Choisissez un thème pour personnaliser l’apparence du site.
                  </legend>
                  <div class="fr-fieldset__content">
                    <div class="fr-radio-group fr-radio-rich">
                      <input value="light" bind:group={$session.theme} type="radio" id="fr-radios-theme-light" name="fr-radios-theme">
                      <label class="fr-label" for="fr-radios-theme-light">Thème clair
                      </label>
                      <div class="fr-radio-rich__img" data-fr-inject-svg>
                        <img src={lightSVG} alt="" />
                        <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
                      </div>
                    </div>
                    <div class="fr-radio-group fr-radio-rich">
                      <input value="dark" bind:group={$session.theme} type="radio" id="fr-radios-theme-dark" name="fr-radios-theme">
                      <label class="fr-label" for="fr-radios-theme-dark">Thème sombre
                      </label>
                      <div class="fr-radio-rich__img" data-fr-inject-svg>
                        <img src={darkSVG} alt="" />
                        <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
                      </div>
                    </div>
                    <div class="fr-radio-group fr-radio-rich">
                      <input value="system" bind:group={$session.theme} type="radio" id="fr-radios-theme-system" name="fr-radios-theme">
                      <label class="fr-label" for="fr-radios-theme-system">Système
                          <span class="fr-hint-text">Utilise les paramètres système.</span>
                      </label>
                      <div class="fr-radio-rich__img" data-fr-inject-svg>
                          <img src={systemSVG} alt="" />
                          <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>