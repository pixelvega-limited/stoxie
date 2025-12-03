"use client"
import { motion } from 'framer-motion';
import { duration, once, y } from '../lib/animation';
import Switch from '../components/ui/switch'
import { Calender, Card, Safe, Verify } from '../lib/icons';
import Image from 'next/image';

export default function pricing() {
    const plans = [
        {
            name: "Essentials",
            price: "$29.99",
            period: "/mo",
            features: [
                "Stock insights",
                "Fund & ETF tools",
                "Watchlist creation",
                "Basic alerts",
                "24/7 Support & More!",
            ],
            popular: false,
        },
        {
            name: "Premium",
            price: "$49.99",
            period: "/mo",
            features: [
                "Everything in Essentials",
                "Premium alerts",
                "Patricia (AI Chat)",
                "Priority support",
                "24/7 Support & More!",
            ],
            popular: true,
        },
    ]
    const free = [
        {
            name: "Free 30-day trial.",
            icon: <Calender />
        },
        {
            name: "Free 30-day trial.",
            icon: <Card />
        },
        {
            name: "Free 30-day trial.",
            icon: <Safe />
        },
    ]
    return (
        <div className=''>
            <motion.div
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0 }}
                viewport={{ once: once, amount: 0.2, }}
                className="flex items-center gap-4 mx-auto max-w-74 mb-4 md:mb-6">
                <Switch id='switch' title='Billed annually' />
                <a href="" className='btn min-h-9 text-base text-primary font-euclid leading-normal'><span className='py-1.5 px-4'>save 20%</span></a>
            </motion.div>
            <div className="max-w-204 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 xl:gap-6 mb-5 lg:mb-7.5 -z-1">
                    {plans.map((item, index) => (
                        <motion.div
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: duration, delay: `0.${index + 1}` }}
                            viewport={{ once: once, amount: 0.2, }}
                            key={index} onClick={() => setActiveTabs(item)} className={`group single-card relative cursor-pointer bg-[#121317] rounded-xl md:rounded-2xl xl:rounded-3xl lg:rounded-[30px] overflow-hidden z-1 ${index === 1 ? "active" : ""}`} >
                            <Image src='/img/pricing-bg.png' alt="" width={392} height={352} className={`absolute top-1/2 -translate-y-1/2 h-[99%] rounded-xl md:rounded-2xl xl:rounded-3xl lg:rounded-[30px]  left-1/2 -translate-x-1/2 -z-1 group-hover:opacity-100 ${index === 1 ? "opacity-100" : "opacity-0"}`} />
                            <div className="single-item"></div>
                            {item.popular && (
                                <span className="absolute top-7 right-7.5 px-4 py-1 max-w-max flex items-center min-h-8.5 text-sm xl:text-base text-white font-euclid font-light leading-normal bg-white/10 border border-white/20 rounded-full"> Most Popular </span>
                            )}
                            <div className="p-4 md:p-5 xl:p-7.5">
                                <h3 className="text-xl text-white font-euclid font-normal leading-[130%] mb-3 md:mb-4">{item.name}</h3>
                                <p className="text-4xl xl:text-5xl text-white font-euclid font-semibold leading-[130%]">{item.price}<span className="text-base font-light text-para">{item.period}</span></p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className='h-px bg-white/8 w-full'></div>
                                <h4 className="text-xs text-heading font-euclid font-light leading-[130%]">FEATURES</h4>
                                <div className='h-px bg-white/8 w-full'></div>
                            </div>
                            <div className="p-4 md:p-5 xl:p-7.5">
                                <ul className=" flex flex-col gap-2 md:gap-3 xl:gap-4 mb-6 xl:mb-7.5">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-base lg:text-xl text-heading font-euclid font-light leading-[130%] gap-2">
                                            <Verify />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="">
                                    <button className={`btn  w-full ${index === 1 ? "btn" : "btn-secondary"}`}><span> Get Started</span></button>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 xl:gap-6 mb-7.5">
                    {free.map((item, index) => (
                        <motion.div
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: duration, delay: `0.${index + 1}` }}
                            viewport={{ once: once, amount: 0.2, }}
                            key={index} className="flex items-center gap-2">
                            <div>
                                {item.icon}
                            </div>
                            <p className="text-xs md:text-base text-para font-euclid font-light leading-[130%] uppercase">{item.name}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2, }}
                    className="">
                    <button className='btn btn-secondary flex items-center justify-center mx-auto '><span>Compare Plans</span></button>
                </motion.div>
            </div>
        </div>
    )
}
