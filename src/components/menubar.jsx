/*import { Link } from "react-router-dom";
*/
import brandLogo from "../assets/images/ecoSmart.svg"
import {Link} from "react-router";

export default function Menubar() {
  return (
      <>
        <div className="flex h-screen w-16 flex-col justify-between border-e border-gray-100 bg-white">
          <div>
            <div className="inline-flex size-16 items-center justify-center">
      <span className="grid size-10 place-content-center">
        <img src={brandLogo}/>
      </span>
            </div>

            <div className="border-t border-gray-100">
              <div className="px-2">
                <div className="py-4">
                    <Link to="/about"
                       className="t group relative flex justify-center rounded-sm bg-blue-50 px-2 py-1.5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="0.5em" viewBox="0 0 24 24" className="size-7 opacity-75" >
                            <path fill="#31a044" d="M16.008 19q-.356 0-.586-.232q-.23-.233-.23-.576v-4.184q0-.356.232-.586q.233-.23.576-.23h4.185q.356 0 .585.233T21 14v4.185q0 .356-.232.585t-.576.23zM12 10.808q-.343 0-.575-.232T11.192 10V5.815q0-.355.233-.585T12 5h8.192q.344 0 .576.232t.232.576v4.185q0 .355-.232.585q-.233.23-.576.23zM3.808 19q-.343 0-.576-.232T3 18.192v-4.184q0-.356.232-.586t.576-.23H12q.343 0 .576.232t.232.576v4.185q0 .356-.232.585T12 19zm.007-8.192q-.355 0-.585-.232T3 10V5.815q0-.355.232-.585T3.808 5h4.185q.355 0 .585.232t.23.576v4.185q0 .355-.232.585q-.233.23-.576.23zm8.377-1H20V6h-7.808zM4 18h7.808v-3.808H4zm12.192 0H20v-3.808h-3.808zM4 9.808h3.808V6H4zm3.808 0"></path>
                        </svg>

                        <span
                            className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-green-800 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              Dashboard
            </span>
                    </Link>
                </div>

                  <ul className="space-y-1 border-t border-gray-100 pt-4">
                      <li>
                          <Link  to="/ecosmartform"
                             className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-400 hover:bg-gray-50 hover:text-gray-700">

                              <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="size-7 opacity-75">
                                  <path fill="#31a044" d="M15.5 7A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-6A2.5 2.5 0 0 1 9.5 7zm-6 1A1.5 1.5 0 0 0 8 9.5v6A1.5 1.5 0 0 0 9.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 8zm1 5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m5 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zM9.65 2.085a2.5 2.5 0 0 1 3.061 1.768L13.286 6h-1.035l-.506-1.888a1.5 1.5 0 0 0-1.837-1.06L4.112 4.604a1.5 1.5 0 0 0-1.06 1.837l1.553 5.795A1.5 1.5 0 0 0 6 13.347v.999a2.5 2.5 0 0 1-2.361-1.85L2.086 6.7a2.5 2.5 0 0 1 1.768-3.062zM10.5 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m5 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"></path>
                              </svg>
                      <span
                          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                EcoSmart Form
              </span>
                    </Link>
                  </li>

                  <li>
                    <a href="#"
                       className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                      </svg>

                      <span
                          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                Billing
              </span>
                    </a>
                  </li>

                  <li>
                    <a href="#"
                       className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>

                      <span
                          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                Invoices
              </span>
                    </a>
                  </li>

                  <li>
                    <a href="#"
                       className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 opacity-75" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>

                      <span
                          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                Account
              </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
            <Link to="/about"
               className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" className="size-7 opacity-75 ">
                    <path fill="#31a044" fillRule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z"></path>
                </svg>
              <span
                  className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-green-800 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
        About
      </span>
            </Link>
          </div>
        </div>
      </>
  );
}