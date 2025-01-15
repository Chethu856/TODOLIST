import AddTodo from "./Components/Addtodo";
import Header from "./Components/Header";
import'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Todolist from "./Components/Todolist";




export default function App() {
    return (
        <>
        <Header/>
        <AddTodo/>
        <Todolist/>
        <ToastContainer/>

        </>
    )
}
