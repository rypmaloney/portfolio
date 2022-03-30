import { useState, useEffect } from 'react';

const Blogs = () => {
    const [posts, setPosts] = useState(false);

    const getPosts = async () => {
        try {
            const res = await fetch(
                'https://obscure-wildwood-18149.herokuapp.com/api/posts/ '
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
        }
    };

    useEffect(() => {
        //getPosts();
    }, []);

    return (
        <div>
            <h1>Blogs</h1>
        </div>
    );
};

export default Blogs;
