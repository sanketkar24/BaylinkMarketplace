
const OurValue = ({ title, description }) => {
      return (
            <div className="w-full px-4 py-6 relative bg-gray-200 rounded-md h-72 my-4">
                  <div className="flex items-center gap-4 flex-row ">
                        <div className="bg-green-600 rounded-full w-10 h-10"></div>
                        <h1 className="text-lg font-semibold">{title}</h1>
                  </div>
                  <p className="my-4">{description}</p>
            </div>
      )
}

export default OurValue;