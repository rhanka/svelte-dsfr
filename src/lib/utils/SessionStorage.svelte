<script lang="ts">
  import { browser } from '$app/env'
  import { session } from '$app/stores'
  import { onMount } from 'svelte'

  $: if (browser && $session.theme) {
    if (window.sessionStorage.getItem('theme') !== $session.theme) {
      window.sessionStorage.setItem('theme', $session.theme);
   }
  }

  onMount(() => {
    $session.theme = window.sessionStorage.getItem('theme')
  })
</script>
