import React from 'react';
import "./PostList.scss"
import Post from "../Post/Post";


const PostList = () => {
    const LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="post-list">
            {LIST.map(() =>
                <li className="post-list-block">
                    <Post
                        userName={"Anton"}
                        avatar={"https://jabko.ua/image/cache/catalog/products/2021/03/231700/IMG_8624-420x420.jpg"}
                        content={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000"}
                        favoriteNumber={"123"}
                    />
                </li>
            )}
        </div>
    );
};

export default PostList;