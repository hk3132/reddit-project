import React from 'react'

export default function TrendingCommunities(props) {
    return (
        <div className="communities">
            <div className="pages">
                <img className="profileImg" src={props.pic} alt="profile pic"></img>
                <div className="communitiesText">
                    <p className="communitiesName">{props.name}</p>
                    <p className="communitiesMembers">{props.members} members</p>
                </div>
                <button className="joinBtn">JOIN</button>
            </div>

        </div>
    )
}
