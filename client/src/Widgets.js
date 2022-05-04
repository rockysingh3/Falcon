import React from 'react';
import './Widgets.css';

import {
    TwitterTimelineEmbed,
} from 'react-twitter-embed';


import SearchIcon from '@mui/material/TextField';

function Widgets() {

    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder='Search Twitter'/>
            </div>


            <div className='widgets__widgetContainer'>
                <h1>What's happening</h1>

                <TwitterTimelineEmbed 
                    sourceType='profile'
                    screenName='rockyinthecity'
                    options={{height: 800}}
                />

            </div>



        </div>
    )

}


export default Widgets;