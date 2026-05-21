import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    alert(
      `sumbmitted qith email:  ${data.email}  and password:  ${data.password}`,
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-full p-10">
      <div className="bg-linear-to-br from-black to-cyan-500 text-white p-6 rounded-lg h-125 w-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label>
              Email
              <input
                type="email"
                placeholder="email@gmail.com"
                className="bg-transparent border border-white rounded px-2 py-1 w-full"
                {...register("email", { required: "Email is required" })}
              />
            </label>

            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label>
              Password
              <input
                type="password"
                placeholder="........"
                className="bg-transparent border border-white rounded px-2 py-1 w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be at most 20 characters",
                  },
                })}
              />
            </label>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button className="bg-white text-black px-4 py-2 rounded cursor-pointer">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
