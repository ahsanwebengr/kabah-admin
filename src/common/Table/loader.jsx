const TableLoader = () => {
  return (
    <div className="mx-auto w-full overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="animate-pulse">
        <div className="bg-gray-3 p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-6 rounded bg-gray-200"></div>
            <div className="h-6 rounded bg-gray-200"></div>
            <div className="h-6 rounded bg-gray-200"></div>
          </div>
        </div>

        {[...Array(5)].map((_, index) => (
          <div key={index} className="border-gray-3 border-b p-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-6 rounded bg-gray-200"></div>
              <div className="h-6 rounded bg-gray-200"></div>
              <div className="h-6 rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableLoader;
