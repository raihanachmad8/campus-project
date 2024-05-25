import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import useWindowDimensions from "../hooks/useWindowDimension";

const Navigation: React.FC = () => {
  const location = useLocation();
  const [stateActive, setStateActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [onTop, setOnTop] = useState(true);
  const { width } = useWindowDimensions();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;
      if (newY > 20) {
        setOnTop(false);
        document.querySelector("nav")?.classList.add("bg-white");
        document
          .querySelector("h1.title")
          ?.classList.replace("text-white", "text-black");
        document
          .querySelector("button#menu")
          ?.classList.replace("text-white", "text-black");
      } else {
        setOnTop(true);
        document.querySelector("nav")?.classList.remove("bg-white");
        document
          .querySelector("h1.title")
          ?.classList.replace("text-black", "text-white");
        document
          .querySelector("button#menu")
          ?.classList.replace("text-black", "text-white");
      }

      if (newY > 1800 ) {
        setStateActive("Showcase");
      } else if (newY > 900) {
        setStateActive("About");
      } else {
        setStateActive("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, open]);

  useEffect(() => {
    // Add or remove the no-scroll class to body
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <>
      <nav className="fixed z-[99] w-full bg-gray-project transition-all duration-500">
        <div className="flex justify-between items-center max-w-7xl w-full mx-auto py-7 px-5">
          <h1
            className={`title text-2xl font-medium text-center select-none ${
              open && onTop ? "text-black" : "text-white"
            }`}
          >
            Campus-Project
            <span className="text-indigo-500 text-base">.cloud</span>
          </h1>
          <ul className="items-center justify-center gap-7 self-center hidden lg:flex">
            <li
              className={`font-medium text-md select-none ${
                stateActive == "Home" ? "text-indigo-500" : "text-gray-500"
              }`}
            >
              <a draggable={false} href="/#jumbotron">
                Home
              </a>
            </li>
            <li
              className={`font-medium text-md select-none ${
                stateActive == "About" ? "text-indigo-500" : "text-gray-500"
              }`}
            >
              <a draggable={false} href="/#about">
                About
              </a>
            </li>
            <li
              className={`font-medium text-md select-none text-gray-500 ${
                stateActive == "Showcase" ? "text-indigo-500" : "text-gray-500"
              }`}
            >
              <a draggable={false} href="/#showcase">
                Showcase
              </a>
            </li>
            <li className={`font-medium text-md select-none text-gray-500`}>
              <a
                draggable={false}
                href="https://stats.uptimerobot.com/vXneDveFtX"
                target="_blank"
                rel="noopener"
              >
                Diagnostic
              </a>
            </li>
          </ul>
          {width < 1024 && (
            <div>
              <Button
                id="menu"
                onClick={handleClick}
                optionalStyles={`font-medium hover:underline ${
                  open && onTop ? "text-black" : "text-white"
                }`}
              >
                {open ? "Close" : "Menu"}
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar Mobile */}
      {width < 1024 && (
        <aside
          className={`fixed top-0 left-0 w-screen bg-white h-screen z-10 py-24 px-3 transition-all duration-500 ${
            open ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <ul className="h-full items-center justify-center gap-10 self-center flex flex-col">
            <li
              onClick={handleClick}
              className={`font-medium text-xl select-none ${
                stateActive == "Home" ? "text-indigo-500" : "text-gray-500"
              }`}
            >
              <a draggable={false} href="/#jumbotron">
                Home
              </a>
            </li>
            <li
              onClick={handleClick}
              className={`font-medium text-xl select-none ${
                stateActive == "About" ? "text-indigo-500" : "text-gray-500"
              }`}
            >
              <a draggable={false} href="/#about">
                About
              </a>
            </li>
            <li
              onClick={handleClick}
              className={`font-medium text-xl select-none text-gray-500 ${
                stateActive == "Showcase" ? "text-indigo-500" : "text-gray-500"
              }`}
            >
              <a draggable={false} href="/#showcase">
                Showcase
              </a>
            </li>
            <li
              onClick={handleClick}
              className={`font-medium text-xl select-none text-gray-500`}
            >
              <a
                href="https://stats.uptimerobot.com/vXneDveFtX"
                target="_blank"
                rel="noopener"
              >
                Diagnostic
              </a>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navigation;
