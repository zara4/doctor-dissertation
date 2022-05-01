import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaWindowClose } from 'react-icons/fa';
import { useAddFilesMutation } from '../generated/graphql';
import {useLocation} from 'react-router-dom';
import Docxtemplater from "docxtemplater";
import PizZip from 'pizzip';

const DropFileInput = () => {
    const locationn = useLocation();
    const [id,setID] = useState(Number);
    const [title, setTitle] = useState('');
    const [size, setSize] = useState('');
    const [location, setLocation] = useState('');
    const [authorId, setAuthorID] = useState(Number);
    const [text,setText]=useState('');
    
    const uid = Math.floor(10000 + Math.random() * 90000);
    const [addFiles] = useAddFilesMutation();
    let navigate = useNavigate(); 
   
    const handleFiles = async () => {
        if(fileList.length !=0){
            const uiiid= fileList[0].size
            setTitle(fileList[0].name)
            setSize(uiiid+"KB")
            setID(uid)
            setAuthorID(locationn.state.id)
            setLocation("sbsjbsjbsjs")
        }
        if(id != 0){
            const response = await addFiles({
            variables:{
                filesdata :{
                    id: uid,
                    title: title,
                    location: location,
                    size: size,
                    authorId: authorId, 
                }
            }
        }).then((response) =>{
            console.log(response)
            alert("File has been added to the database");
            navigate('document', { state: {user:locationn.state,text:text,authorfile:uid,filename:title }});
        }).catch((error) =>{
            console.log(JSON.stringify(error, null, 2));
        })
    }
}
    function handleCancel(){
        navigate(-1);
    }
    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = async(e) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const content = e.target.result;
          var doc = new Docxtemplater(new PizZip(content), {delimiters: {start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j'}});
          var text = doc.getFullText();
          console.log(text)
          setText(text)
        };
        reader.readAsBinaryString(e.target.files[0]);

        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
        }
    }
    
    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
    }
    return (
        <div className="bg-gray-500 h-screen w-screen sm:px-8 md:px-16 sm:py-8">
            <main className="container mx-auto max-w-screen-lg h-fit">
                <article aria-label="File Upload Modal" className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
                    ref={wrapperRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                >
                    <div>
                        <section class="h-full overflow-auto p-8 w-full h-full flex flex-col">
                            <header class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                                <p class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                                    <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
                                </p>
                                <input class="mt-2 rounded-sm px-3 py-1 focus:shadow-outline focus:outline-none" id="hidden-input" type="file" onChange={onFileDrop} />
                            </header>
                        </section>
                    </div>

                    {
                        fileList.length > 0 ? (
                            <div className="drop-file-preview">
                                {
                                    fileList.map((item, index) => (
                                        <div key={index} className="drop-file-preview__item">
                                            
                                            <ul id="gallery" class="flex flex-1 flex-wrap -m-1">
                                                <li id="empty" class="h-full w-full text-center flex flex-col items-center justify-center items-center">
                                                <button className='hover:bg-gray-400 rounded' onClick={() => fileRemove(item)}>
                                                <FaWindowClose size={25}/>
                                            </button>

                                                    <img class="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                                                    <span class="text-small text-gray-500">{item.name}</span>
                                                    <span class="text-small text-gray-500">{item.size}B</span>
                                                </li>
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        ) :
                            <div id="overlay" class="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md">
                                <i>
                                    <svg class="fill-current w-12 h-12 mb-3 text-green-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
                                    </svg>
                                </i>
                                <p class="text-lg text-green-700">Drop files to upload</p>
                            </div>


                    }

                    <footer class="flex justify-end px-8 pb-8 pt-4 absolute bottom-0 right-0 ">
                        <button id="submit" class="rounded-sm px-3 py-1 bg-green-700 hover:bg-green-500 text-white focus:shadow-outline focus:outline-none" onClick={handleFiles}>
                            Upload now
                        </button>
                        <button id="cancel" class="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none" onClick={handleCancel}>
                            Cancel
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    );
}
export default DropFileInput;