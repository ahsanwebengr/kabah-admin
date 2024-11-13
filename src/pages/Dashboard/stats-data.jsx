import { useSelector } from "react-redux";
import { StatsData } from "@/store/selector";

import {
  FaBlog,
  FaBox,
  GrCompliance,
  IoMdContacts,
  MdPendingActions,
  LuPackage2,
  TbPackageExport,
  GoPackage,
} from "@/assets/icons";

export const useStatsData = () => {
  const {
    totalContacts = 0,
    completeContacts = 0,
    pendingContacts = 0,
    totalBlogs = 0,
    totalOrders = 0,
    totalHajjPlans = 0,
    totalUmrahPlans = 0,
    totalPlans = 0,
  } = useSelector(StatsData) || {};

  const stats = [
    {
      title: "Total Contacts",
      text: "The total number of contacts in your database.",
      price: totalContacts.toLocaleString("en-US"),
      icon: <IoMdContacts size={28} />,
    },
    {
      title: "Total Blogs",
      text: "The total number of blogs published.",
      price: totalBlogs.toLocaleString("en-US"),
      icon: <FaBlog size={28} />,
    },
    {
      title: "Total Orders",
      text: "The total number of orders processed.",
      price: totalOrders.toLocaleString("en-US"),
      icon: <FaBox size={28} />,
    },
    {
      title: "Complete Contacts",
      text: "Number of contacts that are fully processed.",
      price: completeContacts.toLocaleString("en-US"),
      icon: <GrCompliance size={28} />,
    },
    {
      title: "Pending Contacts",
      text: "Number of contacts awaiting further action.",
      price: pendingContacts.toLocaleString("en-US"),
      icon: <MdPendingActions size={28} />,
    },

    {
      title: "Total Hajj Plans",
      text: "The total number of Hajj plans available.",
      price: totalHajjPlans.toLocaleString("en-US"),
      icon: <LuPackage2 size={28} />,
    },
    {
      title: "Total Umrah Plans",
      text: "The total number of Umrah plans available.",
      price: totalUmrahPlans.toLocaleString("en-US"),
      icon: <TbPackageExport size={28} />,
    },
    {
      title: "Total Plans",
      text: "Total plans including Hajj and Umrah.",
      price: totalPlans.toLocaleString("en-US"),
      icon: <GoPackage size={28} />,
    },
  ];

  return { stats };
};
