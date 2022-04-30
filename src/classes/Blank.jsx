import { Fragment } from "react"
import RichEditor from "../container/editor"
import IconEditorHead from "../container/icon-editor-head"
import { useLocation } from 'react-router-dom';
import Matrix from "../container/matrix";

const Blank = () =>{
    const location = useLocation();
    return(
        <Fragment>
            <IconEditorHead/>
            <div class="bg-gray-400 text-gray-800 pb-3 px-24">
                <div class="bg-white ">
                    
                {
                        location.state.matrix ? (
                            <div className="drop-file-preview">
                                <Matrix />
                            </div>
                        ) :
                        <RichEditor />
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default Blank