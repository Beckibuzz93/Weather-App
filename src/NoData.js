import React from 'react';

export default function NoData(props) {
    return (
        <div className="town-and-date data">
            <div className="town-and-day">
                <div className="town-weatherlogo">
                    <h3>{props.error}</h3>
                </div>
            </div>
        </div>
    )
}
