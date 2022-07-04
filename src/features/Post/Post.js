import React from 'react';

import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti';
import { FaRegCommentAlt } from 'react-icons/fa';

import Card from '../../containers/Card/Card';

const Post = () => {
    return (
        <Card>
            <div className='post-wrapper'>
                <div className='post-votes-container'>
                    <button
                        type='button'
                        aria-label='Up vote'
                        className='up-vote'
                    >
                        <TiArrowUpOutline />
                    </button>
                    <p className='post-votes-value'>
                        {/* number of upvotes */}
                        120
                    </p>
                    <button 
                        type='button'
                        aria-label='Down vote'
                        className='down-vote'
                    >
                        <TiArrowDownOutline />
                    </button>
                </div>
                <div className='post-title-container'>
                    <h2 className='post-title'>Post title goes here</h2>
                </div>
                <div className='post-content-container'>
                    <p>Post content goes here</p>
                </div>
                <div className='post-details'>
                    <div className='post-comments'>
                        <button
                            type='button'
                            aria-label='Show comments'
                            className='comment-button'
                        >
                            <FaRegCommentAlt className='comment-button-icon' />
                        </button>
                        <p className='post-comments-value'>
                            {/* number of comments */}
                            45
                        </p>
                    </div>
                    <div className='post-author-details'>
                        <p className='post-author'>Post author goes here</p>
                    </div>
                    <div className='post-age-details'>
                        <p className='post-age'>Posted 'post age' ago</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Post;