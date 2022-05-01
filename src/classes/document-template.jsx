import { useNavigate } from "react-router-dom";

const Doctemplate = (props) => { 
  let navigate = useNavigate();
  const handleDocument = (text) =>{
    if(text === "upload")
    navigate('Upload', { state: props.type });
    else if (text === "blank")
    navigate('document',{ state: {user:props.type,text:"" }})
  }
    return (
        <div className="content-center m-10">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Manage your Documents</h5>
            <div className="flex m-3 content-center">
                <div class="flex justify-left">
                    <a class="block p-6 m-3 rounded-lg shadow-lg bg-white max-w-sm" onClick={() =>handleDocument("upload")}>
                        <p class="text-gray-700 text-base mb-4 justify-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p> <h5 class="text-gray-900 text-l leading-tight font-medium mb-2">Upload New Document</h5>
                    </a>
                </div>
                <div class="flex justify-left">
                    <a class="block p-6 m-3 rounded-lg shadow-lg bg-white max-w-sm" href="Upload">
                        <p class="text-gray-700 text-base mb-4 justify-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p> <h5 class="text-gray-900 text-l leading-tight font-medium mb-2">Template Document</h5>
                    </a>
                </div>
                <div class="flex justify-left">
                    <a class="block p-6 m-3 rounded-lg shadow-lg bg-white max-w-sm" onClick={()=>handleDocument("blank")}>
                        <p class="text-gray-700 text-base mb-4 justify-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p> <h5 class="text-gray-900 text-l leading-tight font-medium mb-2">Blank Document</h5>
                    </a>
                </div>
            </div>
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Recent Document</h5>
         <hr class="w-1/6 border-t border-gray-300"/>
         <div>
         <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last Date Updated
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Size
              </th>
            </tr>
          </thead>
          <tbody>
            {props.type.files.map((files,i) =>(
              <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {files.title}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Apr 28, 2022
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {files.size}
              </td>
            </tr>
            ))}
            
           </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
         </div>
        </div>
    )
}
export default Doctemplate 