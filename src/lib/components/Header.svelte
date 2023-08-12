<script lang="ts">
    import logo from "$lib/images/logo.png";
</script>

<header class="flex justify-between items-center p-[4.4rem] text-light-text">
    <img src={logo} alt="Resifi Logo" class="h-[67px]" />

    <nav class="flex items-center gap-8 font-bold text-xl">
        <a href="/">Company</a>
        <a href="/">Events</a>
        <a href="/">Contact</a>
    </nav>

    <a
        href="/login"
        class="py-[1.1rem] px-6 rounded-xl bg-gradient-to-r from-secondary to-primary text-xl font-bold tracking-wider"
    >
        Open Courses
    </a>
</header>
