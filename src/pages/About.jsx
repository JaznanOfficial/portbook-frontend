import Loader from "../components/Loader";
import ProfileModal from "../components/ProfileModal";
import useFirebase from "../hooks/useFirebase";

const About = () => {
    const { userDetail, dataLoading } = useFirebase();
    console.log(userDetail);

    const { name, email, img, school, address } = userDetail || {};

    if (dataLoading || !userDetail) {
        return <Loader />; 
    }



    return (
        <div>
            <div
                id="about"
                className="bg-white overflow-hidden my-16 container mx-auto flex flex-col md:flex-row-reverse gap-5 justify-center items-center"
            >
                <div className="md:w-1/2">
                    {img ? (
                        <img className="h-96 w-96  rounded-lg" src={img} alt="" />
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <img
                                className="h-56 sm:h-72 md:h-96 lg:w-full lg:h-full  rounded-lg"
                                src="https://cdn.dribbble.com/users/1277985/screenshots/7344831/avatar-02.png"
                                alt=""
                            />
                            <p className="px-5">
                                You havn't any image in database. so this is default image.
                            </p>
                        </div>
                    )}
                </div>
                <div className=" mx-auto">
                    <div className="flex justify-end w-full">
                        <label
                            className="btn border border-primary p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-primary mb-5"
                            htmlFor="my-modal"
                        >
                            Edit Profile
                        </label>
                        <ProfileModal id="my-modal" userDetail={userDetail} />
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
                                        {name}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Email address
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {email}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        School/Collage
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {school}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <div className="text-sm font-medium text-gray-500">Address</div>
                                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {address}
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
