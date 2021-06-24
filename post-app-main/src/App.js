import * as React from 'react';
import{MdKeyboardArrowRight,MdDeleteForever} from "react-icons/md";
import{v4 as uuid} from "uuid";

function App() {

  const [postList, setPostList] = React.useState([]);

  return (<div className = "bg-gray-200 h-screen bg-cover" >
    <header className = "bg-white p-6">
      <span className = "text-4xl" > React tabs app </span>
    </header> 
    <main className = "flex flex-col md:flex-row md:justify-around gap-10 items-center md:my-10 mx-1 my-00 xl:mx-20">
      <div className = "max-w-lg md:w-1/2 w-2/3 xl:w-1/3">
        <PostForm onSubmit = {
          (item) => {
          setPostList([...postList, item]);
          }}/>    
      </div>
      <div
      className="flex flex-col gap-5 items-center max-w-lg md:w-1/2 w-2/3 xl:w-1/3">
        {postList.map(({title, body, _id}) =>(
        <Post 
          onDelete ={()=>{
            console.log("push")
            setPostList(postList.filter((item) => item._id !== _id));
          }}
          key = {_id}
          title = {title}
           body = {body}
           />))} 
           
      </div>
      
    </main>
  </div>);
}

function PostForm({onSubmit})
  { const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState("")
    return ( 
    <form
      className={"flex flex-col mt-10 bg-gradient-to-r from-lightBlue-500 to-indigo-500 rounded-xl"} 
      onSubmit = {
      (e) => {
        e.preventDefault();
        const _id = uuid();
          onSubmit({title , body,_id })
          setTitle("");
          setBody("");
        }}>
      <div className="p-6 ">
        <h3 className="text-3xl text-white uppercase text-left ml-4"> Add post </h3>
      </div>
      <div className="flex flex-col bg-white p-4">
        <label 
          className="text-gray-500 capitalize pl-2"
         htmlFor = "title"> Title 
        </label>
    
        <input 
          className="p-2 focus:bg-blue-100 outline-none border-2"
          id = "title" 
          value = {title} 
          onChange = {(e) => setTitle(e.target.value)}
          required/>
        <label
          className="text-gray-500 capitalize pl-2"
          htmlFor = "body">Content
        </label> 
    
        <input
          className="p-2 focus:bg-blue-100 outline-none border-2"
          id = "body"
          value = {body}
          onChange = {(e) => setBody(e.target.value)}
          required/>
        </div>
      <button
        className =" text-white uppercase hover:bg-lightBlue-500 hover:text-lightBlue-100 p-4 rounded-b-xl flex justify-between items-center"
        type = "submit" > 
        <span>Submit</span>
        <MdKeyboardArrowRight/> 
      </button> 
    </form>)
  }

function Post({title , body, onDelete}) {
  return (
  <div
  className = "bg-white rounded-xl shadow-lg w-full">
    <div
    className = "bg-gradient-to-tr from-cyan-400 to-lightBlue-500 text-white rounded-xl rounded-b-none px-6 py-2 flex justify-between items-center">
      <div
      className = "uppercase" > {title} 
      </div>
      <button  onClick={onDelete}>
        <MdDeleteForever title="Delete post" />
      </button>
    </div>
    <div 
    className = "px-auto py-auto" >
      {body}
    </div> 
  </div> )
  }

export default App;