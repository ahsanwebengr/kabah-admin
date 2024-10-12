import { StatsLoading } from "@/store/selector";
import { useSelector } from "react-redux";

const StatCard = ({ title, text, icon, price }) => {
  const isLoading = useSelector(StatsLoading);
  return (
    <article className="rounded-lg bg-white px-4 pb-7 pt-4 shadow">
      {isLoading ? (
        <div className="flex animate-pulse flex-col gap-4">
          <div className="h-6 w-1/2 self-end rounded bg-gray-300"></div>
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-xl bg-gray-300"></div>
            <div className="flex w-full flex-col gap-1">
              <div className="h-5 w-3/4 rounded bg-gray-300"></div>
              <div className="h-4 w-1/2 rounded bg-gray-300"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h5 className="text-end text-sm font-bold text-primary md:text-xl">
            {price}
          </h5>
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-white">
              {icon}
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-sm font-bold text-black md:text-base">
                {title}
              </h6>
              <p className="max-w-50 text-xs font-normal md:text-sm">{text}</p>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default StatCard;
