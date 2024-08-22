/* Summary: The header component is a nav bar on top of the page -- it contains the app's logo and name in a big, bold font, to the left. In the middle there are 4 text items each hyperlinked.
*/

Vue.component("simple_header_component_1724216649", {
    template: `
    <header id="header-section" style="min-height: 70px"  class="w-full">
        <nav id="nav-bar" class="bg-purple-900 bg-opacity-30 backdrop-filter backdrop-blur-lg border-gray-200 py-2.5 dark:bg-gray-900 shadow-lg rounded-lg">
            <div id="nav-container" class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a id="logo-link" href="#" class="flex items-center">
                    <img id="logo-image" src="https://makeinfinite-mentat-test.azurewebsites.net/get_image/Learning_Enhancement_App_1724216648/logo.svg" alt="Landwind Logo" class="h-6 mr-3 sm:h-9">
                    <span id="app-name" class="self-center text-xl font-semibold whitespace-nowrap text-pink-300">EduQuest: Your Learning Journey</span>
                </a>
                <div id="menu-toggle-button" class="flex items-center lg:order-2">
                    <button id="collapse-button" data-collapse-toggle="mobile-menu-2" type="button" aria-controls="mobile-menu-2" aria-expanded="false" class="inline-flex items-center p-2 ml-1 text-sm text-pink-300 rounded-lg lg:hidden hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:text-pink-300 dark:hover:bg-purple-800 dark:focus:ring-pink-500">
                        <span class="sr-only">Open main menu</span>
                        <svg id="menu-open-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                        <svg id="menu-close-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="hidden w-6 h-6">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div id="mobile-menu-2" class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
                    <ul id="nav-list" class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li id="nav-item-home">
                            <a href="#" aria-current="page" class="block py-2 pl-3 pr-4 text-pink-300 bg-purple-700 rounded lg:bg-transparent lg:text-pink-300 lg:p-0 dark:text-pink-300 hover:text-white transition-colors duration-300">Interactive Lessons</a>
                        </li>
                        <li id="nav-item-1">
                            <a href="#" class="block py-2 pl-3 pr-4 text-pink-200 border-b border-gray-100 hover:bg-purple-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0 dark:text-pink-200 lg:dark:hover:text-white dark:hover:bg-purple-800 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300">Progress Tracking</a>
                        </li>
                        <li id="nav-item-2">
                            <a href="#" class="block py-2 pl-3 pr-4 text-pink-200 border-b border-gray-100 hover:bg-purple-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0 dark:text-pink-200 lg:dark:hover:text-white dark:hover:bg-purple-800 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300">Personalized Study Plans</a>
                        </li>
                        <li id="nav-item-3">
                            <a href="#" class="block py-2 pl-3 pr-4 text-pink-200 border-b border-gray-100 hover:bg-purple-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0 dark:text-pink-200 lg:dark:hover:text-white dark:hover:bg-purple-800 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300">Knowledge Assessments</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>`,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
