const SearchForm = () => {
    return (
      <div className="flex justify-around p-4 bg-gray-100 rounded-lg">
        {/* Pick-Up */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-blue-600">Pick - Up</h3>
          <div>
            <label className="block text-gray-600 mt-2">Locations</label>
            <input className="border p-2 w-full rounded" placeholder="Select your city" />
          </div>
          <div>
            <label className="block text-gray-600 mt-2">Date</label>
            <input className="border p-2 w-full rounded" type="date" />
          </div>
          <div>
            <label className="block text-gray-600 mt-2">Time</label>
            <input className="border p-2 w-full rounded" type="time" />
          </div>
        </div>
  
        {/* Drop-Off */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-blue-600">Drop - Off</h3>
          <div>
            <label className="block text-gray-600 mt-2">Locations</label>
            <input className="border p-2 w-full rounded" placeholder="Select your city" />
          </div>
          <div>
            <label className="block text-gray-600 mt-2">Date</label>
            <input className="border p-2 w-full rounded" type="date" />
          </div>
          <div>
            <label className="block text-gray-600 mt-2">Time</label>
            <input className="border p-2 w-full rounded" type="time" />
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchForm;