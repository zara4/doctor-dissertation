import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline", "source","strikethrough"
,"ol","ul","font","image","fontsize","paragraph","classSpan","lineHeight","superscript","subscript","video","file"
,"cut","copy","paste","hr","table","print","preview","fullsize","undo","redo","brush","left"
,"selectall","copyformat","indent","outdent"],
spellcheck:true,
minHeight: 900,
readonly: false,
};

const RichTextEditor = () => {
  const location = useLocation();
let navigate = useNavigate();
  const [commentBtn, setCommentBtn] = useState(false)
  const [text,setText]= useState("")
  const editor = useRef(null)
  const [content, setContent] = useState(location.state.text)
  const handleBlur = () => {
    setContent(editor.current.value)
  }
  
const handleComment = () =>{
  navigate('addcomments',{state: {text:text, file: location.state.user, authorfile: location.state.authorfile}}); 
}
  const handleChange = () =>{
  setText(window.getSelection().toString()) 
    if(text.length != 0){
      setCommentBtn(true)
    }else setCommentBtn(false)
  }
  return (
    <div style={{minHeight: "40em", cursor: "text" }} onMouseUp={handleChange}>
    <button className={"bg-green-500 px-3 absolute top-100 right-14 rounded" +  (commentBtn ? " invisible" : " visible")} onClick={handleComment}>+</button>
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={handleBlur} 
    />
    </div>
  );
};

export default RichTextEditor;