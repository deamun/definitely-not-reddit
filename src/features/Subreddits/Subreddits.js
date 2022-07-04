import React from 'react';

import Card from '../../containers/Card/Card';

const Subreddits = () => {
    return (
        <Card className='subreddit-card'>
            <h2>Subreddits</h2>
            <ul>
                {/* list of buttons, for changing the current subreddit */}
                <li>
                    <button>
                        {/* subreddit icon */}
                        Subreddit name
                    </button>
                </li>
            </ul>
        </Card>
    );
};

export default Subreddits;