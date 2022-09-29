import React, { useEffect, useState } from 'react';
import BlogSingle from './BlogSingle';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
            {
                blogs.map(blog => <BlogSingle data={blog} key={blog.id}></BlogSingle>)
            }
        </div>
    );
};

export default Blog;