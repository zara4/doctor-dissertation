export const Services = (props) => {
  return (
    <div id="services" class="w-full bg-gradient-to-r from-green-400 to-green-900 container p-16">
      <div className='mb-10 text-center content-center'>
        <h1 class="text-white text-3xl font-large mb-4 uppercase">How It Works ?</h1>
        <div class="flex justify-center items-center mb-8">
          <div class="w-1/6 border-t border-gray-300 "></div>
        </div>
        <p className="text-gray-300 pb-2 text-lg leading-none">A reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
      <div class="mx-2 grid grid-cols-3 gap-4 mb-20 items-center flex justify-center ">
        {props.data
          ? props.data.map((d) => (
            <div class="w-5/6 p-6 rounded shadow-xl">
              <div class="text-sm">
                <div class="flex items-center pb-4">
                  <div className=" bg-gradient-to-r from-green-600 to-green-900 w-30 h-30 rounded-full mr-4">
                    <i className={d.icon} style={{ padding: 30 }}></i>
                  </div>
                  <p class="text-white pb-2 text-lg leading-none">{d.name}</p>
                </div>
                <p class="text-gray-200 pb-2 text-center">{d.text}</p>
                
              </div>
            </div>
          ))
          : 'loading'}
      </div>
    </div>
  )
}