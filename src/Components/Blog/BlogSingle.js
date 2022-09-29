import React from 'react';

const BlogSingle = (props) => {
    const {img, blogTitle, description} = props.data;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img}  alt="Blog Thumbnail"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{blogTitle}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogSingle;