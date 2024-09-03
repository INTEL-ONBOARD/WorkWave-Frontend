import React from 'react';

const View = ({onButtonClick}) => {


    


    return (
        <>
        
        <div className="flex items-start justify-start  bg-gray-100 w-full" style={{"margin-top": "4rem"}}>
                <section class="bg-white 0 w-full">
                    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                        <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl ">
                            Bring your Business to the <span class="text-orange-500">next level.</span>
                        </h2>

                        <p class="max-w-4xl mt-6 text-center text-gray-500 ">
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus hic
                            explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
                        </p>

                        {/* <div class="inline-flex w-full mt-6 sm:w-auto">
                            <a href="#" class="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Sign Up
                            </a>
                        </div> */}
                        <dl class="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt class="order-last text-lg font-medium text-gray-500">Total Sales</dt>

                    <dd class="text-4xl font-extrabold text-orange-600 md:text-5xl">$4.8m</dd>
                    </div>

                    <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt class="order-last text-lg font-medium text-gray-500">Official Addons</dt>

                    <dd class="text-4xl font-extrabold text-orange-600 md:text-5xl">24</dd>
                    </div>

                    <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt class="order-last text-lg font-medium text-gray-500">Total Addons</dt>

                    <dd class="text-4xl font-extrabold text-orange-600 md:text-5xl">86</dd>
                    </div>

                    <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt class="order-last text-lg font-medium text-gray-500">Downloads</dt>

                    <dd class="text-4xl font-extrabold text-orange-600 md:text-5xl">86k</dd>
                    </div>
                </dl>
                    </div>
                    
                </section>
            </div>
                    <div className="flex items-start justify-start min-h-screen bg-gray-100 w-full" style={{"margin-top": "1rem"}}>
                        <section className="bg-white w-full">
                            <div className="container px-6 py-8 mx-auto ">

                            <h2 class="text-lg font-medium text-gray-800 ">Your Services</h2>
                            <p class="mt-1 text-sm text-gray-500 ">These are the all the services that you have listed</p>

                            <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
                    <div>
            

                    <div class="inline-flex rounded-md shadow-sm">
                        <a href="#" aria-current="page" class="px-4 py-2 text-sm font-medium text-orange-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10   focus:text-orange-700">
                            Listed
                        </a>
                        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10   focus:text-orange-700">
                            Unlisted
                        </a>
                        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10  focus:text-orange-700">
                            Draft   
                        </a>
                    </div>

                    </div>
                    <button type="button" class="focus:outline-none text-white bg-orange-600 hover:bg-orange-500 font-medium rounded-lg px-4 py-1.5 me-2 mb-2 text-md" onClick={onButtonClick} >Create a Service</button>

                    </div>

                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg border">
                            <div class="px-4 py-2">
                                <h1 class="text-xl font-bold text-gray-800 uppercase ">NIKE AIR</h1>
                                <p class="mt-1 text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                            </div>

                            <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />

                            <div class="flex items-center justify-between px-4 py-2 bg-orange-400">
                                <h1 class="text-lg font-bold text-white">$129</h1>
                                <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        </>

    );
}

export default View;

