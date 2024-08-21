/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1724216649", {
    template: `
    <section id="cta-component" style="min-height: 710px"     class="bg-gray-50 dark:bg-gray-800 flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Unlock Your Potential with Smart Learning</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Discover a world of knowledge at your fingertips. Start your learning journey today and transform your future.</p>
                </div>
                
                <div id="cta-form-container" class="flex mt-6">
                    <form id="cta-form" class="flex-1 space-y-4">
                        <input type="text" placeholder="Your Name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                        <input type="email" placeholder="Your Email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                        <input type="tel" placeholder="Your Phone Number" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                        <select class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                            <option value="" disabled selected>Select Your Interest</option>
                            <option value="programming">Programming</option>
                            <option value="design">Design</option>
                            <option value="marketing">Marketing</option>
                            <option value="other">Other</option>
                        </select>
                        <textarea placeholder="Your Message" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-24"></textarea>
                        <button type="submit" class="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
