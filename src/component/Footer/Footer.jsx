import React from 'react'
import { socialLinks, footerLinks } from '../../data/data'
function Footer() {
    return (<>
        <div class="bg-gray-200   dark:bg-custom-bg-color text-footer-text-color mt-3 rounded-lg py-3">
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                    <img src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1727980998/WhatsApp_Image_2024-10-03_at_23.37.42_4b7305c4_nfutdo.jpg" alt="logo" className='h-[50px] w-[500px]' />
                    <p class="text-[10px] font-[500] font-montserrat  mb-2">khelo-bharat.com is Asia's one of the biggest gaming platforms with over 350 games and sports available.</p>
                    <p class="text-[10px] font-[500] font-montserrat mb-2">Popular sports such as Cricket, Tennis, Football, Basketball, Volleyball and many more including Indian card games like Teen Patti and Andar Bahar are also available from various worldwide gaming providers.</p>
                    <p class="text-[10px] font-[500] font-montserrat mb-2">With unlimited markets and odds, khelo-bharat.com gives players the best gaming experience in the market.</p>
                    <div className="flex space-x-1 cursor-pointer">
                        {socialLinks.map((item, index) => (
                            <div key={index}  onClick={() => window.open(item.url, "_blank", "noopener,noreferrer")}  className="flex items-center space-x-1 cursor-pointer">
                                <div className="bg-black text-[12px]  text-footer-heading-color rounded-full p-1">
                                    {item.icon}
                                </div>
                                <p className="text-footer-heading-color cursor-pointer font-[600] text-[11px]">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 class="text-footer-heading-color text-[14px] mt-5 font-montserrat font-[600] mb-2">100% Safe & Instant Payments</h4>
                    <p class="text-[10px] font-[500] font-montserrat  mb-4">You can make payments and receive earnings instantly via your UPI ID - so you can be sure that your money is safe and secure. All UPI platforms are accepted.</p>
                    <div class="flex justify-center items-center space-x-2">
                        <img src="https://cdn.cloudd.site/content/assets/images/18plus.png?v=2" alt="18+" class="w-7 h-7" />
                        <img src="https://cdn.cloudd.site/content/assets/images/gamecare.png?v=2" alt="Secure" class="w-7 h-7" />
                        <img src="https://cdn.cloudd.site/content/assets/images/gt.png?v=2" alt="Certified" class="w-7 h-7" />
                    </div>
                </div>
                <div>
                    <h4 class="text-footer-heading-color text-[14px] mt-5 font-montserrat font-[600] mb-2">Accepted Modes Of Payments</h4>
                    <div class=" mb-2">
                        <img src="https://cdn.cloudd.site/content/assets/images/payment-footer-logo.png?v=1.0.5" alt="UPI" class="" />

                    </div>
                    <div class=" mb-2">
                        <img src="https://cdn.cloudd.site/content/assets/images/payment-footer-logo-2.png?v=1.0.5" alt="PhonePe" class="" />
                    </div>
                    <div className=' flex justify-center items-center'>
                        <h2 class="text-footer-heading-color text-[14px] mt-5 font-montserrat font-[600] mb-2">Contact Us</h2>
                    </div>
                    <div className='flex justify-start items-center'>
                        <div className='ml-8'>
                            <p class="text-[14px] font-[500] font-montserrat ">WhatsApp: +917767839113</p>
                            <p class="text-[14px] font-[500] font-montserrat">Calling: +917767839113</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 text-center">
                <ul className="flex justify-end text-[11px] font-[600] font-montserrat text-white mb-4 px-2">
                    {footerLinks.map((link, index) => (
                        <li key={index} className="px-1">
                            <a href={link.href} className="text-white border-l text-[10px] px-1 border-custom-yellow">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className=' justify-start text-center px-4 items-center'>
            <p class="text-footer-heading-color font-montserrat text-[10px] mt-6 pb-10 font-[500] text-xs">© Copyright 2010 - 2024 Khelo Bharat <span className='px-3'>| Powered by GGF</span></p>
        </div>
    </>
    )
}

export default Footer;