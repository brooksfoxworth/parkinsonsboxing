/**
 * Page Content Configuration
 * Contains all page templates and content data
 */
const PageContent = {
    home: `
        <div id="home-content" class="pb-8">
            <!-- Açaí Bowls & Superfoods -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-200 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0" style="animation: fadeInLeft 0.8s ease-out;">
                            <h2 class="text-4xl font-bold text-gray-900 mb-6">Parkinson's Boxing<br><span class="text-blue-600">Specialized Training for Neurological Wellness</span></h2>
                            <p class="text-xl text-gray-700 mb-6">One-on-one custom programs designed to relieve & help offset the symptoms of Parkinson's Disease. Our specialized boxing training combines physical therapy principles with boxing techniques to improve motor function, balance, and quality of life.</p>
                            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors mt-4" 
                                    onclick="window.PierogiApp.getNavigationManager().navigateToPage('programs')">
                                View Our Programs
                            </button>
                        </div>
                        <div class="md:w-1/2 relative flex items-center justify-center" style="animation: fadeInRight 0.8s ease-out;">
                            <div class="bg-white rounded-xl p-1 border border-gray-200 shadow-2xl w-full">
                                <div class="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg relative">
                                    <img src="./assets/images/specializedtraining.jpg" 
                                         alt="Specialized Training for Neurological Wellness - Parkinson's Boxing" 
                                         class="w-full h-full object-cover rounded-lg"
                                         style="animation: fadeInRight 0.8s ease-out 0.2s both;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Featured Menu Items -->
            <div class="bg-blue-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-blue-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.4s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">Training Programs</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Specialized boxing programs designed to help manage Parkinson's Disease symptoms</p>
                </div>
                <div class="swiper game-day-swiper max-w-6xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                       <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                           <div class="relative">
                               <img src="./assets/images/oneonone.jpg" alt="One-on-One Training" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                               <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                               <div class="absolute bottom-0 left-0 right-0 p-4">
                                   <h3 class="text-xl font-bold text-white">One-on-One Training</h3>
                               </div>
                           </div>
                           <div class="p-4">
                               <p class="text-gray-700 text-sm mb-4">Personalized boxing sessions tailored to your specific Parkinson's symptoms and fitness level. Our certified trainers work with you to improve balance, coordination, and motor function through specialized boxing techniques.</p>
                               <button class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('programs')">
                                   View Programs
                               </button>
                           </div>
                       </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="./assets/images/groupclasses.jpg" alt="Group Classes" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Group Classes</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Small group boxing sessions designed for people with Parkinson's Disease. Build community while improving strength, balance, and coordination in a supportive environment with others who understand your journey.</p>
                              <button class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('programs')">
                                  View Programs
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                       <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                           <div class="relative">
                               <img src="./assets/images/physicaltherapy.jpg" alt="Physical Therapy Integration" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                               <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                               <div class="absolute bottom-0 left-0 right-0 p-4">
                                   <h3 class="text-xl font-bold text-white">Physical Therapy Integration</h3>
                               </div>
                           </div>
                           <div class="p-4">
                               <p class="text-gray-700 text-sm mb-4">Boxing training combined with physical therapy principles. Our programs integrate therapeutic exercises with boxing movements to maximize neurological benefits and improve daily functioning.</p>
                               <button class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('programs')">
                                   View Programs
                               </button>
                           </div>
                       </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination game-day-swiper-pagination"></div>
                </div>

                <!-- View Full Menu CTA -->
                <div class="text-center mt-12">
                    <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')" class="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                        View All Programs
                    </a>
                </div>
            </div>

            <!-- Client Testimonials -->
            <div class="bg-blue-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-blue-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.6s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">Client Testimonials</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Hear from our clients about their Parkinson's Boxing journey (Note: These are fictional testimonials for demonstration purposes)</p>
                </div>
                <div class="swiper fans-say-swiper max-w-4xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600 mr-4">JS</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">John Fictional-Smith</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The boxing training has dramatically improved my balance and coordination. After 6 months of one-on-one sessions, I feel more confident in my daily movements and my tremors have noticeably decreased. The trainers really understand Parkinson's!"</p>
                              <div class="text-xs text-gray-500">Fictional Client - 3 Years with Parkinson's</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.8s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600 mr-4">MD</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Mary Demo-Johnson</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"I was skeptical at first, but the group classes have been life-changing. Not only has my physical strength improved, but the community support is incredible. We motivate each other and celebrate every small victory together!"</p>
                              <div class="text-xs text-gray-500">Fictional Client - Group Class Participant</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 1.0s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600 mr-4">RT</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Robert Test-Wilson</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The integration with physical therapy has been perfect for my needs. The trainers work closely with my PT to ensure every session supports my overall treatment plan. I've regained so much mobility and confidence!"</p>
                              <div class="text-xs text-gray-500">Fictional Client - PT Integration Program</div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination fans-say-swiper-pagination"></div>
                </div>
            </div>
        </div>
    `,

    // Menu page content is handled dynamically by PageManager

    order: `
        <div id="order-content" class="pt-6 md:pt-12 px-4 md:px-0">
            <div class="text-center mb-6 max-w-4xl mx-auto">
                <h1 class="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-2">My Order</h1>
                <p class="text-[var(--text-medium)]">Review your items</p>
            </div>
            
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6 mx-0">
                    <h2 class="text-lg md:text-xl font-bold text-[var(--text-dark)] mb-3 md:mb-4">Cart Items</h2>
                    <div id="cart-items-list"></div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-4 md:p-6 mx-0">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-lg md:text-xl font-bold text-[var(--text-dark)]">Total:</span>
                        <span id="cart-total" class="text-lg md:text-xl font-bold text-[var(--primary-color)]">$0.00</span>
                    </div>
                    <button class="w-full bg-[var(--primary-color)] text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    `,

    about: `
                <div class="pt-12 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-blue-600 mr-4"></div>
                            <h1 class="text-3xl md:text-4xl font-bold text-gray-900">About Parkinson's Boxing</h1>
                        </div>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            At Parkinson's Boxing, we believe in the transformative power of boxing training for individuals living with Parkinson's Disease. 
                            Our specialized facility combines the intensity and focus of boxing with evidence-based therapeutic techniques to help 
                            improve motor function, balance, coordination, and overall quality of life.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            Founded by certified trainers with extensive experience in neurological wellness, our gym offers a supportive environment 
                            where every client receives personalized attention. We understand that Parkinson's affects everyone differently, which is why 
                            our programs are tailored to meet individual needs, abilities, and goals.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            More than just a gym, we're a community dedicated to fighting back against Parkinson's Disease through movement, 
                            strength, and determination. Our clients don't just train here—they thrive, building confidence and reclaiming 
                            their sense of empowerment one session at a time.
                        </p>
                    </div>
                </div>

                <!-- Our Approach Section -->
                <div class="mb-12">
                    <div class="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-blue-500 mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Our Specialized Approach</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            Our boxing-based training programs are specifically designed to target the symptoms of Parkinson's Disease. 
                            Through non-contact boxing techniques, we focus on improving rhythm, timing, hand-eye coordination, and cognitive function 
                            while building strength and endurance in a safe, supportive environment.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-blue-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Evidence-Based Training</h3>
                                <p class="text-[var(--text-medium)] text-sm">Programs rooted in research showing boxing's effectiveness for Parkinson's symptom management</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-blue-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Certified Specialists</h3>
                                <p class="text-[var(--text-medium)] text-sm">Trainers certified in neurological wellness and Parkinson's-specific exercise protocols</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Why Choose Us -->
                <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 mb-12 text-white">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold mb-4">Why Choose Parkinson's Boxing?</h2>
                        <p class="text-blue-100 text-lg max-w-3xl mx-auto">
                            We're not just another gym – we're specialists in Parkinson's-focused fitness with a proven track record of helping clients improve their quality of life.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Proven Results</h3>
                            <p class="text-blue-100">Research-backed methods showing measurable improvements in motor function and balance</p>
                        </div>
                        
                        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Supportive Community</h3>
                            <p class="text-blue-100">Train alongside others who understand your journey in an encouraging environment</p>
                        </div>
                        
                        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Personalized Programs</h3>
                            <p class="text-blue-100">Custom training plans adapted to your specific needs and progression level</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    `,

    contact: `
        <div id="contact-content" class="max-w-2xl mx-auto px-4 py-8 w-full">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-4">Contact Us</h1>
                <p class="text-lg text-[var(--text-medium)]">We'd love to hear from you!</p>
            </div>
            
            <div class="space-y-6 w-full">
                <div class="bg-white rounded-lg shadow-md p-6 w-full">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Get in Touch</h2>
                    <div class="space-y-4">
                        <div class="flex flex-col sm:flex-row sm:items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Phone:</span>
                            <a href="tel:843-333-2814" class="text-[var(--text-medium)] hover:text-blue-400 transition-colors">(843) 333-2814</a>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-center gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Email:</span>
                            <button onclick="navigator.clipboard.writeText('info@parkinsonsboxing.com').then(() => { const btn = event.target; const originalText = btn.innerHTML; btn.innerHTML = '✓ Copied to clipboard!'; btn.classList.add('text-green-500'); setTimeout(() => { btn.innerHTML = originalText; btn.classList.remove('text-green-500'); }, 2000); })" 
                                    class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-fit"
                                    title="Click to copy email">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Copy Email
                            </button>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Address:</span>
                            <span class="text-[var(--text-medium)]">607 N Kings Hwy, Myrtle Beach, SC 29577</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-6 w-full">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Hours</h2>
                    <div class="space-y-2">
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Sunday:</span>
                            <span class="text-[var(--text-dark)] font-medium">Closed</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Monday:</span>
                            <span class="text-[var(--text-dark)] font-medium">8:00 AM - 6:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Tuesday:</span>
                            <span class="text-[var(--text-dark)] font-medium">8:00 AM - 6:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Wednesday:</span>
                            <span class="text-[var(--text-dark)] font-medium">8:00 AM - 6:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Thursday:</span>
                            <span class="text-[var(--text-dark)] font-medium">8:00 AM - 6:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Friday:</span>
                            <span class="text-[var(--text-dark)] font-medium">8:00 AM - 6:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Saturday:</span>
                            <span class="text-[var(--text-dark)] font-medium">Closed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

};
