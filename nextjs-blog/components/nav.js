import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Articles", href: "##", current: false },
  { name: "FAQ", href: "##", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DarkModeToogle = (props) => {
  return (
    <button
      onClick={props.handleDarkModeChange}
      className="pl-3 opacity-60 hover:opacity-100 transition-opacity ease-in-out duration-150 pr-0"
    >
      {props.darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 dark:fill-white dark:text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )}
    </button>
  );
};

const BookClassButton = () => {
  return (
    <a
      href="https://calendly.com/this-jiyun/english-class"
      className="transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 rounded-md pb-2 pt-2 bg-purple-100 px-3 text-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:bg-white dark:text-black 
                  dark:hover:bg-purple-400 dark:hover:text-white"
    >
      <span className="px-1 sr-only">Book A Trial Lesson</span>
      Start Now
    </a>
  );
};

export default function Nav(props) {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-white dark:bg-black fix">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div>
                    <div className="flex text-purple-700 dark:text-white font-bold">
                      <a href="#">GoodEnough English</a>
                    </div>
                    <div className="dark:text-slate-50 text-gray-900 font-light text-xs text-center sm:text-right">
                      with Yun Ji
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110  text-black underline underline-offset-8 dark:text-white "
                          : "transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 text-gray-500 hover:text-purple-700 hover:drop-shadow dark:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-3">
                <BookClassButton />
              </div>
              <DarkModeToogle
                handleDarkModeChange={props.handleDarkModeChange}
                darkMode={props.darkMode}
              />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
