export const Home = () => {
    return (<html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="profile" href="https://gmpg.org/xfn/11"/>
            <link rel="canonical" href="https://whois.mehmetcansahin.com/"/>
            <meta name="description"
                  content="Whois Domain Name service to search the whois database for verified registration information"/>
            <meta property="og:locale" content="en"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Whois Domain Lookup"/>
            <meta property="og:description"
                  content="Whois Domain Name service to search the whois database for verified registration"/>
            <meta property="og:url" content="https://whois.mehmetcansahin.com/"/>
            <meta property="og:site_name" content="WhatIsMyIPAddress"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:description"
                  content="Whois Domain Name service to search the whois database for verified registration"/>
            <meta name="twitter:title" content="Whois Domain Lookup"/>
            <meta name="twitter:image"
                  content="https://whois.mehmetcansahin.com/static/img/cover.png"/>
            <link rel="preconnect" href="https://fonts.bunny.net"/>
            <script src="https://unpkg.com/htmx.org@1.9.9"
                    integrity="sha384-QFjmbokDn2DjBjq+fM+8LUIVrAgqcNW2s0PjAxHETgRn9l4fvX31ZxDxvwQnyMOX"
                    crossorigin="anonymous"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <title>Whois Domain Lookup</title>
        </head>
        <body>
        <div class="w-1/3 p-4 mx-auto">
            <h1 class="py-4 text-center text-2xl">Whois Domain Lookup</h1>
            <form hx-get="/whois" hx-trigger="submit" hx-target="#search-results">
                <label htmlFor="default-search"
                       class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search"
                           name="domain"
                           class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Domain name" required/>
                    <button type="submit"
                            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                    </button>
                </div>
            </form>
            <div>
                Source code is available on&nbsp;
                <a class="underline" href="https://github.com/mehmetcansahin/whois">Github</a>
            </div>
        </div>
        <div class="w-1/2 p-4 mx-auto" id="search-results">
        </div>
        </body>
        </html>
    )
}
