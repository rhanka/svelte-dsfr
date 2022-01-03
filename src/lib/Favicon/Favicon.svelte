<script lang="ts">
  import faviconICO from '@gouvfr/dsfr/dist/favicon/favicon.ico'
  import faviconAPPLE from '@gouvfr/dsfr/dist/favicon/apple-touch-icon.png'
  import faviconSVG from '@gouvfr/dsfr/dist/favicon/favicon.svg?url'
</script>

<svelte:head>
  <link rel="apple-touch-icon" href={faviconAPPLE}>
  <link rel="icon" href={faviconSVG} type="image/svg+xml">
  <link rel="shortcut icon" href={faviconICO} type="image/x-icon">
</svelte:head>