<script lang="ts">
    import logo from "$lib/images/logo.png";
    import IoIosArrowForward from "svelte-icons/io/IoIosArrowForward.svelte";
</script>

<header class="flex justify-between items-center px-16 py-14 text-white">
    <img src={logo} alt="Resifi Logo" class="h-[67px]" />

    <nav class="flex items-center gap-12 text-xl text-[#DBDBDB]">
        <a href="/">Company</a>
        <a href="/">Events</a>
        <a href="/">Contact</a>
    </nav>

    <a
        href="/login"
        class="py-[1.1rem] px-7 rounded-full bg-[#DBDBDB] text-dark text-xl font-bold flex gap-0.5 items-center"
    >
        <span>Get Started</span>
        <div class="h-4 w-4">
            <IoIosArrowForward />
        </div>
    </a>
</header>
