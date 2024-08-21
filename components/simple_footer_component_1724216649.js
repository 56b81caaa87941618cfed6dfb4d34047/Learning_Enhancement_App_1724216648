/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1724216649", {
    template: `
    <footer id="footer-section" style="min-height: 470px"   class="flex-1 bg-white dark:bg-gray-800">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            EduQuest: Your Learning Journey
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                        © 2023 EduQuest. Empowering learners worldwide. All rights reserved.
                        © 2023 EduQuest. Empowering learners worldwide. All rights reserved.
                    </div>
                </div>
                <div class="mt-8">
                    <form @submit.prevent="submitForm" class="flex flex-col items-center">
                        <input v-model="email" type="email" placeholder="Enter your email" class="w-full max-w-md px-4 py-2 mb-4 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring" required>
                        <button type="submit" class="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Subscribe</button>
                    </form>
                </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
            email: '',
        };
    },
    methods: {
        submitForm() {
            // Handle form submission here
            console.log('Form submitted with email:', this.email);
            // Reset the form
            this.email = '';
        }
    },
    },
});
