<script lang="ts">
    import logo from "$lib/images/logo.png";
    import toast, { Toaster } from "svelte-french-toast";

    let properEmail = "business@gmail.com";
    let properPassword = "power";

    let email = "";
    let password = "";

    const signIn = () => {
        if (email === properEmail && password === properPassword) {
            window.location.href = "/dashboard";
        } else {
            toast.error("Incorrect email or password");
        }
    };
</script>

<Toaster />
<div
    class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
>
    <img class="h-14 mb-6" src={logo} alt="logo" />

    <div
        class="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-[rgba(50,55,60,0.28)]"
    >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
                Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
                <div>
                    <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Your email</label
                    >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-800 border-zinc-700 placeholder-zinc-400 text-white outline-none"
                        placeholder="name@company.com"
                        bind:value={email}
                    />
                </div>
                <div>
                    <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Password</label
                    >
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-800 border-zinc-700 placeholder-zinc-400 text-white outline-none"
                        bind:value={password}
                    />
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            />
                        </div>
                        <div class="ml-3 text-sm">
                            <label
                                for="remember"
                                class="text-gray-500 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <a
                        href="/forgot-password"
                        class="text-sm font-medium text-secondary hover:underline"
                    >
                        Forgot password?
                    </a>
                </div>
                <button
                    on:click={signIn}
                    class="w-full text-dark bg-white font-medium rounded-lg text-sm px-5 py-3 text-center"
                >
                    Sign in
                </button>
                <p class="text-sm font-light text-[#ABABAB]">
                    Don't have an account yet? <a
                        href="/signup"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    </div>
</div>
