import React from 'react'
import './write.css'

function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="images/img-5.jpg " alt=" "></img>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className=" writeIcon fas fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{display:"none"}}>
                    </input>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>

                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Start Blogging!" type="text" className="writeInput writeText"></textarea>

                </div>
                <button className="writeSubmit">Publish </button>
            </form>
        </div>
    )
}

export default Write
