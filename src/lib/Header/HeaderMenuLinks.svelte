<ul class="fr-links-group">
    {#each links as quickLink, index}
        <li>
            <HeaderMenuLink quickLink={quickLink}/>
        </li>
    {/each}
</ul>

<script lang="ts">
import '@gouvfr/dsfr/dist/scheme/scheme.css'
import '@gouvfr/dsfr/dist/core/core.css'
import '@gouvfr/dsfr/dist/component/link/link.css'

import HeaderMenuLink from '$lib/Header/HeaderMenuLink.svelte'

export let links: any = () => undefined;
</script>

<style>
</style>
