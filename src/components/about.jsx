export const About = (props) => {
  return (
    <div id='about' class="flex justify-start p-16">
      <img class=" w-3/6 md:h-auto object-cover md:rounded-none md:rounded-l-lg" src="img/about.jpg" alt="" />
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
      <div class="p-6 flex flex-col justify-start">
        <h1 class="text-gray-900 text-4xl font-large mb-4 uppercase">About Us</h1>
        <p class="text-gray-700 text-base mb-4">
        {props.data ? props.data.paragraph : "loading..."}
        </p>
      </div>
    </div>
  </div>
  );
};