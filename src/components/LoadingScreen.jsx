

const LoadingScreen = () => {
  return (
    <div className="bg-gray-700 h-[100vh] flex place-items-center flex-col justify-center gap-4">
        <img className="sm:w-[147px] sm:h-[88px]" src="./nube.png" alt="" />
        <h2 className="text-white text-3xl sm:text-[34px]">Weather App</h2>
        <div className="flex gap-4 bg-white px-4 py-2 rounded-2xl sm:w-[368px] sm:flex sm:justify-around">
            <img src="./v1.png" alt="" />
            <img src="./v2.png" alt="" />
            <img src="./v3.png" alt="" />
            <img src="./v4.png" alt="" />
            <img src="./v5.png" alt="" />
            <img src="./v6.png" alt="" />
            <img src="./v7.png" alt="" />
            <img src="./v8.png" alt="" />
        </div>
    </div>
  )
}

export default LoadingScreen

