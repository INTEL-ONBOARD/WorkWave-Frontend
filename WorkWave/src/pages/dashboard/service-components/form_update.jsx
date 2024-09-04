import React from 'react';

const FormUpdate = () => {

    return (
                 
        <>

        <div className=" py-5 bg-white w-full grid md:grid-cols-2 md:gap-6 " style={{"margin-top": "4rem"}}>
        <div className="flex items-center justify-center p-5 w-full">
        <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <p class="text-5xl font-semibold text-orange-500 ">“</p>

                <h1 class="text-2xl font-semibold text-gray-800  lg:text-3xl lg:w-96">
                    Help us improve our productivity
                </h1>

                <p class="max-w-lg mt-6 text-gray-500  ">
                    “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a. ”
                </p>

                <h3 class="mt-6 text-lg font-medium text-orange-500">Mia Brown</h3>
                <p class="text-gray-600 ">Marketing Manager at Stech</p>


            </div>
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

export default FormUpdate;
