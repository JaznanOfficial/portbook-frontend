const Loader = () => {
    return (
        <div className="my-20">
            <div className="flex flex-col items-center justify-center ">
                <div className="w-40 h-40 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
                <p className="text-[3rem] px-5">
                    we're using render free hosting service. this server sleeps after 15 minutes of
                    inactivities. it can take a few minutes to start start. please stay with us!.
                    Thank you.{" "}
                </p>
            </div>
        </div>
    );
};

export default Loader;
