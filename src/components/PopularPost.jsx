import { useGetPostsQuery } from "../features/posts/postsApi";
import Loader from "./Loader";
import SinglePost from "./SinglePost";

const PopularPost = () => {
    const { data, isLoading } = useGetPostsQuery();

    if (isLoading) {
        return <Loader />;
    }

    // Ensure data is defined and an array
    const posts = Array.isArray(data) ? [...data] : [];

    // Sort the posts based on the length of the like_count array in descending order
    const sortedPosts = posts.sort((a, b) => b.like_count.length - a.like_count.length);

    // Take the top 3 posts with the longest like_count array
    const topPosts = sortedPosts.slice(0, 3);

    return (
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                            <span className="text-primary mb-2 block text-lg font-semibold">
                                Popular Posts
                            </span>
                            <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                                Top 3 Posts with the Longest Like Count
                            </h2>
                            <p className="text-body-color text-base">
                                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-end px-5">
                    {topPosts.map((post, id) => (
                        <SinglePost key={id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularPost;
