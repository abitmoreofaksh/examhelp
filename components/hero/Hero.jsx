import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200 rounded"
      style={{
        backgroundImage:
          "url(https://examhelp.online/images/header-image/image01.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse text-white">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="pt-2 pl-[58px]">
            <div className="text-xl font-semibold text-red-600 pl-8">
              SCORE HIGHER
            </div>
            <div className="text-md content-center text-black font-semibold pt-1">
              With our Exam Help Online Services
            </div>
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                type="Number"
                placeholder="Mobile Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea placeholder="Details" className="border p-2" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>

        <div className="text-center lg:text-left pr-16 ">
          <h1 className="text-5xl font-bold">Exam Help Online</h1>
          <p className="py-6">
            Exams are the best way to check a student’s knowledge and learning
            about a specific subject. If you are looking to get help in your
            exam, you can hire an exam help online expert. Exams are very
            important because they push students to learn. Exams are essential
            for a student in the process of learning to become proficient. To
            take an exam or a test of an individual is the best way to assess
            what a student has learned about a specific subject. So if you don’t
            have time to prepare well for your exam and want to hire someone who
            can take your exam on your behalf, we strongly recommend using our
            exam help online service and get higher grades in your academics.
          </p>
          <button className="btn  btn-primary">Get Help on Whatsapp</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
