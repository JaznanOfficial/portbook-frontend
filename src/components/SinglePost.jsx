import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
    const { name, img, post: blog, _id } = post || {};
    return (
        <div className="mb-10 overflow-hidden rounded-lg bg-white">
            <img src={img} alt="image" className="w-full" />
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <p className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                        {name}
                    </p>
                </h3>
                <p className="text-body-color mb-7 text-base leading-relaxed">
                    {blog.slice(0, 100)}
                </p>
                <Link
                    to={`/media/${_id}`}
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-primary  py-2 px-7 text-primary font-medium transition hover:text-white"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default SinglePost;
