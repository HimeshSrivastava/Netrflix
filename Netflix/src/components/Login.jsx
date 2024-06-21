import Header from "./Header"

const Login = () => {
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
      </div>
      <form className="absolute w-[350px] h-[450px] bg-black left-0 right-0 mx-auto my-32 bg-opacity-80 rounded-lg p-10">
        <h1 className="text-white text-3xl font-bold my-4 mx-2 top-10">Sign In</h1>
        <input className="m-2 my-4 p-2 w-[250px] bg-gray-800 text-white" type="text" name="name" placeholder="Name" />
        <input className="p-2 my-4 m-2 w-[250px] bg-gray-800 text-white" type="password" name="password" placeholder="password"/>
        <button className="bg-red-500 text-center text-white rounded-lg w-[250px] mx-2 h-12 my-5">Sign In</button>
        <p className="text-white my-4">New to netflix , please <a href="signup">sign up</a> here</p>
      </form>
    </div>
  )
}

export default Login
