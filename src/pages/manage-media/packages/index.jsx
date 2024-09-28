import AddMedia from "@/components/add-media";
import Breadcrumb from "@/components/Breadcrumb";
import DefaultLayout from "@/layout/DefaultLayout";
import { useEffect } from "react";
import { getPackages } from "@/store/features/packages/service";
import { useDispatch, useSelector } from "react-redux";
import { PackagesData, PackagesLoading } from "@/store/selector";
import MediaCard from "@/common/Cards/MediaCard";
import MediaCardSkeleton from "@/common/Cards/MediaCardSkelton";

const Packages = () => {
  const dispatch = useDispatch();
  const { plans = [] } = useSelector(PackagesData) || {};
  const isLoading = useSelector(PackagesLoading);

  useEffect(() => {
    dispatch(getPackages({ page: 1, limit: 1000 }));
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Breadcrumb />
      <AddMedia />

      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <MediaCardSkeleton key={index} />
          ))
        ) : plans.length > 0 ? (
          plans?.map((plan) => <MediaCard key={plan?._id} media={plan} />)
        ) : (
          <p className="col-span-full text-center text-lg text-gray-500">
            No plans available
          </p>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Packages;
