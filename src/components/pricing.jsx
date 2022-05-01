export const Pricing = (props) => {
    return (
        <div id='pricing' class="w-full bg-gray-200 container p-20 text-center content-center">
            <div className='mb-10 text-center content-center'>
                <h1 class="text-green-900 text-4xl font-large mb-4 uppercase">Our Pricing Policies</h1>
                <div class="flex justify-center items-center mb-8">
                    <div class="w-1/6 border-t border-gray-300 "></div>
                </div>
                <p className="text-gray-700 pb-2 text-lg leading-none">A reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div class="mx-2 grid grid-cols-4 gap-4 mb-20 ">
                {props.data
                    ? props.data.map((d) => (
                        <div className="flex justify-center">
                            <div class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
                                <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
                                    {d.plan}
                                </p>
                                <p class="text-gray-900 dark:text-white text-3xl font-bold">
                                    ${d.price}
                                    <span class="text-gray-400 text-sm">
                                        / yr
                                    </span>
                                </p>
                                <p class="text-gray-600 dark:text-gray-100  text-xs mt-4">
                                    {d.desc}
                                </p>
                                <ul class="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
                                {(d.option1)?(<li class="mb-3 flex items-center ">
                                        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                        {d.option1}
                                    </li>
                                    ):(<div></div>)
                                    }
                                    {(d.option2)?(<li class="mb-3 flex items-center ">
                                        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                        {d.option2}
                                    </li>
                                    ):(<div></div>)
                                    }
                                    {(d.option3)?(<li class="mb-3 flex items-center ">
                                        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                        {d.option3}
                                    </li>
                                    ):(<div></div>)
                                    }
                                    {(d.option4)?(<li class="mb-3 flex items-center ">
                                        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                        {d.option4}
                                    </li>
                                    ):(<div></div>)
                                    }
                                    {(d.option5)?(<li class="mb-3 flex items-center ">
                                        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                        {d.option5}
                                    </li>
                                    ):(<div></div>)
                                    }
                                    {(d.option6)?(<li class="mb-3 flex items-center ">
                                        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                        {d.option6}
                                    </li>
                                    ):(<div></div>)
                                    }
                                    {(d.option7)?(<li class="mb-3 flex items-center ">
                                        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                        {d.option7}
                                    </li>
                                    ):(<div></div>)
                                    }
                                    {(d.option8)?(<li class="mb-3 flex items-center ">
                                        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                        {d.option8}
                                    </li>
                                    ):(<div></div>)
                                    }
                                    
                                </ul>
                                <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Choose plan
                                </button>
                            </div>
                        </div>
                    ))
                    : 'loading'}
            </div>
        </div>
    )
}