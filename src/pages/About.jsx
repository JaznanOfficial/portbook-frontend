import ProfileModal from "../components/ProfileModal";

const About = () => {
    return (
        <div>
            <div
                id="about"
                className="bg-white overflow-hidden my-16 container mx-auto flex flex-col md:flex-row-reverse gap-5 justify-center items-center"
            >
                <div className="md:w-1/2">
                    <img
                        className="h-56 sm:h-72 md:h-96 lg:w-full lg:h-full  rounded-lg"
                        src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg"
                        alt=""
                    />
                </div>
                <div className=" mx-auto">
                    <div className="flex justify-end w-full">
                        <label
                            className="btn border border-primary p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-primary mb-5"
                            htmlFor="my-modal"
                        >
                            Edit Profile
                        </label>
                        <ProfileModal id="my-modal" />
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg border">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                User Profile
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                This is some information about the user.
                            </p>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        John Doe
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Email address
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        johndoe@example.com
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Phone number
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        (123) 456-7890
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <div className="text-sm font-medium text-gray-500">Address</div>
                                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        123 Main St
                                        <br />
                                        Anytown, USA 12345
                                    </div>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
