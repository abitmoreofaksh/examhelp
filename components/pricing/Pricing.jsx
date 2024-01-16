const Pricing = () => {
  return (
    <div
      className="bg-gray-100 min-h-[60vh] py-12 flex flex-col gap-8 items-center justify-center "
      style={{
        background: "url(https://examhelp.online/images/blue-pattern.jpg)",
      }}
    >
      <div className="text-4xl md:text-5xl font-extrabold text-white text-center md:text-left">
        Assignment Pricing
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-blue-200"></div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Executable Code
            </h2>
            <p className="text-gray-600 mb-6">12 Hours to 3 Days</p>
            <p className="text-4xl font-bold text-gray-800 mb-6">$25</p>
            <ul className="text-sm text-gray-600 mb-6">
              <li className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Course Access
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Online Examination
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Free Teacher Consulting
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Automatic Cloud Backups
              </li>
            </ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-green-200"></div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Well-Commented Code
            </h2>
            <p className="text-gray-600 mb-6">12 Hours to 3 Days</p>
            <p className="text-4xl font-bold text-gray-800 mb-6">$30</p>
            <ul className="text-sm text-gray-600 mb-6">
              <li className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Course Access
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Online Examination
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Free Teacher Consulting
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Automatic Cloud Backups
              </li>
            </ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-purple-200"></div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Well-Commented Code & Report
            </h2>
            <p className="text-gray-600 mb-6">12 Hours to 5 Days</p>
            <p className="text-4xl font-bold text-gray-800 mb-6">$40</p>
            <ul className="text-sm text-gray-600 mb-6">
              <li className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Course Access
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Online Examination
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Free Teacher Consulting
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Automatic Cloud Backups
              </li>
            </ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
