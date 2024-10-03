import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  MdOutlineDashboard,
  BiSolidPackage,
  IoMdClose,
  IoIosArrowUp,
  MdPermMedia,
  FaBlog,
  IoMdContacts,
} from "@/assets/icons";

import MenuLinks from "./MenuLinks";
import { brand_logo } from "@/assets/images";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(
    localStorage.getItem("sidebar-expanded") === "true",
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !sidebarOpen ||
        sidebar.current.contains(e.target) ||
        trigger.current.contains(e.target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidebarOpen]);

  useEffect(() => {
    const handleKeyPress = ({ keyCode }) => {
      if (keyCode === 27 && sidebarOpen) setSidebarOpen(false);
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    document.body.classList.toggle("sidebar-expanded", sidebarExpanded);
  }, [sidebarExpanded]);

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);

  const handleExpandToggle = (e, handleClick) => {
    e.preventDefault();
    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 h-screen w-72 flex-col overflow-y-hidden bg-primary transition-transform duration-300 lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
        <NavLink to="/dashboard">
          <img
            src={brand_logo}
            alt="Logo"
            className="w-40 object-cover md:w-52"
          />
        </NavLink>
        <button
          ref={trigger}
          onClick={handleSidebarToggle}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <IoMdClose size={22} color="#fff" />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          <ul className="mb-6 flex flex-col gap-1.5">
            <li>
              <NavLink
                to="/dashboard"
                className={`group flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ${
                  (pathname === "/" || pathname.includes("dashboard")) &&
                  "bg-white !text-black"
                }`}
              >
                <MdOutlineDashboard />
                Dashboard
              </NavLink>
            </li>

            <MenuLinks isActive={pathname.includes("packages")}>
              {(handleClick, open) => (
                <>
                  <NavLink
                    to="#"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ${
                      pathname.includes("packages") && "bg-white !text-black"
                    }`}
                    onClick={(e) => handleExpandToggle(e, handleClick)}
                  >
                    <BiSolidPackage />
                    Manage Packages
                    <IoIosArrowUp
                      className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform ${
                        open && "rotate-180"
                      }`}
                      size={16}
                      color="#fff"
                    />
                  </NavLink>

                  <div className={`overflow-hidden ${!open && "hidden"}`}>
                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                      {["umrah", "hajj"].map((link) => (
                        <li key={link}>
                          <NavLink
                            to={`/packages/${link}`}
                            className={({ isActive }) =>
                              `group flex items-center gap-2.5 rounded-md px-4 font-medium text-gray-300 text-white duration-300 hover:text-black ${
                                isActive && "!text-white"
                              }`
                            }
                          >
                            {link
                              .split("-")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1),
                              )
                              .join(" ")}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </MenuLinks>

            <MenuLinks isActive={pathname.includes("media")}>
              {(handleClick, open) => (
                <>
                  <NavLink
                    to="#"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ${
                      pathname.includes("media") && "bg-white !text-black"
                    }`}
                    onClick={(e) => handleExpandToggle(e, handleClick)}
                  >
                    <MdPermMedia />
                    Manage Media
                    <IoIosArrowUp
                      className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform ${
                        open && "rotate-180"
                      }`}
                      size={16}
                      color="#fff"
                    />
                  </NavLink>

                  <div className={`overflow-hidden ${!open && "hidden"}`}>
                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                      {["hotels"].map((link) => (
                        <li key={link}>
                          <NavLink
                            to={`/media/${link}`}
                            className={({ isActive }) =>
                              `group flex items-center gap-2.5 rounded-md px-4 font-medium text-gray-300 duration-300 hover:text-black ${
                                isActive && "!text-white"
                              }`
                            }
                          >
                            {link
                              .split("-")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1),
                              )
                              .join(" ")}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </MenuLinks>

            <li>
              <NavLink
                to="/manage-blogs"
                className={`group flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ${
                  (pathname === "/" || pathname.includes("manage-blogs")) &&
                  "bg-white !text-black"
                }`}
              >
                <FaBlog />
                Manage Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacts"
                className={`group flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ${
                  (pathname === "/" || pathname.includes("contacts")) &&
                  "bg-white !text-black"
                }`}
              >
                <IoMdContacts />
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
