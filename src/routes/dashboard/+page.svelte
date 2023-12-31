<script lang="ts">
    import logo from "$lib/images/logo.png";
    import IoIosLogOut from "svelte-icons/io/IoIosLogOut.svelte";
    import charityImg from "$lib/images/charity.png";
    import { onMount } from "svelte";

    const api = "https://arrive-sake-queue-pulling.trycloudflare.com";

    interface Donation {
        organization: string;
        item: string;
        date: number;
        amount: string;
    }

    let donations: Donation[] = [];
    let totalTaxRebates: number = 0;
    let distanceSaved: number = 0;

    const getDonations = async () => {
        const res = await fetch(`${api}/business/1/inventory`);

        const data = await res.json();

        data.items.forEach(async (item) => {
            const res = await fetch(`${api}/charity/${item.charity_id}`);
            const charity = await res.json();

            donations = [
                ...donations,
                {
                    organization: charity.name,
                    item: item.item.name,
                    date: item.create_date,
                    amount: item.money_saved,
                },
            ];
        });
    };

    const getSavings = async () => {
        const res = await fetch(`${api}/business/1/savings`);
        const data = await res.json();

        totalTaxRebates = data.money_saved;
        distanceSaved = data.distance_saved;
    };

    onMount(async () => {
        await getDonations();
        await getSavings();
    });
</script>

<aside class="fixed inset-y-0 left-0 text-white px-4 py-6">
    <div class="flex flex-col justify-between h-full">
        <div class="grow">
            <div class="px-4 py-6 text-center">
                <img src={logo} alt="Resifi Logo" class="h-[67px]" />
            </div>
            <div class="p-4">
                <ul class="space-y-1.5">
                    <li
                        class="bg-primary py-3.5 px-4 text-white rounded-lg font-bold items-center flex gap-4"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="dashboard_svgrepo.com">
                                <g id="Group 2">
                                    <path
                                        id="Vector"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.83509 9.17653H4.16497C3.62645 9.1717 3.10821 9.40043 2.72427 9.81238C2.34032 10.2243 2.12211 10.7858 2.11768 11.3732V19.687C2.12764 20.9098 3.04406 21.8926 4.16497 21.8823H7.83509C8.37357 21.8872 8.89186 21.6585 9.27583 21.2465C9.65979 20.8346 9.87798 20.2731 9.88238 19.6856V11.3732C9.87798 10.7858 9.65979 10.2243 9.27583 9.81238C8.89186 9.40043 8.37357 9.1717 7.83509 9.17653Z"
                                        stroke="#F2F2F2"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        id="Vector_2"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.83509 1.41249H4.16497C3.0666 1.38342 2.15079 2.20817 2.11768 3.25623V4.50844C2.15079 5.5565 3.0666 6.38126 4.16497 6.35217H7.83509C8.93341 6.38126 9.84925 5.5565 9.88238 4.50844V3.25623C9.84925 2.20817 8.93341 1.38342 7.83509 1.41249Z"
                                        stroke="#F2F2F2"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        id="Vector_3"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15.4592 13.4117H19.128C19.6667 13.4166 20.1853 13.2007 20.5695 12.8117C20.9537 12.4225 21.1722 11.8921 21.1766 11.337V3.48645C21.1722 2.93163 20.954 2.40135 20.57 2.01227C20.1861 1.6232 19.6678 1.4072 19.1293 1.41182H15.4592C14.9207 1.4072 14.4024 1.6232 14.0184 2.01227C13.6345 2.40135 13.4163 2.93163 13.4119 3.48645V11.337C13.4163 11.8918 13.6345 12.4221 14.0184 12.8111C14.4024 13.2002 14.9207 13.4162 15.4592 13.4117Z"
                                        stroke="#F2F2F2"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        id="Vector_4"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15.4592 21.8815H19.128C20.2268 21.9155 21.1434 20.9727 21.1766 19.7743V18.3433C21.1434 17.1455 20.2276 16.203 19.1293 16.2361H15.4592C14.3608 16.203 13.445 17.1455 13.4119 18.3433V19.7729C13.4442 20.9713 14.3603 21.9146 15.4592 21.8815Z"
                                        stroke="#F2F2F2"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                            </g>
                        </svg>

                        <span>Dashboard</span>
                    </li>
                    <li
                        class="py-3.5 px-4 text-[#ABABAB] rounded-lg flex gap-4 items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="27"
                            viewBox="0 0 21 27"
                            fill="none"
                        >
                            <path
                                d="M14.8448 6.11538C14.8448 8.66439 12.7784 10.7308 10.2294 10.7308C7.68037 10.7308 5.61399 8.66439 5.61399 6.11538C5.61399 3.56638 7.68037 1.5 10.2294 1.5C12.7784 1.5 14.8448 3.56638 14.8448 6.11538Z"
                                stroke="#ABABAB"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M1 23.4917C1.08653 18.4685 5.18552 14.4231 10.2294 14.4231C15.2733 14.4231 19.3724 18.4687 19.4588 23.492C16.6492 24.7813 13.5234 25.5 10.2298 25.5C6.93583 25.5 3.8098 24.7811 1 23.4917Z"
                                stroke="#ABABAB"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>Your Account</span>
                    </li>
                    <li
                        class="py-3.5 px-4 text-[#ABABAB] rounded-lg flex gap-4 items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                        >
                            <path
                                d="M3 12.999C3 18.5218 7.47715 22.999 13 22.999C18.5228 22.999 23 18.5218 23 12.999M3 12.999C3 7.47612 7.47715 2.99897 13 2.99897C18.5228 2.99897 23 7.47612 23 12.999M3 12.999L0.999999 12.999M23 12.999L25 12.999M23 12.999L13 12.999M1.72341 17.1032L3.6028 16.4192M22.3967 9.57877L24.276 8.89473M3.80729 20.7132L5.33938 19.4277M20.6603 6.57192L22.1924 5.28634M6.99987 23.3923L7.99987 21.6603M17.9999 4.33975L18.9999 2.60769M10.9161 24.8176L11.2634 22.848M14.7364 3.15187L15.0837 1.18225M15.0837 24.8177L14.7364 22.8481M11.2634 3.15192L10.9161 1.18231M18.9999 23.3921L17.9999 21.66M6.99993 2.60749L13 12.999M22.1926 20.7124L20.6605 19.4268M5.33958 6.57109L3.80749 5.28552M24.2764 17.1034L22.397 16.4194M3.60313 9.57897L1.72374 8.89493M13 12.999L8 21.6592"
                                stroke="#ABABAB"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>Settings</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="p-4 flex items-center gap-5">
            <div class="h-16 w-16">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 74 74"
                    fill="none"
                >
                    <path
                        d="M36.9999 0C16.5668 0 0 16.5601 0 36.9959C0 49.5882 6.28648 60.7049 15.889 67.3881C17.7074 61.056 22.2231 56.2477 28.3753 53.9213C27.1727 55.3331 28.506 65.6659 30.4791 64.2776L33.7395 61.9898L36.9914 59.6936L36.777 59.5428L33.7398 57.4058L29.02 53.8975C28.956 53.8483 28.8842 53.81 28.8077 53.7843C28.7947 53.7798 28.7821 53.7774 28.7694 53.7744L28.6782 53.8066C28.9933 53.6925 29.3111 53.5858 29.6312 53.4865C29.7215 53.4582 29.811 53.429 29.9019 53.4016C30.5242 53.2158 31.1538 53.0557 31.7892 52.9215C31.8847 52.9014 31.9813 52.8833 32.0777 52.8643C32.4192 52.7964 32.762 52.7354 33.106 52.6815C33.3396 52.6454 33.5751 52.6126 33.8114 52.5828C33.9129 52.5701 34.0135 52.556 34.1156 52.5442C34.4534 52.505 34.792 52.4724 35.1312 52.4463H38.8781C39.219 52.4719 39.5559 52.5057 39.8908 52.5439C39.9962 52.556 40.0994 52.5704 40.2042 52.584C40.5516 52.628 40.898 52.6791 41.2433 52.7372C41.4701 52.7758 41.695 52.8176 41.9187 52.8619C42.0208 52.8821 42.1235 52.9014 42.2249 52.9227C42.5369 52.9887 42.8467 53.0592 43.1526 53.1369L43.1773 53.1429C43.4887 53.2224 43.7958 53.3088 44.1002 53.4001C44.1972 53.429 44.2932 53.4603 44.3899 53.4907C44.601 53.5569 44.8105 53.625 45.0183 53.6967C45.1243 53.7334 45.2291 53.7705 45.3339 53.8084C45.295 53.7942 45.2556 53.7807 45.2164 53.7668C45.2101 53.7677 45.2035 53.7705 45.1972 53.772C45.1168 53.7891 45.0306 53.8289 44.9379 53.8981L40.2521 57.4065L37.2061 59.5437L36.9914 59.6936L43.504 64.2782C45.4901 65.6755 46.8075 55.1937 45.5594 53.8942C51.748 56.2091 56.2917 61.0289 58.1182 67.3842C67.7165 60.7003 74 49.5858 74 36.9968C73.9997 16.5601 57.4329 0 36.9999 0ZM36.9999 52.4379C27.574 52.4379 19.9019 44.9497 19.5941 35.5974C19.5836 35.5908 19.5731 35.5854 19.5625 35.5788C19.2051 28.8979 22.6591 23.7511 27.0607 20.7102C27.1423 20.6532 27.223 20.5945 27.3055 20.5391C27.3886 20.4834 27.4732 20.4319 27.5569 20.378C27.7132 20.2771 27.8691 20.1756 28.0287 20.0796C28.1853 19.985 28.3437 19.8968 28.5018 19.8076C28.5716 19.7685 28.6397 19.7266 28.7101 19.6884C31.2168 18.3146 33.9018 17.5897 36.3013 17.6108C36.5331 17.6018 36.7653 17.593 36.9993 17.593C37.2233 17.593 37.4455 17.6015 37.6677 17.6099C39.5863 17.5966 41.6857 18.0574 43.7305 18.9425C45.536 19.7005 47.2008 20.7577 48.6547 22.0695C52.1915 25.1833 54.7277 29.8104 54.4194 35.5788L54.405 35.5872C54.1032 44.944 46.4287 52.4379 36.9999 52.4379Z"
                        fill="#AA92E5"
                    />
                    <path
                        d="M37.6677 17.6099C37.4455 17.6015 37.2233 17.593 36.9993 17.593C36.7653 17.593 36.5331 17.6018 36.3013 17.6108C36.528 17.6129 36.7532 17.6204 36.9742 17.6358C37.2053 17.6198 37.4361 17.6112 37.6677 17.6099ZM43.7305 18.9425C45.5247 19.7221 47.1861 20.7771 48.6547 22.0695C47.2008 20.7577 45.536 19.7005 43.7305 18.9425ZM34.1273 27.9571C30.7805 33.8327 25.1095 39.0389 19.5941 35.5974C19.9019 44.9497 27.574 52.4379 36.9999 52.4379C46.4287 52.4379 54.1032 44.944 54.405 35.5872C49.7983 38.4625 37.7138 34.2974 34.1273 27.9571Z"
                        fill="#FCE9EA"
                    />
                    <path
                        d="M45.1972 53.772C45.2035 53.7705 45.2101 53.7677 45.2164 53.7668C45.2556 53.7807 45.295 53.7942 45.3339 53.8084C45.2291 53.7705 45.1243 53.7334 45.0183 53.6967C45.0794 53.7178 45.1396 53.7395 45.2005 53.7608L45.1972 53.772ZM45.5594 53.8942C46.8075 55.1937 45.4901 65.6755 43.504 64.2782L36.9914 59.6936L33.7395 61.9898L30.4791 64.2776C28.506 65.6659 27.1727 55.3331 28.3753 53.9213C22.2231 56.2477 17.7074 61.056 15.889 67.3881C21.8765 71.5556 29.1524 74 36.9999 74C44.8506 74 52.1292 71.5544 58.1182 67.3842C56.2917 61.0289 51.748 56.2091 45.5594 53.8942ZM28.9841 53.6982C28.8815 53.7334 28.78 53.7699 28.6782 53.8066L28.7694 53.7744C28.7821 53.7774 28.7947 53.7798 28.8077 53.7843L28.8002 53.7632C28.8616 53.7416 28.9224 53.7196 28.9841 53.6982Z"
                        fill="#9B70E2"
                    />
                    <path
                        d="M36.9998 59.5482C36.9248 59.5482 36.8514 59.5446 36.777 59.5428L36.9914 59.6936L37.2061 59.5437C37.1378 59.5455 37.0688 59.5482 36.9998 59.5482Z"
                        fill="#9B70E2"
                    />
                    <path
                        d="M37.2061 59.5437L40.2521 57.4065L44.9379 53.8981C45.0306 53.8289 45.1168 53.7891 45.1972 53.772L45.2005 53.7608C45.1396 53.7395 45.0794 53.7178 45.0183 53.6967C44.8105 53.625 44.601 53.5569 44.3899 53.4907C44.2932 53.4603 44.1972 53.429 44.1002 53.4001C43.7958 53.3088 43.4887 53.2224 43.1773 53.1429L43.1526 53.1369C42.8467 53.0592 42.5369 52.9887 42.2249 52.9227C42.1235 52.9014 42.0208 52.8821 41.9187 52.8619C41.5794 52.7947 41.2388 52.7337 40.8971 52.6803C40.6666 52.6447 40.4356 52.613 40.2042 52.584C40.0994 52.5704 39.9962 52.556 39.8908 52.5439C39.5539 52.5048 39.2163 52.4723 38.8781 52.4463H35.1312C34.792 52.4724 34.4534 52.505 34.1156 52.5442C34.0135 52.556 33.9129 52.5701 33.8114 52.5828C33.5751 52.6126 33.3396 52.6454 33.106 52.6815C32.762 52.7354 32.4192 52.7964 32.0777 52.8643C31.9813 52.8833 31.8847 52.9014 31.7892 52.9215C31.1538 53.0557 30.5242 53.2158 29.9019 53.4016C29.811 53.429 29.7215 53.4582 29.6312 53.4865C29.4138 53.5545 29.1976 53.6241 28.9841 53.6982C28.9224 53.7196 28.8616 53.7416 28.8002 53.7632L28.8077 53.7843C28.8745 53.8054 28.945 53.8418 29.02 53.8975L33.7398 57.4058L36.777 59.5428C36.8514 59.5446 36.9248 59.5482 36.9998 59.5482C37.0688 59.5482 37.1378 59.5455 37.2061 59.5437Z"
                        fill="#FEFEFE"
                    />
                    <path
                        d="M34.1273 27.9571C37.7138 34.2974 49.7983 38.4625 54.405 35.5872L54.4194 35.5788C54.7277 29.8104 52.1915 25.1833 48.6547 22.0695C47.1861 20.7771 45.5247 19.7221 43.7305 18.9425C41.6857 18.0574 39.5863 17.5966 37.6677 17.6099C37.4337 17.6114 37.2028 17.6198 36.9742 17.6358C37.5731 19.7691 36.3735 24.0137 34.1273 27.9571Z"
                        fill="#6784ED"
                    />
                    <path
                        d="M34.1273 27.9571C36.3735 24.0137 37.5731 19.7691 36.9742 17.6358C36.7504 17.6206 36.5256 17.6123 36.3013 17.6108C33.9018 17.5897 31.2168 18.3146 28.7101 19.6884C28.6397 19.7266 28.5716 19.7685 28.5018 19.8076C28.3437 19.8968 28.1853 19.985 28.0287 20.0796C27.8691 20.1756 27.7132 20.2771 27.5569 20.378C27.4732 20.4319 27.3886 20.4834 27.3055 20.5391C27.223 20.5945 27.1423 20.6532 27.0607 20.7102C22.6591 23.7511 19.2051 28.8979 19.5625 35.5788C19.5731 35.5854 19.5836 35.5908 19.5941 35.5974C25.1095 39.0389 30.7805 33.8327 34.1273 27.9571Z"
                        fill="#83A2F0"
                    />
                </svg>
            </div>
            <div>
                <h3 class="text-white font-bold">Blake Jameson</h3>
                <p class="text-[#ABABAB] text-sm">@blake.jameson12</p>
            </div>
            <div class="h-7 w-7 text-[#ABABAB]">
                <IoIosLogOut />
            </div>
        </div>
    </div>
</aside>

<section class="ml-60 relative h-full overflow-hidden">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="912"
        height="1009"
        viewBox="0 0 912 1009"
        fill="none"
        class="absolute top-0 right-0"
    >
        <g filter="url(#filter0_f_75_4)">
            <path
                d="M736.82 509L500 186.364L610.18 -55.8525L698.469 327.098L736.82 186.364L942 131.793L736.82 509Z"
                fill="#AA92E5"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_75_4"
                x="0"
                y="-555.852"
                width="1442"
                height="1564.85"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                <feGaussianBlur
                    stdDeviation="250"
                    result="effect1_foregroundBlur_75_4"
                />
            </filter>
        </defs>
    </svg>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1032"
        height="641"
        viewBox="0 0 1032 641"
        fill="none"
        class="absolute bottom-0 left-0"
    >
        <g filter="url(#filter0_f_75_3)">
            <path
                d="M609.931 725L581.84 557.434L631 494.157L581.84 401H401L471.814 604.306L536.776 685.745L488.201 665.825V725H609.931Z"
                fill="#92A9E5"
            />
            <path
                d="M609.931 725L581.84 557.434L631 494.157L581.84 401H401L471.814 604.306L536.776 685.745L488.201 665.825V725H609.931Z"
                stroke="black"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_75_3"
                x="0.296387"
                y="0.5"
                width="1031.3"
                height="1125"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                <feGaussianBlur
                    stdDeviation="200"
                    result="effect1_foregroundBlur_75_3"
                />
            </filter>
        </defs>
    </svg>
    <div class="px-6 py-8">
        <div class="max-w-2xl ml-24 mt-16">
            <h1 class="text-5xl font-bold mb-3 text-white">
                Welcome Back Blake!
            </h1>
            <div class="text-[#ABABAB] text-lg">
                Make sure to check your most recent donations.
            </div>

            <hr class="my-10 border-primary border-[1.5px] w-1/2" />

            <div class="mb-10">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-xl font-bold mb-1 text-white">
                            Account Statistics
                        </h2>
                        <p class="text-[#525252] text-sm mb-6">
                            An overview of your donations
                        </p>
                    </div>
                    <button
                        class="py-2.5 px-5 text-[#ABABAB] flex gap-2 bg-[rgba(50,55,60,0.23)] rounded-lg"
                    >
                        <span>Last Week</span>
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Union">
                                <path
                                    d="M11.3077 11.3077C11.3077 11.7538 10.9461 12.1154 10.5 12.1154C10.0539 12.1154 9.69231 11.7538 9.69231 11.3077C9.69231 10.8616 10.0539 10.5 10.5 10.5C10.9461 10.5 11.3077 10.8616 11.3077 11.3077Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M5.65385 14.5385C6.09992 14.5385 6.46154 14.1768 6.46154 13.7308C6.46154 13.2847 6.09992 12.9231 5.65385 12.9231C5.20777 12.9231 4.84615 13.2847 4.84615 13.7308C4.84615 14.1768 5.20777 14.5385 5.65385 14.5385Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M6.46154 16.1538C6.46154 16.5999 6.09992 16.9615 5.65385 16.9615C5.20777 16.9615 4.84615 16.5999 4.84615 16.1538C4.84615 15.7078 5.20777 15.3462 5.65385 15.3462C6.09992 15.3462 6.46154 15.7078 6.46154 16.1538Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M8.07692 14.5385C8.523 14.5385 8.88461 14.1768 8.88461 13.7308C8.88461 13.2847 8.523 12.9231 8.07692 12.9231C7.63085 12.9231 7.26923 13.2847 7.26923 13.7308C7.26923 14.1768 7.63085 14.5385 8.07692 14.5385Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M8.88461 16.1538C8.88461 16.5999 8.523 16.9615 8.07692 16.9615C7.63085 16.9615 7.26923 16.5999 7.26923 16.1538C7.26923 15.7078 7.63085 15.3462 8.07692 15.3462C8.523 15.3462 8.88461 15.7078 8.88461 16.1538Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M10.5 14.5385C10.9461 14.5385 11.3077 14.1768 11.3077 13.7308C11.3077 13.2847 10.9461 12.9231 10.5 12.9231C10.0539 12.9231 9.69231 13.2847 9.69231 13.7308C9.69231 14.1768 10.0539 14.5385 10.5 14.5385Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M11.3077 16.1538C11.3077 16.5999 10.9461 16.9615 10.5 16.9615C10.0539 16.9615 9.69231 16.5999 9.69231 16.1538C9.69231 15.7078 10.0539 15.3462 10.5 15.3462C10.9461 15.3462 11.3077 15.7078 11.3077 16.1538Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M12.9231 14.5385C13.3692 14.5385 13.7308 14.1768 13.7308 13.7308C13.7308 13.2847 13.3692 12.9231 12.9231 12.9231C12.477 12.9231 12.1154 13.2847 12.1154 13.7308C12.1154 14.1768 12.477 14.5385 12.9231 14.5385Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M13.7308 16.1538C13.7308 16.5999 13.3692 16.9615 12.9231 16.9615C12.477 16.9615 12.1154 16.5999 12.1154 16.1538C12.1154 15.7078 12.477 15.3462 12.9231 15.3462C13.3692 15.3462 13.7308 15.7078 13.7308 16.1538Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M15.3462 14.5385C15.7922 14.5385 16.1538 14.1768 16.1538 13.7308C16.1538 13.2847 15.7922 12.9231 15.3462 12.9231C14.9001 12.9231 14.5385 13.2847 14.5385 13.7308C14.5385 14.1768 14.9001 14.5385 15.3462 14.5385Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M13.7308 11.3077C13.7308 11.7538 13.3692 12.1154 12.9231 12.1154C12.477 12.1154 12.1154 11.7538 12.1154 11.3077C12.1154 10.8616 12.477 10.5 12.9231 10.5C13.3692 10.5 13.7308 10.8616 13.7308 11.3077Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M15.3462 12.1154C15.7922 12.1154 16.1538 11.7538 16.1538 11.3077C16.1538 10.8616 15.7922 10.5 15.3462 10.5C14.9001 10.5 14.5385 10.8616 14.5385 11.3077C14.5385 11.7538 14.9001 12.1154 15.3462 12.1154Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.84615 0C5.29223 0 5.65385 0.361616 5.65385 0.807692V2.42308H15.3462V0.807692C15.3462 0.361616 15.7078 0 16.1538 0C16.5999 0 16.9615 0.361616 16.9615 0.807692V2.42308H17.7692C19.5535 2.42308 21 3.86954 21 5.65385V17.7692C21 19.5535 19.5535 21 17.7692 21H3.23077C1.44646 21 0 19.5535 0 17.7692V5.65385C0 3.86954 1.44646 2.42308 3.23077 2.42308H4.03846V0.807692C4.03846 0.361616 4.40008 0 4.84615 0ZM19.3846 9.69231C19.3846 8.80016 18.6614 8.07692 17.7692 8.07692H3.23077C2.33862 8.07692 1.61538 8.80016 1.61538 9.69231V17.7692C1.61538 18.6614 2.33862 19.3846 3.23077 19.3846H17.7692C18.6614 19.3846 19.3846 18.6614 19.3846 17.7692V9.69231Z"
                                    fill="#8E79BF"
                                />
                            </g>
                        </svg>
                    </button>
                </div>

                <div
                    class="p-6 bg-[rgba(50,55,60,0.28)] rounded-lg flex items-stretch"
                >
                    <div>
                        <h3 class="mb-5 text-lg tracking-tight text-[#ABABAB]">
                            Total Tax-Rebates (USD)
                        </h3>
                        <div class="text-6xl text-white font-bold mb-5">
                            ${totalTaxRebates}
                        </div>
                        <div
                            class="mb-3 tracking-tight text-lg flex gap-1.5 items-center"
                        >
                            <span class="text-[#ABABAB]">vs. last week</span>
                            <span class="text-white">20%</span>
                            <div class="h-5 w-5">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        id="Subtract"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M20.7957 3.79572C16.0469 -0.953143 8.34743 -0.953143 3.59857 3.79572C-1.15029 8.54458 -1.15029 16.244 3.59857 20.9929C8.34743 25.7417 16.0469 25.7417 20.7957 20.9929C25.5446 16.244 25.5446 8.54458 20.7957 3.79572ZM16.4397 9.08715C16.4397 8.83907 16.3411 8.60114 16.1657 8.42572C15.9903 8.2503 15.7524 8.15175 15.5043 8.15175H10.2129C9.69625 8.15175 9.27746 8.57054 9.27746 9.08715C9.27746 9.60376 9.69625 10.0226 10.2129 10.0226L13.246 10.0226L8.22857 15.04C7.86327 15.4053 7.86327 15.9976 8.22857 16.3629C8.59387 16.7282 9.18613 16.7282 9.55143 16.3629L14.5689 11.3454V14.3786C14.5689 14.8952 14.9877 15.314 15.5043 15.314C16.0209 15.314 16.4397 14.8952 16.4397 14.3786L16.4397 9.08715Z"
                                        fill="#62B149"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="h-100 border-l mx-16 my-3 border-[#2D2D2D]" />
                    <div>
                        <h3 class="mb-5 text-lg tracking-tight text-[#ABABAB]">
                            Distance Saved
                        </h3>
                        <div class="text-6xl text-white font-bold mb-5">
                            {Math.ceil(distanceSaved)}km
                        </div>
                        <div
                            class="mb-3 tracking-tight text-lg flex gap-1.5 items-center"
                        >
                            <span class="text-[#ABABAB]">vs. last week</span>
                            <span class="text-white">20%</span>
                            <div class="h-5 w-5">
                                <svg
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        id="Subtract"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.4543 22.4543C27.5085 17.4001 27.5085 9.20562 22.4543 4.15142C17.4001 -0.90277 9.20561 -0.902772 4.15142 4.15142C-0.902778 9.20562 -0.902778 17.4001 4.15142 22.4543C9.20561 27.5085 17.4001 27.5085 22.4543 22.4543ZM16.8226 17.8182C17.0867 17.8182 17.3399 17.7133 17.5266 17.5266C17.7133 17.3399 17.8182 17.0867 17.8182 16.8226L17.8182 11.191C17.8182 10.6412 17.3725 10.1954 16.8226 10.1954C16.2728 10.1954 15.8271 10.6412 15.8271 11.191L15.8271 14.4192L10.487 9.07912C10.0982 8.69033 9.4679 8.69033 9.07911 9.07912C8.69033 9.4679 8.69033 10.0982 9.07911 10.487L14.4192 15.8271L11.191 15.8271C10.6412 15.8271 10.1954 16.2728 10.1954 16.8226C10.1954 17.3725 10.6412 17.8182 11.191 17.8182L16.8226 17.8182Z"
                                        fill="#E06E6F"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-xl font-bold mb-1 text-white">
                            Recent Donations
                        </h2>
                        <p class="text-[#525252] text-sm mb-6">
                            All currency denominations are USD
                        </p>
                    </div>
                    <button
                        class="py-2.5 px-5 text-[#ABABAB] flex gap-2 bg-[rgba(50,55,60,0.23)] rounded-lg"
                    >
                        <span>Last Week</span>
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Union">
                                <path
                                    d="M11.3077 11.3077C11.3077 11.7538 10.9461 12.1154 10.5 12.1154C10.0539 12.1154 9.69231 11.7538 9.69231 11.3077C9.69231 10.8616 10.0539 10.5 10.5 10.5C10.9461 10.5 11.3077 10.8616 11.3077 11.3077Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M5.65385 14.5385C6.09992 14.5385 6.46154 14.1768 6.46154 13.7308C6.46154 13.2847 6.09992 12.9231 5.65385 12.9231C5.20777 12.9231 4.84615 13.2847 4.84615 13.7308C4.84615 14.1768 5.20777 14.5385 5.65385 14.5385Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M6.46154 16.1538C6.46154 16.5999 6.09992 16.9615 5.65385 16.9615C5.20777 16.9615 4.84615 16.5999 4.84615 16.1538C4.84615 15.7078 5.20777 15.3462 5.65385 15.3462C6.09992 15.3462 6.46154 15.7078 6.46154 16.1538Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M8.07692 14.5385C8.523 14.5385 8.88461 14.1768 8.88461 13.7308C8.88461 13.2847 8.523 12.9231 8.07692 12.9231C7.63085 12.9231 7.26923 13.2847 7.26923 13.7308C7.26923 14.1768 7.63085 14.5385 8.07692 14.5385Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M8.88461 16.1538C8.88461 16.5999 8.523 16.9615 8.07692 16.9615C7.63085 16.9615 7.26923 16.5999 7.26923 16.1538C7.26923 15.7078 7.63085 15.3462 8.07692 15.3462C8.523 15.3462 8.88461 15.7078 8.88461 16.1538Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M10.5 14.5385C10.9461 14.5385 11.3077 14.1768 11.3077 13.7308C11.3077 13.2847 10.9461 12.9231 10.5 12.9231C10.0539 12.9231 9.69231 13.2847 9.69231 13.7308C9.69231 14.1768 10.0539 14.5385 10.5 14.5385Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M11.3077 16.1538C11.3077 16.5999 10.9461 16.9615 10.5 16.9615C10.0539 16.9615 9.69231 16.5999 9.69231 16.1538C9.69231 15.7078 10.0539 15.3462 10.5 15.3462C10.9461 15.3462 11.3077 15.7078 11.3077 16.1538Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M12.9231 14.5385C13.3692 14.5385 13.7308 14.1768 13.7308 13.7308C13.7308 13.2847 13.3692 12.9231 12.9231 12.9231C12.477 12.9231 12.1154 13.2847 12.1154 13.7308C12.1154 14.1768 12.477 14.5385 12.9231 14.5385Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M13.7308 16.1538C13.7308 16.5999 13.3692 16.9615 12.9231 16.9615C12.477 16.9615 12.1154 16.5999 12.1154 16.1538C12.1154 15.7078 12.477 15.3462 12.9231 15.3462C13.3692 15.3462 13.7308 15.7078 13.7308 16.1538Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M15.3462 14.5385C15.7922 14.5385 16.1538 14.1768 16.1538 13.7308C16.1538 13.2847 15.7922 12.9231 15.3462 12.9231C14.9001 12.9231 14.5385 13.2847 14.5385 13.7308C14.5385 14.1768 14.9001 14.5385 15.3462 14.5385Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M13.7308 11.3077C13.7308 11.7538 13.3692 12.1154 12.9231 12.1154C12.477 12.1154 12.1154 11.7538 12.1154 11.3077C12.1154 10.8616 12.477 10.5 12.9231 10.5C13.3692 10.5 13.7308 10.8616 13.7308 11.3077Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    d="M15.3462 12.1154C15.7922 12.1154 16.1538 11.7538 16.1538 11.3077C16.1538 10.8616 15.7922 10.5 15.3462 10.5C14.9001 10.5 14.5385 10.8616 14.5385 11.3077C14.5385 11.7538 14.9001 12.1154 15.3462 12.1154Z"
                                    fill="#8E79BF"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.84615 0C5.29223 0 5.65385 0.361616 5.65385 0.807692V2.42308H15.3462V0.807692C15.3462 0.361616 15.7078 0 16.1538 0C16.5999 0 16.9615 0.361616 16.9615 0.807692V2.42308H17.7692C19.5535 2.42308 21 3.86954 21 5.65385V17.7692C21 19.5535 19.5535 21 17.7692 21H3.23077C1.44646 21 0 19.5535 0 17.7692V5.65385C0 3.86954 1.44646 2.42308 3.23077 2.42308H4.03846V0.807692C4.03846 0.361616 4.40008 0 4.84615 0ZM19.3846 9.69231C19.3846 8.80016 18.6614 8.07692 17.7692 8.07692H3.23077C2.33862 8.07692 1.61538 8.80016 1.61538 9.69231V17.7692C1.61538 18.6614 2.33862 19.3846 3.23077 19.3846H17.7692C18.6614 19.3846 19.3846 18.6614 19.3846 17.7692V9.69231Z"
                                    fill="#8E79BF"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="flex mt-4 flex-col gap-4">
                    {#if donations.length > 0}
                        {#each donations as donation}
                            <div class="flex justify-between items-center">
                                <div class="flex gap-4">
                                    <img
                                        src={charityImg}
                                        alt="Charity logo"
                                        class="h-10 bg-[#121416] p-1.5"
                                    />
                                    <div>
                                        <h3 class="text-white text-lg">
                                            {donation.organization}
                                        </h3>
                                        <p class="text-[#525252] text-sm">
                                            {donation.item}
                                        </p>
                                    </div>
                                </div>
                                <div class="text-[#ABABAB]">
                                    {new Date(
                                        donation.date * 1000
                                    ).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}
                                </div>
                                <div class="flex text-white font-bold text-lg">
                                    ${donation.amount}
                                </div>
                            </div>
                        {/each}
                    {:else}
                        <div class="flex justify-center items-center">
                            <p class="text-[#ABABAB] text-sm">
                                No donations yet
                            </p>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</section>
