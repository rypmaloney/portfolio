import { useState, useEffect } from 'react';
import Post from './Post';
import uniqid from 'uniqid';

const Blogs = (props) => {
    const posts = props.posts;

    if (posts) {
        return (
            <div className=''>
                {posts.map((post) => {
                    return <Post post={post} key={uniqid()} />;
                })}
            </div>
        );
    } else {
        return (
            <div className=''>
                <h1>Blogs</h1>
                <p>
                    Hmm... the blog posts don't seem to be loading. Maybe you
                    shouldn't hire Ryan...
                </p>
            </div>
        );
    }
};

export default Blogs;
