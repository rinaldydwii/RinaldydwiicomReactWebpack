import React from 'react';
import '../sass/blog.scss';

class Blog extends React.Component {
    render() {
        // console.log("Blog ", this.props);
        
        let blogs = this.props.datalist.map((blog, index) => {
            if (index < 4) {
                
                let date = new Date() - new Date(blog.date);
                date = Math.floor(date/1000/60/60);
                if (date <= 24) {
                    date = date == 1 ? date+" hour ago" : date+" hours ago";
                }
                else if (date > 24 && date <= 168) {
                    date = Math.floor(date/24);
                    date = date == 1 ? date+" day ago" : date+" days ago";
                }
                else if (date > 168 && date <= 720) {
                    date = Math.floor(date/24/7);
                    date = date == 1 ? date+" week ago" : date+" weeks ago";
                } 
                else if (date > 720 && date <= 8544) {
                    date = Math.floor(date/24/30);
                    date = date == 1 ? date+" month ago" : date+" months ago";
                }
                else if (date > 8544) {
                    date = Math.floor(date/24/365);
                    date = date == 1 ? date+" year ago" : date+" years ago";
                }
                
                return (
                    <a className="blog__item" href="https://blog.rinaldydwii.com" key={blog.id}>
                        <div className="item__thumbnail">
                            <img src={blog.thumbnail} alt="Thumbnail" />
                        </div>
                        <div className="item__content">
                            <div className="content__info">
                                <span className="info__time">{date}</span>
                                <span className="info__bull">&bull;</span>
                                <span className="info__article-type">{blog.type}</span>
                            </div>
                            <div className="content__title">{blog.title}</div>
                            <div className="content__description">{blog.description}</div>
                        </div>
                    </a>
                )
            }
        });
        return (
            <section id="blog">
                <div className="container">
                    <div className="section__title"><h1>Blog</h1></div>
                    <div className="section__content">
                        <div className="blog__list">
                            {blogs}
                        </div>
                        <a className="button" href="https://blog.rinaldydwii.com">Go to Blog</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Blog;