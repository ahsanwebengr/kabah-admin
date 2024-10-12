import StatCard from "@/common/Cards/StatsCard";
import Breadcrumb from "@/components/Breadcrumb";
import DefaultLayout from "@/layout/DefaultLayout";
import { getStats } from "@/store/features/stats/service";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStatsData } from "./stats-data";

const Dashbaord = () => {
  const dispatch = useDispatch();
  const { stats } = useStatsData();

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);
  return (
    <DefaultLayout>
      <Breadcrumb />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats && stats.length > 0 ? (
          stats.map((stat, ind) => {
            const { title, text, price, icon } = stat;
            return (
              <StatCard
                key={ind}
                title={title}
                text={text}
                price={price}
                icon={icon}
              />
            );
          })
        ) : (
          <div className="col-span-1 text-center md:col-span-2 lg:col-span-3">
            <p className="text-gray-500">
              No statistics available at the moment.
            </p>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Dashbaord;
