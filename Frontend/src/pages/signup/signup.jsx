import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-green-400"> ChatApp</span>
        </h1>

        <form className="mt-7 text-center">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-green-400">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-green-400">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-green-400">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-green-400">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-5 inline-block text-green-400"
          >
            Already have an account? Login
          </a>

          <div className="mb-7">
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
