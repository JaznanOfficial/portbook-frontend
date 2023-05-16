import { useState } from "react";

const ProfileModal = ({ id }) => {
    

    return (
        <>
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal">
                <section className=" modal-box">
                    <div className="container mx-auto">
                        <div className=" flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white text-center md:px-[60px]">
                                    <div className="mb-10 text-center md:mb-16">
                                        <span className="text-5xl font-bold text-primary bg-secondary">
                                            P
                                        </span>
                                        <span className="text-5xl font-bold text-primary bg-secondary">
                                            ort
                                        </span>
                                        <span className="text-5xl font-bold text-secondary bg-primary">
                                            Book
                                        </span>
                                    </div>
                                    <form>
                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                placeholder="school/college"
                                                className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <textarea
                                                type="text"
                                                placeholder="address"
                                                className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none h-40"
                                            />
                                        </div>

                                        <div className=" modal-action">
                                            <button
                                                type="submit"
                                                className="border-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                                                htmlFor="my-modal"
                                            >
                                                Update{" "}
                                            </button>
                                        </div>
                                        {/* <div className="mb-10 modal-action">
                                            <button
                                                
                                                type="cancel"
                                                className="btn border-primary w-full cursor-pointer rounded-md border bg-black py-3 px-5 text-base text-white transition hover:bg-opacity-90 text-center"
                                                htmlFor="my-modal"
                                            >
                                                {" "}
                                                Cancel{" "}
                                            </button>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProfileModal;
