import React from "react";
import '../css/Main.css';

export default function Mai() {


    return(
        <div className="mainContainer">
            <div className="mainButtonContainer">
                <div className="mainButtonsLeft">
                    <div className="mainButton">Create New Kit</div>
                    <div className="mainButton">Manage Kits</div>
                </div>
                <div className="mainButtonsRight">
                    <div className="mainButton">Manage Students</div>
                    <div className="mainButton">View Kit Status</div>
                </div>
            </div>
        </div>
    )
}