import { Link } from "react-router-dom";
import Loader from "./Loader";

const SinglePost = ({ post, isLoading }) => {
    const { name, img, post: blog, _id, like_count } = post || {};

    if (isLoading) {
        return <Loader />;
    }

    if (blog?.length === 0) {
        return <h1 className="text-5xl px-5 text-primary"> You have no data </h1>;
    }
    return (
        <div className="mb-10 overflow-hidden rounded-lg bg-white">
            <img src={img} alt="image" className="w-full h-56" />
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <p className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                        {name}
                    </p>
                </h3>
                <p className="text-body-color mb-7 text-base leading-relaxed">
                    {blog?.slice(0, 100)}
                </p>
                <Link
                    to={`/media/${_id}`}
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-primary  py-2 px-7 text-primary font-medium transition hover:text-white"
                >
                    View Details
                </Link>
                <div className={"flex flex-row justify-center items-center"}>
                    <i className="fa-solid fa-heart text-[1rem] text-red-600 ml-3 mt-3"></i>
                    <p className="ml-3 mt-3 text-[1rem]"> {like_count?.length} </p>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
