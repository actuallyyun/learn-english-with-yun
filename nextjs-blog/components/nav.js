import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Articles', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'FAQ', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DarkModeToogle=(props)=>{
    return (
        <button onClick={props.handleDarkModeChange} className='text-gray-700 dark:text-white'>darkMode</button>
    )
}

const BookClassButton=()=>{
    return (
        <button
                  type="button"
                  className="transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 rounded-md pb-2 pt-2 bg-purple-700 px-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:bg-white dark:text-black 
                  dark:hover:bg-purple-700 dark:hover:text-white"
                >
                  <span className="px-1 sr-only">Book A Trial Lesson</span>
                Start Now
                </button>
    )
}

export default function Nav(props) {
  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-white dark:bg-black" >
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
                <img
                    className="h-8 w-auto lg:block"
                    src="/images/octopus-svgrepo-com.svg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/images/octopus-svgrepo-com.svg"
                    alt="Your Company"
                  />
                  <div >
                    <div className='flex text-gray-900 dark:text-white font-bold'>GoodEnough English</div>
                    <div className='dark:text-slate-50 text-gray-900 font-light text-xs text-right'>with Yun Ji</div>
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
                          item.current ? 'transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 bg-purple-700 text-slate-50 dark:text-white ' : 'transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 text-gray-900 hover:text-purple-700 hover:drop-shadow dark:text-white' ,
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
             
             <BookClassButton/>

              </div>
              <DarkModeToogle  handleDarkModeChange={props.handleDarkModeChange}/>
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
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
