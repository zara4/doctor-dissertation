import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMutationMutation } from '../generated/graphql';
import { useLocation } from 'react-router-dom';

const Addcomment = () => {
    const location = useLocation();
    const [id, setID] = useState(0);
    const [Originaltext, setOriginaltext] = useState(location.state.text);
    const [reason, setReason] = useState('');
    const [comment, setComment] = useState('');
    const [revision, setRevision] = useState('');
    const [authorfileId, setAuthorfileID] = useState(location.state.authorfile);
    const [reviewerId,setReviewerID]=useState('67868')
   
    const count=()=>{
    const uid = Math.floor(10000 + Math.random() * 90000);
    setID(uid)
    const review= " "+location.state.file.id+" "
    setReviewerID(review)
   }
    const [addComment] = useMutationMutation();
    let navigate = useNavigate();
    const addcomm = async() =>{
        count()
        if(Originaltext === " " || reason === " " || comment === "" || revision === ""){
           alert("Please fill in all the required boxes") 
        }else if(id != 0){
            console.log(Originaltext," ",reason," ",comment," ",revision," ",id," ",authorfileId," ",reviewerId)
            const response = await addComment({
                variables: {
                    commentdata: {
                        id:id,
                        comment : comment,
                        reason:reason,
                        original:Originaltext,
                        revised:revision,
                        Reviewerid:reviewerId,
                        authorfileId:authorfileId
                    }
                }
            }).then((response) => {
                console.log(response)
                alert("Your Comment has been added to the file");
                navigate(-1, { state: location.state });
            }).catch((error) => {
                console.log(JSON.stringify(error, null, 2));
            })
    
        }
    }

    function handleCancel() {
        navigate(-1);
    }
    return (
        <div className="bg-gray-500 h-screen w-screen sm:px-8 md:px-16 sm:py-8">
            <main className="container mx-auto max-w-screen-lg h-fit">
                <article aria-label="File Upload Modal" className="relative h-full flex flex-col bg-white shadow-xl rounded-md">
                <div className="container px-8 mt-20" >
                        <div className="justify-between mx-20 px-20 border-2 rounded-md py-5 max-h-fit mb-5">
                            <div className="w-full p-3 ml-10">
                                <h2 className='w-full text-cyan-900  text-2xl font-weight-600 font-bold'>
                                    Comments Addition
                                </h2>
                                <p className="text-gray-600 text-s italic pb-px">
                                    Including comments would allow author to improve the document.</p>
                            </div>
                            <div className="w-11/12 container justify-center maxpb-px p-5 rounded-md">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Reviewer Comment
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="comment"
                                            type="text"
                                            autoFocus
                                            value={comment}
                                            onChange={e => setComment(e.target.value)}
                                            placeholder="Reviewer Comment" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                            Original Text
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="Originaltext"
                                            value={Originaltext}
                                            onChange={e => setOriginaltext(e.target.value)}
                                            placeholder="Original Text" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Reason
                                        </label>
                                        <div className="relative">
                                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 
                        px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-state"
                                                value={reason}
                                                onChange={e => setReason(e.target.value)}>
                                                <option>Grammatical Mistake</option>
                                                <option>Spelling Mistake</option>
                                                <option>Misuse of Phrase</option>
                                                <option>Editing Errors</option>
                                                <option>Others</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                         Prefered Revision
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                    border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                    focus:border-gray-500"
                                            id="grid-city"
                                            type="text"
                                            value={revision}
                                            onChange={e => setRevision(e.target.value)}
                                            placeholder="Revision" />
                                    </div>
                                </div>
                            </div>
                                </div>
                                </div>

                            <footer class="flex justify-end px-8 pb-8 pt-4 absolute bottom-0 right-0 ">
                                <button id="submit" class="rounded-sm px-3 py-1 bg-green-700 hover:bg-green-500 text-white focus:shadow-outline focus:outline-none" onClick={addcomm}>
                                    AddComment
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
                export default Addcomment;