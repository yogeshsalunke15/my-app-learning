
import React from "react";

function ProfileInfo(props) {

        return(
            <div>
                <h2>Displaying User Information from Store !</h2>
                <div>
                    <label>Name:</label> <span>{props.user.name}</span>
                </div>
                <div>
                    <label>Age:</label> <span>{props.user.age}</span>
                </div>
                <div>
                    <label>Location:</label> <span>{props.user.location}</span>
                </div>
                {props.user?.religion && 
                    <div>
                        <label>Religion:</label> <span>{props.user.religion}</span>
                    </div> 
                }
                {props.user?.education && 
                    <div>
                        <label>Education:</label> <span>{props.user.education}</span>
                    </div> 
                }
                <button onClick={props.updateUserInfo}> Now you can update the Same User Profile !</button>
            </div>
        )
}

export default ProfileInfo;