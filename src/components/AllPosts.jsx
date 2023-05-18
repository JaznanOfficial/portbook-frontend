import { useGetPostsQuery } from "../features/posts/postsApi";
import Loader from "./Loader";
import SinglePost from "./SinglePost";

const AllPosts = () => {
    const { data, isLoading, isError, error } = useGetPostsQuery();

    console.log(data);

    if (isLoading) {
        return <Loader />;
    }

    if (data?.length === 0) {
        return <h1 className="text-5xl px-5 text-primary"> You have no data </h1>;
    }

    return (
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gray-100">
            <div className="container mx-auto">
                <div className=" flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                            <span className="text-primary mb-2 block text-lg font-semibold">
                                Our Posts
                            </span>
                            <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                                Our Recent Posts
                            </h2>
                            <p className="text-body-color text-base">
                                There are many variations of passages of Lorem Ipsum available but
                                the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 justify-center items-end px-5 ">
                    {data?.map((post, id) => (
                        <SinglePost post={post} key={id} isLoading={isLoading} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllPosts;
