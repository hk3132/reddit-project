import React from 'react'
import comment from "../img/comment.png"
import share from "../img/share.png"
import save from "../img/save.png"

export default function Posts(props) {
    let image =`https://api.adorable.io/avatars/40/${props.avatar}.png`
   
    return (
        <div className="post">
    <div className="box2">
        <div className="votes">
            <p className="arrowUp">⬆</p>
            <p className="number">{props.votes}</p>
            <p className="arrowDown">⬇</p>
        </div>
        <div className="content">
            <div className="header">
                <img src={image} alt="avatar" className="avatar" />
                <p className="community">{props.community}</p>
                <p className="person">Posted by {props.user} {props.hours} hours ago</p>
                <button className="join">+ JOIN</button>
            </div>
            <div className="main">
                <p className="title">{props.article}</p>
                <p className="hyperlink"><a href={props.link}>{props.link}</a></p>
                <img src={props.picture} alt="post" className="contentImg"></img>
            </div>
            <div className="footer">
                <p className="comment"><img src={comment} alt="comment" className="commentImg"></img>{props.comments} Comments</p>
                <p className="share"><img src={share} alt="share" className="shareImg"></img>Share</p>
                <p className="save"><img src={save} alt="save" className="saveImg"></img>Save</p>
            </div>
        </div>
    </div>
    </div>
    )
}


