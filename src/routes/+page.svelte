<script lang="ts">
    import IoIosArrowForward from "svelte-icons/io/IoIosArrowForward.svelte";

    import Header from "$lib/components/Header.svelte";
    import globeImg from "$lib/images/globe.png";
</script>

<svelte:head>
    <title>Resifi</title>
</svelte:head>

<Header />

<section class="flex flex-col mt-10">
    <div class="mx-auto text-center relative">
        <div class="absolute -z-50 top-0 h-5/6 overflow-hidden">
            <img src={globeImg} alt="globe" />
        </div>
        <h1
            class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#757575] mt-32"
        >
            <div>Diverting E-Commerce</div>
            <div class="mt-3.5">Returns from the Landfill.</div>
        </h1>
        <p class="text-[#ABABAB] mt-4">
            We connect e-commerce companies with charities.
        </p>
        <div class="mt-7 flex justify-center">
            <a
                href="/dashboard"
                class="py-[1rem] px-6 rounded-full bg-[#DBDBDB] text-dark text-lg font-semibold flex gap-0.5 items-center"
            >
                <span>Get Started</span>
                <div class="h-4 w-4">
                    <IoIosArrowForward />
                </div>
            </a>
            <a
                href="/login"
                class="py-[1rem] px-6 rounded-full text-white text-lg font-bold flex gap-0.5 items-center"
            >
                <span>Learn More</span>
                <div class="h-4 w-4">
                    <IoIosArrowForward />
                </div>
            </a>
        </div>
    </div>
</section>
