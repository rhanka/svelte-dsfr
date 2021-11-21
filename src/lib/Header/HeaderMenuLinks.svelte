<ul class="fr-links-group">
    {#each links as quickLink, index}
        <li>
            <HeaderMenuLink quickLink={quickLink}/>
        </li>
    {/each}
</ul>

<script lang="ts">
import HeaderMenuLink from '$lib/Header/HeaderMenuLink.svelte'

export let links: any = () => undefined;
</script>

<style>
</style>
