export const Testimonials = (props) => {
  return (
    <div id='testimonials' class="bg-white container mx-10 my-20 pb-10">
      <div className='mb-10 text-center content-center'>
        <h1 class="text-green-700 text-3xl font-large mb-4 uppercase">What our clients say</h1>  
          <div class="flex justify-center items-center">
    <div class="w-1/6 border-t border-gray-300 "></div>
  </div>
      </div>
      <div class="grid grid-cols-3 gap-2 mb-20 px-20">
        {props.data
          ? props.data.map((d) => (
            <div class="w-5/6 p-6 my-6 border border-green-100 rounded shadow-xl">
              <div class="flex items-center">
                <img class="w-30 h-30 rounded-full mr-4" src={d.img} alt="Client" />
                <div class="text-sm">
                  <p class="text-gray-900 pb-2 text-lg leading-none">{d.name}</p>
                  <p class="text-gray-600 pb-2">{d.text}</p>
                </div>
              </div>
            </div>
          ))
          : 'loading'}
      </div>
    </div>
  )
}
