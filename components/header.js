import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

import { gsap } from "gsap";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const navigation = [
  { name: "Message", href: "/message" },
  { name: "History", href: "/history" },
  { name: "Mission", href: "/mission" },
  { name: "Projects", href: "/projects", childmenu: [{ name: "Atlantic Rainforest", href: "/projects/atlantic_rainforest" }] },
  { name: "Team", href: "/team" },
  { name: "Planting Trees", href: "/tree_planting" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy_policy" }
];

function Header() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainMenuEnter = (e, name) => {

    let childmenu = e.target.parentNode.querySelector(".childmenu");
    if( childmenu ){
      const childmenu = e.target.parentNode.querySelector(".childmenu");
      gsap.to( childmenu, {autoAlpha: 1, duration: 0.5, ease:"power2.out"});
    }
  }
  const mainMenuLeave = (e, name) => {
    gsap.to( ".childmenu", {autoAlpha: 0, duration: 0.5, ease:"power2.out"});
  }

  useEffect(() => {
    // 最初は非表示
    gsap.set(".childmenu", {autoAlpha: 0});
  }, []);

  return (
    <>
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image loader={imageLoader} className="h-24 w-auto" src="/treesforhope_logo.png" alt="" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={76} height={96} />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map( (item, index) => (
              <div key={item.name} className="relative" onMouseLeave={ (e) => {mainMenuLeave(e, item.name)} }>
                <Link href={item.href} className="text-sm font-semibold leading-6 text-gray-900" onMouseEnter={ (e) => {mainMenuEnter(e, item.name)} } >
                  {item.name}
                </Link>

                { ( item.childmenu ) &&
                    <div className="invisible childmenu w-[150px] absolute inset-x-0 top-6.5 pt-1.5">
                      {item.childmenu?.map(child => (
                        <Link key={child.name} href={child.href} className="block text-sm font-semibold leading-6 text-gray-900">
                          {child.name}
                        </Link>
                      ))}
                    </div>
                }

              </div>
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-24 w-auto" src="treesforhope_logo.png" alt="" />
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map(item => (
                    <div key={item.name}>
                      <Link href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </Link>
                      {item.childmenu?.map(child => (
                        <div key={child.name} className="pl-2" aria-hidden="true">
                          <Link href={child.href} className="text-sm font-semibold leading-6 text-gray-900">
                            - {child.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>{" "}
    </>
  );
}

export default Header;
