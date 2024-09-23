import {  useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl md:text-4xl font-semibold text-black capitalize">
        {pathnames[pathnames.length - 1]?.replace('-', ' ')}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
         
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <li key={index} className="font-medium text-primary capitalize">
                {value.replace('-', ' ')}
              </li>
            ) : (
              <li key={index}  className="font-medium capitalize">
                  {value.replace('-', ' ')} /
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
