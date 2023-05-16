const PostWrite = () => {
    return (
        <div className="py-20 bg-gray-100">
            <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <input
                    className=" bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    placeholder="Title"
                    type="text"
                />
                <textarea
                    className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                    placeholder="Describe everything about this post here"
                ></textarea>

                <div className=" flex justify-end w-full">
                    <div className="btn border border-primary p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-primary mt-5">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostWrite;
