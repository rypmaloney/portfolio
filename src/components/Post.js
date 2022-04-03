const Post = (props) => {
    const { post } = props;
    const body = post.body_text;

    return (
        <div className='post'>
            <h3>{post.title}</h3>
        </div>
    );
};

export default Post;
