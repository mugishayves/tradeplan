import React from 'react'
import { Helmet } from 'react-helmet'

const Feedback = () => {
        const feedback = [
                {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                }, {
                        image: "/image/steven.png",
                        name: "Will Smith",
                        body: `Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results.

                        Risk Warning: This tool and its content should not be construed as financial advice. Signals and readings displayed by the tool are our opinions only and are meant only to be educational. By viewing this tool, you agree that TradePlans.ai is not liable for any gains or losses you may incur from the financial decisions you make. Data displayed is not guaranteed to be 100% accurate or real-time, and may be subject to latency or errors. Please consult a licensed financial advisor prior to making any investment decisions. Trading is not appropriate for everyone. Past performance is not indicative of future results. `
                },
        ]
        return (
                <div>
                        <Helmet>
                                <title>Trade Plan | Feedback</title>
                        </Helmet>
                        <div className='gap-[5vw] text-[2.2vw] md:text-[1.05vw]  px-[4vw] py-[4vh] md:px-[7.5vw] md:py-[8vh]'>
                                <p className='font-bold text-[#00192C] text-[3.8vw] md:text-[2.1vw] my-[1vh] text-center'>We are interested in your opinions</p>
                                <p className='my-[.5vh] md:my-[2vh] text-[#191919]  text-center'>Unlock the potential of your trades – Act now and experience the <br /> transformative power of A.I.-driven second opinions!</p>
                                <div className='flex flex-col md:flex-row gap-[5vw]  my-[7vh]'>
                                        <img src="/image/blur1.png" alt="" className='absolute top-0 right-0 w-[20vw]' />
                                        <img src="/image/blur2.png" alt="" className='absolute top-[20vh]  left-0 w-[20vw]' />
                                        <div className="w-full md:w-[50%] flex items-center justify-center">
                                                <img src="/image/feedback.png" className="w-[80%]" />
                                        </div>
                                        <div className="w-full md:w-[45%] flex items-center justify-center">
                                                <div className=' border-gradient p-[2vw] rounded-[2vw] text-center w-full'>
                                                        <p className='text-[#391800] font-semibold text-[3.5vw] md:text-[1.6vw] my-[2vh]'>Tell us what you think about us</p>
                                                        <div className='text-left my-[1vh]'>
                                                                <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Rate Us</p>
                                                                <div className="flex flex-row gap-[.3vw] mb-[1.5vh]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                                                <path d="M10.9885 17.1693C10.685 16.9995 10.3151 16.9995 10.0116 17.1693L5.2844 19.8154C4.53979 20.2322 3.64883 19.5849 3.81513 18.7479L4.87092 13.4344C4.9387 13.0933 4.82438 12.7414 4.56904 12.5053L0.591717 8.82722C-0.0347856 8.24785 0.30553 7.20046 1.15293 7.09999L6.53261 6.46214C6.87797 6.42119 7.17726 6.20375 7.32293 5.88794L9.59199 0.968666C9.94941 0.193795 11.0507 0.193798 11.4081 0.968672L13.6771 5.88794C13.8228 6.20375 14.1221 6.42119 14.4674 6.46214L19.8471 7.09999C20.6945 7.20047 21.0348 8.24785 20.4083 8.82722L16.431 12.5053C16.1757 12.7414 16.0614 13.0933 16.1292 13.4344L17.1849 18.7479C17.3512 19.5849 16.4603 20.2322 15.7157 19.8154L10.9885 17.1693ZM10.0116 14.8598C10.3151 14.6899 10.685 14.6899 10.9885 14.8598L12.8875 15.9227C13.6321 16.3395 14.523 15.6922 14.3567 14.8552L13.9326 12.7208C13.8648 12.3796 13.9791 12.0278 14.2345 11.7917L15.8323 10.3141C16.4588 9.73473 16.1184 8.68735 15.2711 8.58687L13.1099 8.33061C12.7646 8.28966 12.4653 8.07222 12.3196 7.75641L11.4081 5.78024C11.0507 5.00536 9.9494 5.00536 9.59199 5.78023L8.68045 7.75642C8.53478 8.07222 8.2355 8.28966 7.89014 8.33061L5.72897 8.58687C4.88158 8.68735 4.54127 9.73473 5.16777 10.3141L6.76556 11.7917C7.02089 12.0278 7.13521 12.3796 7.06743 12.7208L6.6433 14.8553C6.477 15.6922 7.36795 16.3396 8.11256 15.9228L10.0116 14.8598Z" fill="#959595" />
                                                                        </svg>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                                                <path d="M10.9885 17.1693C10.685 16.9995 10.3151 16.9995 10.0116 17.1693L5.2844 19.8154C4.53979 20.2322 3.64883 19.5849 3.81513 18.7479L4.87092 13.4344C4.9387 13.0933 4.82438 12.7414 4.56904 12.5053L0.591717 8.82722C-0.0347856 8.24785 0.30553 7.20046 1.15293 7.09999L6.53261 6.46214C6.87797 6.42119 7.17726 6.20375 7.32293 5.88794L9.59199 0.968666C9.94941 0.193795 11.0507 0.193798 11.4081 0.968672L13.6771 5.88794C13.8228 6.20375 14.1221 6.42119 14.4674 6.46214L19.8471 7.09999C20.6945 7.20047 21.0348 8.24785 20.4083 8.82722L16.431 12.5053C16.1757 12.7414 16.0614 13.0933 16.1292 13.4344L17.1849 18.7479C17.3512 19.5849 16.4603 20.2322 15.7157 19.8154L10.9885 17.1693ZM10.0116 14.8598C10.3151 14.6899 10.685 14.6899 10.9885 14.8598L12.8875 15.9227C13.6321 16.3395 14.523 15.6922 14.3567 14.8552L13.9326 12.7208C13.8648 12.3796 13.9791 12.0278 14.2345 11.7917L15.8323 10.3141C16.4588 9.73473 16.1184 8.68735 15.2711 8.58687L13.1099 8.33061C12.7646 8.28966 12.4653 8.07222 12.3196 7.75641L11.4081 5.78024C11.0507 5.00536 9.9494 5.00536 9.59199 5.78023L8.68045 7.75642C8.53478 8.07222 8.2355 8.28966 7.89014 8.33061L5.72897 8.58687C4.88158 8.68735 4.54127 9.73473 5.16777 10.3141L6.76556 11.7917C7.02089 12.0278 7.13521 12.3796 7.06743 12.7208L6.6433 14.8553C6.477 15.6922 7.36795 16.3396 8.11256 15.9228L10.0116 14.8598Z" fill="#959595" />
                                                                        </svg>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                                                <path d="M10.9885 17.1693C10.685 16.9995 10.3151 16.9995 10.0116 17.1693L5.2844 19.8154C4.53979 20.2322 3.64883 19.5849 3.81513 18.7479L4.87092 13.4344C4.9387 13.0933 4.82438 12.7414 4.56904 12.5053L0.591717 8.82722C-0.0347856 8.24785 0.30553 7.20046 1.15293 7.09999L6.53261 6.46214C6.87797 6.42119 7.17726 6.20375 7.32293 5.88794L9.59199 0.968666C9.94941 0.193795 11.0507 0.193798 11.4081 0.968672L13.6771 5.88794C13.8228 6.20375 14.1221 6.42119 14.4674 6.46214L19.8471 7.09999C20.6945 7.20047 21.0348 8.24785 20.4083 8.82722L16.431 12.5053C16.1757 12.7414 16.0614 13.0933 16.1292 13.4344L17.1849 18.7479C17.3512 19.5849 16.4603 20.2322 15.7157 19.8154L10.9885 17.1693ZM10.0116 14.8598C10.3151 14.6899 10.685 14.6899 10.9885 14.8598L12.8875 15.9227C13.6321 16.3395 14.523 15.6922 14.3567 14.8552L13.9326 12.7208C13.8648 12.3796 13.9791 12.0278 14.2345 11.7917L15.8323 10.3141C16.4588 9.73473 16.1184 8.68735 15.2711 8.58687L13.1099 8.33061C12.7646 8.28966 12.4653 8.07222 12.3196 7.75641L11.4081 5.78024C11.0507 5.00536 9.9494 5.00536 9.59199 5.78023L8.68045 7.75642C8.53478 8.07222 8.2355 8.28966 7.89014 8.33061L5.72897 8.58687C4.88158 8.68735 4.54127 9.73473 5.16777 10.3141L6.76556 11.7917C7.02089 12.0278 7.13521 12.3796 7.06743 12.7208L6.6433 14.8553C6.477 15.6922 7.36795 16.3396 8.11256 15.9228L10.0116 14.8598Z" fill="#959595" />
                                                                        </svg>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                                                <path d="M10.9885 17.1693C10.685 16.9995 10.3151 16.9995 10.0116 17.1693L5.2844 19.8154C4.53979 20.2322 3.64883 19.5849 3.81513 18.7479L4.87092 13.4344C4.9387 13.0933 4.82438 12.7414 4.56904 12.5053L0.591717 8.82722C-0.0347856 8.24785 0.30553 7.20046 1.15293 7.09999L6.53261 6.46214C6.87797 6.42119 7.17726 6.20375 7.32293 5.88794L9.59199 0.968666C9.94941 0.193795 11.0507 0.193798 11.4081 0.968672L13.6771 5.88794C13.8228 6.20375 14.1221 6.42119 14.4674 6.46214L19.8471 7.09999C20.6945 7.20047 21.0348 8.24785 20.4083 8.82722L16.431 12.5053C16.1757 12.7414 16.0614 13.0933 16.1292 13.4344L17.1849 18.7479C17.3512 19.5849 16.4603 20.2322 15.7157 19.8154L10.9885 17.1693ZM10.0116 14.8598C10.3151 14.6899 10.685 14.6899 10.9885 14.8598L12.8875 15.9227C13.6321 16.3395 14.523 15.6922 14.3567 14.8552L13.9326 12.7208C13.8648 12.3796 13.9791 12.0278 14.2345 11.7917L15.8323 10.3141C16.4588 9.73473 16.1184 8.68735 15.2711 8.58687L13.1099 8.33061C12.7646 8.28966 12.4653 8.07222 12.3196 7.75641L11.4081 5.78024C11.0507 5.00536 9.9494 5.00536 9.59199 5.78023L8.68045 7.75642C8.53478 8.07222 8.2355 8.28966 7.89014 8.33061L5.72897 8.58687C4.88158 8.68735 4.54127 9.73473 5.16777 10.3141L6.76556 11.7917C7.02089 12.0278 7.13521 12.3796 7.06743 12.7208L6.6433 14.8553C6.477 15.6922 7.36795 16.3396 8.11256 15.9228L10.0116 14.8598Z" fill="#959595" />
                                                                        </svg>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                                                <path d="M10.9885 17.1693C10.685 16.9995 10.3151 16.9995 10.0116 17.1693L5.2844 19.8154C4.53979 20.2322 3.64883 19.5849 3.81513 18.7479L4.87092 13.4344C4.9387 13.0933 4.82438 12.7414 4.56904 12.5053L0.591717 8.82722C-0.0347856 8.24785 0.30553 7.20046 1.15293 7.09999L6.53261 6.46214C6.87797 6.42119 7.17726 6.20375 7.32293 5.88794L9.59199 0.968666C9.94941 0.193795 11.0507 0.193798 11.4081 0.968672L13.6771 5.88794C13.8228 6.20375 14.1221 6.42119 14.4674 6.46214L19.8471 7.09999C20.6945 7.20047 21.0348 8.24785 20.4083 8.82722L16.431 12.5053C16.1757 12.7414 16.0614 13.0933 16.1292 13.4344L17.1849 18.7479C17.3512 19.5849 16.4603 20.2322 15.7157 19.8154L10.9885 17.1693ZM10.0116 14.8598C10.3151 14.6899 10.685 14.6899 10.9885 14.8598L12.8875 15.9227C13.6321 16.3395 14.523 15.6922 14.3567 14.8552L13.9326 12.7208C13.8648 12.3796 13.9791 12.0278 14.2345 11.7917L15.8323 10.3141C16.4588 9.73473 16.1184 8.68735 15.2711 8.58687L13.1099 8.33061C12.7646 8.28966 12.4653 8.07222 12.3196 7.75641L11.4081 5.78024C11.0507 5.00536 9.9494 5.00536 9.59199 5.78023L8.68045 7.75642C8.53478 8.07222 8.2355 8.28966 7.89014 8.33061L5.72897 8.58687C4.88158 8.68735 4.54127 9.73473 5.16777 10.3141L6.76556 11.7917C7.02089 12.0278 7.13521 12.3796 7.06743 12.7208L6.6433 14.8553C6.477 15.6922 7.36795 16.3396 8.11256 15.9228L10.0116 14.8598Z" fill="#959595" />
                                                                        </svg>
                                                                </div>
                                                                <div>
                                                                        <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Name</p>
                                                                        <input type="text" placeholder='Your Name' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                                </div>
                                                                <div>
                                                                        <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Email</p>
                                                                        <input type="text" placeholder='Your Email' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                                </div>
                                                                <div>
                                                                        <p className='text-[1.9vw] md:text-[0.8vw] text-[#676767]'>Message</p>
                                                                        <textarea placeholder='Your Message' className='bg-[#EAEAEA] rounded-md w-full px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                                </div>
                                                                <input type="submit" value="Submit" className='bg-[#FF6B00] px-[2vw] py-[1vh] rounded-full w-full  h-fit text-white my-[1vh]' />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <p className='my-[2vh] md:my-[5vh] text-[2.5vw] md:text-[1.6vw] font-semibold'>Other Feedbacks</p>
                                <div>
                                        {feedback.map((feedback, index) => {
                                                return (
                                                        <div key={index} className='border-gradient rounded-[2vw] my-[2vh] md:my-[5vh] p-[1.5vw]'>
                                                                <div className="flex flex-row gap-2 w-[50%] my-[2vh] z-20">
                                                                        <img src={feedback.image} alt={feedback.name} />
                                                                        <div>
                                                                                <p>{feedback.name}</p>
                                                                                <div className="flex flex-row gap-[.3vw]">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                                                <path d="M5.50003 8.55892L2.10082 10.4616L2.86 6.64083L0 3.99599L3.8684 3.53733L5.50003 0L7.13162 3.53733L11 3.99599L8.14004 6.64083L8.89921 10.4616L5.50003 8.55892Z" fill="#0094FF" />
                                                                                        </svg>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                                                <path d="M5.50003 8.55892L2.10082 10.4616L2.86 6.64083L0 3.99599L3.8684 3.53733L5.50003 0L7.13162 3.53733L11 3.99599L8.14004 6.64083L8.89921 10.4616L5.50003 8.55892Z" fill="#0094FF" />
                                                                                        </svg>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                                                <path d="M5.50003 8.55892L2.10082 10.4616L2.86 6.64083L0 3.99599L3.8684 3.53733L5.50003 0L7.13162 3.53733L11 3.99599L8.14004 6.64083L8.89921 10.4616L5.50003 8.55892Z" fill="#0094FF" />
                                                                                        </svg>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                                                <path d="M5.50003 8.55892L2.10082 10.4616L2.86 6.64083L0 3.99599L3.8684 3.53733L5.50003 0L7.13162 3.53733L11 3.99599L8.14004 6.64083L8.89921 10.4616L5.50003 8.55892Z" fill="#0094FF" />
                                                                                        </svg>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                                                <path d="M5.50003 8.55892L2.10082 10.4616L2.86 6.64083L0 3.99599L3.8684 3.53733L5.50003 0L7.13162 3.53733L11 3.99599L8.14004 6.64083L8.89921 10.4616L5.50003 8.55892Z" fill="#0094FF" />
                                                                                        </svg>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <p className='text-[2.4vw] md:text-[1.2vw] pl-[3vw]'>{feedback.body}</p>
                                                        </div>
                                                )
                                        })}
                                        <button className='flex items-center justify-center w-full'>
                                                <p className='text-center text-[2vw] md:text-[1.05vw] text-[#0094FF]'>Read more</p>
                                        </button>
                                </div>
                        </div>
                </div>
        )
}

export default Feedback