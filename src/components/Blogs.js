import { useState, useEffect } from 'react';
import Post from './Post';
import uniqid from 'uniqid';

const Blogs = () => {
    const [posts, setPosts] = useState(false);

    const getPosts = async () => {
        try {
            const res = await fetch(
                'http://localhost:3000/api/posts/' //'https://obscure-wildwood-18149.herokuapp.com/api/posts/ '
            );
            if (res.status !== 200) {
                console.log(res.status);
                setPosts(false);
            } else {
                const posts = await res.json();
                setPosts(posts);
            }
        } catch (err) {
            setPosts(false);
            console.log(err);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    if (posts) {
        return (
            <div>
                <h1>Blogs</h1>
                {posts.map((post) => {
                    return <Post post={post} key={uniqid()} />;
                })}
            </div>
        );
    } else {
        return (
            <div>
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
