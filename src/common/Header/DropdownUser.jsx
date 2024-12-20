import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import api from "@/lib/api";
import config from "@/lib/endpoint";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { Spinner } from "@/common";

const DropdownUser = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`${config.admin.logout}`);
      if (response.status === 200) {
        navigate("/");
        Cookies.remove("accessToken");
        toast.success(response?.data?.message || "Logged out successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      setIsLoading(false);
      toast.error(response?.data?.error || "Failed to Logout");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          alt="User Avatar"
          className="size-12 rounded-full border-2 border-primary p-1"
        />
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black">
            Mr. Hassan
          </span>
          <span className="block text-xs">Admin</span>
        </span>

        <IoIosArrowDown className="hidden sm:block" />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-60 flex-col rounded-sm border bg-white shadow-lg ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button
          onClick={handleLogout}
          className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <RxExit />
              <span>Log Out</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default DropdownUser;
