function Nav() {
    let title = "Miguel App"
    return (
        <nav class="bg-violet-400 border-gray-200 dark:bg-gray-900 w-full">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
                </a>
            </div>
        </nav>
    );
};

export default Nav