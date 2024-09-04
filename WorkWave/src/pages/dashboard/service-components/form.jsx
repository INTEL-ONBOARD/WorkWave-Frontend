import React from 'react';

const Form = () => {

    return (
                 
        <>
        <div className=" py-5 bg-white w-full grid md:grid-cols-2 md:gap-6 " style={{"margin-top": "3.5rem"}}>
        <div className="flex items-center justify-center p-5 w-full">
            <section class="bg-white ">
                <div class="max-w-3xl px-6 py-16 mx-auto text-center">
                    <h1 class="text-3xl font-semibold text-gray-800 ">Create a New Service</h1>
                    <p class="max-w-md mx-auto mt-5 text-gray-500 ">Offer your expertise to a global audience by creating a new service. Describe the skills and experience you bring to the table, set your pricing, and outline the details of your service to attract potential clients. This is your opportunity to showcase your talents, set clear expectations, and start earning. Fill in the required details below to get started!</p>

                    <div class="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                        <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2  focus:border-orange-400  focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40" placeholder="Email Address" />

                        <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md sm:mx-2 hover:bg-orange-600 focus:outline-none focus:bg-orange-800">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
        </div>
            <div className="flex items-start justify-start p-10 w-full">
                <div className="rounded-lg w-full ">
                {/* max-w-xs overflow-hidden  */}
                    <form class=" w-full">
                    <div class="grid md:grid-cols-2 md:gap-6">

                            <div class="mb-5 ">
                                <label class="block mb-2 text-sm font-medium text-gray-900 " for="user_avatar">Cover Image</label>
                                <input class="block w-full text-sm text-gray-900 border p-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  " aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                                <div class="mt-1 text-sm text-gray-500 " id="user_avatar_help">Please try to uplod reguler size png or jpg image</div>
                            </div>

                            <div class="mb-5">
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select your Category</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  cursor-pointer rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 hover:border-orange-500">
                                    <option value="1">Category-1</option>
                                    <option value="2">Category-2</option>
                                    <option value="3">Category-3</option>
                                    <option value="4">Category-4</option>
                                </select>
                            </div>



                         </div> 
                        <div class="mb-5">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900">Gig Title</label>
                            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "/>
                        </div>
                        <div class="mb-5">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900">Mini Description</label>
                            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "/>
                        </div>
                        <div class="mb-5">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">About the Gig</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 " placeholder="Leave a comment..."></textarea>

                        </div>






                        <button type="submit" class="text-white bg-orange-500 hover:bg-orange-6 00 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create</button>



                    </form>

                </div>
            </div>


          
        </div>
        </>

        


    );
}

export default Form;

// <>
//         <div className=" py-5 bg-white w-full " style={{"margin-top": "4rem"}}>
//             <div className="flex items-start justify-start p-5">
//                 <div className="max-w-xs overflow-hidden rounded-lg w-full ">

//                     <form class="max-w-sm mx-auto w-full">

//                         <div class="mb-5">
//                             <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900">Base input</label>
//                             <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
//                         </div>

//                         <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
//                         <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

//                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
//                         <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
//                         <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>


//                         <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
//                         <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">

//                             <option>United States</option>
//                             <option>Canada</option>
//                             <option>France</option>
//                             <option>Germany</option>
//                         </select>
//                         <button type="submit" class="text-white bg-orange-700 hover:bg-orange-800 mt-5 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Register new account</button>
// {/* 
//                         <div class="grid md:grid-cols-2 md:gap-6">
//                             <div class="relative z-0 w-full mb-5 group">
//                                 <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
//                                 <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
//                             </div>
//                             <div class="relative z-0 w-full mb-5 group">
//                                 <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
//                                 <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
//                             </div>
//                         </div> */}


//                     </form>

//                 </div>
//             </div>


          
//         </div>
//         </>