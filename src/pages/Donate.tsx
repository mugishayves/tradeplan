import React from 'react'
import { Helmet } from 'react-helmet'

const Donate = () => {
        return (
                <div className='flex flex-col md:flex-row gap-[5vw] text-[2.2vw] md:text-[1.05vw]  px-[4vw] md:px-[7.5vw] py-[4vh] md:py-[15vh]'>
                        <Helmet>
                                <title>TradePlan | Donate</title>
                        </Helmet>
                        <img src="/image/blur1.png" alt="" className='absolute top-0 right-0 w-[20vw]' />
                        <img src="/image/blur2.png" alt="" className='absolute top-[20vh]  left-0 w-[20vw]' />
                        <div className='w-full md:w-[55%]'>
                                <p className='font-bold text-[#00192C] text-[4vw] md:text-[2.1vw] my-[1vh]'>Donate to our company</p>
                                <p className='text-[#6C6C6C] text-[2.8vw] md:text-[1.5vw] my-[1vh]'>Welcome to TradePlans.AI, where innovation meets trading. Whether you're a seasoned trader or just starting, our platform is your ultimate companion on the path to financial success.</p>
                                <p className='my-[2vh] text-[2.8vw] md:text-[1.5vw] text-[#0094FF] font-medium'>Watch how</p>
                                <div className='relative'>
                                        <img src="/image/donate.png" alt="" />
                                </div>
                        </div>
                        <div className='w-full md:w-[45%] border-gradient p-[2vw] rounded-[2vw] '>
                                <p className='my-[1vh] font-extrabold text-[4vw] md:text-[2vw]'>Payment</p>
                                <div className="w-full h-[1px] bg-black"></div>
                                <div>
                                        <p className='text-[2.5vw] md:text-[0.95vw] font-semibold my-[1vh]'>Sign in into your account</p>
                                        <div className="flex flex-row gap-[.5vw]">
                                                <div className="flex flex-row gap-[.2vw]">
                                                        <input type="radio" name='card' className='selection:bg-[#FF6B00]' />
                                                        <p>Card</p>
                                                </div>
                                                <div className="flex flex-row gap-[.2vw]">
                                                        <input type="radio" name='card' className='selection:bg-[#FF6B00]' />
                                                        <p>Bank</p>
                                                </div>
                                                <div className="flex flex-row gap-[.2vw]">
                                                        <input type="radio" name='card' className='selection:bg-[#FF6B00]' />
                                                        <p>Transfer</p>
                                                </div>
                                        </div>
                                </div>
                                <form className='mt-[2vh] text-[2.2vw] md:text-[1.05vw] '>
                                        <div className='my-[1.3vw]'>
                                                <label htmlFor="email" className='font-medium text-[2.4vw] md:text-[1.2vw] my-[0.5vw]'>Card Number</label>
                                                <div className='w-full relative'>
                                                        <input type="text" className='border-[2px] border-[rgba(0,0,0,0.4)] rounded-md w-full h-full px-[2.5vw] py-[2vh] pl-[2.2vw]' placeholder='1234  5678  9101  1121' />
                                                </div>
                                        </div>
                                        <div className="flex flex-row justify-between gap-[1.5vw] my-[1vh]">
                                                <div className=' w-[50%]'>
                                                        <label htmlFor="phone" className='font-medium text-[2.4vw] md:text-[1.2vw] my-[0.5vw]'>Expiration Date</label>
                                                        <div className='w-full relative'>
                                                                <input type="date" className='border-[2px] border-[rgba(0,0,0,0.4)] rounded-md w-full h-full px-[2.5vw] py-[2vh] pl-[2.2vw]' placeholder='Phone' />
                                                        </div>
                                                </div>
                                                <div className=' w-[50%]'>
                                                        <label htmlFor="country" className='font-medium text-[2.4vw] md:text-[1.2vw] my-[0.5vw]'>CVV</label>
                                                        <div className='w-full relative'>
                                                                <input type="text" className='border-[2px] border-[rgba(0,0,0,0.4)] rounded-md w-full h-full px-[2.5vw] py-[2vh] pl-[2.2vw]' placeholder='123   ' />
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="flex flex-row gap-[.2vw] my-[1vh]">
                                                <input type="checkbox" name='card' className='selection:bg-[#FF6B00]' />
                                                <p className='text-[#ACACAC] text-[2.5vw] md:text-[.9vw]'>Save Card Details</p>
                                        </div>
                                        <input type="submit" value="Pay" className='text-white bg-[#FF6B00] w-full  px-[2.5vw] py-[2vh] rounded-md' />
                                </form>
                                <p className='my-[2vh] text-[3vw] md:text-[.7vw] text-[#ACACAC]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                        </div>
                </div>
        )
}

export default Donate