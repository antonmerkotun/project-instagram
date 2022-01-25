import React from 'react';
//style
import "./Main.scss"
import Post from "../../components/Post/Post";

const Main = () => {
    return (
        <div className="page-main">
            <div className="post-feed">
                <Post
                    userName={"Anton"}
                    avatar={"https://jabko.ua/image/cache/catalog/products/2021/03/231700/IMG_8624-420x420.jpg"}
                    content={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000"}
                />
            </div>
            <div className="list-people">
                <div className="list-people-fixed">fix
                </div>
            </div>
        </div>
    );
};

export default Main;