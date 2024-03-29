import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const {title, cover, author, author_img, reading_time,posted_date, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-[60px] h-[50px]' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h5 className='text-2xl font-bold'>{author}</h5>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;