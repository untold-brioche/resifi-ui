<script lang="ts">
    import "./global.css";

    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header />

<main class="grow mx-auto w-full">
    <slot />
</main>

<Footer />
