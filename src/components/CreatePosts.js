import React from 'react'
import image from "../img/image.png"
import link from "../img/link.png"

export default function CreatePosts() {
    return (
        <div className="post">
            <h1 className="posts">Popular posts</h1>
            <div className="box1">
                <input placeholder="Create Post" className="create"/>
                <img src={image} alt="addimage" className="image"/>
                <img src={link} alt="addlink" className ="link"/>
            </div>
        </div>
    )
}
