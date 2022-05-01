import { Fragment } from "react"
import Doctemplate from "./document-template"
import Headbar from "../container/headbar"
import {useLocation} from 'react-router-dom';

const Home = () =>{
    const location = useLocation();
    return (
        <Fragment>
         <Headbar type={location.state.name}/>
         <Doctemplate type={location.state}/>
        </Fragment>
    )
}
export default Home 