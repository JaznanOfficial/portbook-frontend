import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PostWrite = () => {
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const titleRef = useRef();
    const postRef = useRef();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const postHandler = async (e) => {
        e.preventDefault();
        const name = titleRef.current.value;
        const post = postRef.current.value;

        try {
            setIsLoading(true);

            const formData = new FormData();
            formData.set("key", "5ef8b75ebd5911a1ca073db6b222856d");
            formData.append("image", image);

            const response = await axios.post("https://api.imgbb.com/1/upload", formData);

            const imageUrl = response.data.data.display_url;
            console.log("Image URL:", imageUrl);

            const postData = { name, post, img: imageUrl };
            console.log("Post Data:", postData);

            // Post the postData to the API endpoint
            await axios.post("https://rojnamcha.onrender.com/api/v1/blogs", postData);

            setIsLoading(false);
            toast.success("Post submitted successfully!");

            // Clear input fields
            titleRef.current.value = "";
            postRef.current.value = "";
            setPreviewImage(null);
            setImage(null);
        } catch (error) {
            console.error("Error uploading image or posting data:", error);
            setIsLoading(false);
            toast.error("An error occurred while submitting the post.");
        }
    };

    return (
        <div className="py-20 bg-gray-100">
            <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <input
                    ref={titleRef}
                    className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    placeholder="Title"
                    type="text"
                    required
                />
                <textarea
                    ref={postRef}
                    className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                    placeholder="Describe everything about this post here"
                    required
                ></textarea>
                <div className="flex flex-col">
                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Preview"
                            className="max-h-40 my-4 object-contain"
                        />
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="border border-gray-300 p-2 outline-none"
                        required
                    />
                </div>
                <div className="flex justify-end w-full">
                    <button
                        className="btn border border-primary p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-primary mt-5"
                        onClick={postHandler}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center">
                                <span className="mr-2">Loading...</span>
                                <div className="loader"></div>
                            </div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostWrite;
