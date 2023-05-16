

const DetailsPost = () => {
    return (
        <div>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img
                                        className="mr-4 w-16 h-16 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                        alt="Jese Leos"
                                    />
                                    <div>
                                        <a
                                            href="#"
                                            rel="author"
                                            className="text-xl font-bold text-gray-900 dark:text-white"
                                        >
                                            Jese Leos
                                        </a>
                                        <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                            Graphic Designer, educator & CEO Flowbite
                                        </p>
                                        <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                            Feb. 8, 2022
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                Best practices for successful prototypes
                            </h1>
                        </header>

                        <figure>
                            <img
                                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                                alt=""
                            />
                        </figure>

                        <p className="my-10">
                            First of all you need to understand how Flowbite works. This library is
                            not another framework. Rather, it is a set of components based on
                            Tailwind CSS that you can just copy-paste from the documentation.
                        </p>

                        <div className="h-36 border-t border-b border-primary py-5 w-full flex justify-center items-center">
                            <i className="fa-solid fa-heart text-[5rem] text-red-600"></i>
                            <i className="fa-regular fa-heart text-[5rem] text-black"></i>
                            <p className="text-5xl ml-3">0</p>
                        </div>

                        <section className="not-format mt-5">
                            <form className="mb-6">
                                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                    <textarea
                                        id="comment"
                                        rows="6"
                                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                        placeholder="Write a comment..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary"
                                >
                                    Post comment
                                </button>
                            </form>

                            <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <footer className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                            <img
                                                className="mr-2 w-6 h-6 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                                alt="Helene Engels"
                                            />
                                            Helene Engels
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Jun. 23, 2022
                                        </p>
                                    </div>
                                </footer>
                                <p>
                                    Thanks for sharing this. I do came from the Backend development
                                    and explored some of the tools to design my Side Projects.
                                </p>
                            </article>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default DetailsPost;