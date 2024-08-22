/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1724216649", {
    template: `
    <section id="cta-component" class="bg-purple-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 min-h-870px flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-pink-200">Unlock Your Potential with Smart Learning</h2>
                </div>
                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-pink-100 md:text-lg">Discover a world of knowledge at your fingertips. Start your learning journey today and transform your future.</p>
                </div>
                <div id="cta-button-container" class="flex justify-center mb-6">
                    <button class="px-6 py-3 text-purple-900 bg-pink-300 bg-opacity-70 rounded-lg hover:bg-pink-400 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-300 ease-in-out">Get Started</button>
                </div>
                <div id="cta-form-container" class="flex mt-6">
                    <form id="cta-form" class="flex-1 space-y-4">
                        <input type="text" placeholder="Your Name" class="w-full px-4 py-2 bg-purple-800 bg-opacity-50 text-pink-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 placeholder-pink-300">
                        <input type="email" placeholder="Your Email" class="w-full px-4 py-2 bg-purple-800 bg-opacity-50 text-pink-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 placeholder-pink-300">
                        <input type="tel" placeholder="Your Phone Number" class="w-full px-4 py-2 bg-purple-800 bg-opacity-50 text-pink-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 placeholder-pink-300">
                        <select class="w-full px-4 py-2 bg-purple-800 bg-opacity-50 text-pink-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
                            <option value="" disabled selected>Select Your Interest</option>
                            <option value="programming">Programming</option>
                            <option value="design">Design</option>
                            <option value="marketing">Marketing</option>
                            <option value="other">Other</option>
                        </select>
                        <textarea placeholder="Your Message" class="w-full px-4 py-2 bg-purple-800 bg-opacity-50 text-pink-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 h-24 placeholder-pink-300"></textarea>
                        <input type="date" placeholder="Preferred Start Date" class="w-full px-4 py-2 bg-purple-800 bg-opacity-50 text-pink-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
                        <input type="text" placeholder="Your Current Occupation" class="w-full px-4 py-2 bg-purple-800 bg-opacity-50 text-pink-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 placeholder-pink-300">
                        <select class="w-full px-4 py-2 bg-purple-800 bg-opacity-50 text-pink-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
                            <option value="" disabled selected>Preferred Learning Method</option>
                            <option value="online">Online</option>
                            <option value="in-person">In-Person</option>
                            <option value="hybrid">Hybrid</option>
                        </select>
                        <button type="submit" class="w-full text-purple-900 bg-pink-300 bg-opacity-70 hover:bg-pink-400 hover:bg-opacity-80 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition duration-300 ease-in-out">Sign Up</button>
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
