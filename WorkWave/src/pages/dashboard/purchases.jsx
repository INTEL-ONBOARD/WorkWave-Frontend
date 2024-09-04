import React from 'react';

const Purchases = () => {
    return (
        <div className="flex items-center justify-center mt-10 py-10 bg-white"style={{"margin-top":"3.5rem"}}>      
            <div className="w-full  rounded-lg text-center flex flex-col items-center justify-center p-5  ">
                <div class=" p-4 bg-white rounded-lg md:p-8 mb-5" id="about" role="tabpanel" aria-labelledby="about-tab">
                    <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 ">Powering innovation & trust at 200,000+ companies worldwide</h2>
                    <p class="mb-3 text-gray-500 ">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
                    <a href="#" class="inline-flex items-center font-medium text-orange-600 hover:text-orange-800 ">
                        Learn more
                        <svg class=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </a>
                </div>
                <div class="relative overflow-x-auto sm:rounded-lg w-full ">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Purchase
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Amount
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Purchase Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Completion Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b ">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                    <img class="w-10 h-10 rounded-full" src="https://i.pinimg.com/originals/7d/c3/b4/7dc3b4007d3cfb3b55c18012db637498.jpg" alt="Purchase image"/>
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">Flyer Design</div>
                                        <div class="font-normal text-gray-500">I will do flyer designes</div>
                                    </div>  
                                </th>
                                <td class="px-6 py-4">
                                    Electronics
                                </td>
                                <td class="px-6 py-4">
                                    $500
                                </td>
                                <td class="px-6 py-4">
                                    01/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    01/02/2023
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Completed
                                    </div>
                                </td>

                            </tr>
                            <tr class="bg-white border-b 0  hover:bg-gray-50 ">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    <img class="w-10 h-10 rounded-full" src="https://img.elegantflyer.com/templates/preview/sunday-service-premium-psd-flyer-template-84693.jpg" alt="Purchase image" />
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">Graphic designing</div>
                                        <div class="font-normal text-gray-500">I will do Graphic designing</div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    Furniture
                                </td>
                                <td class="px-6 py-4">
                                    $300
                                </td>
                                <td class="px-6 py-4">
                                    01/05/2023
                                </td>
                                <td class="px-6 py-4">
                                    01/06/2023
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-yellow-500 me-2"></div> Pending
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Purchases;
