/*import { Link } from "react-router-dom";
 */
import brandLogo from "../assets/images/ecoSmart.svg";
import { Link } from "react-router";

export default function Menubar() {
  return (
    <>
      <div className="flex h-screen w-16 flex-col justify-between border-e border-gray-100 bg-white">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <Link to="/about">
              <span className="grid size-10 place-content-center">
                <img src={brandLogo} />
              </span>
            </Link>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-2">
              <div className="py-4">
                <Link
                  to="/dashboard"
                  className="t group relative flex justify-center rounded-sm bg-blue-50 px-2 py-1.5 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.5em"
                    height="0.5em"
                    viewBox="0 0 24 24"
                    className="size-7 opacity-75"
                  >
                    <path
                      fill="#31a044"
                      d="M16.008 19q-.356 0-.586-.232q-.23-.233-.23-.576v-4.184q0-.356.232-.586q.233-.23.576-.23h4.185q.356 0 .585.233T21 14v4.185q0 .356-.232.585t-.576.23zM12 10.808q-.343 0-.575-.232T11.192 10V5.815q0-.355.233-.585T12 5h8.192q.344 0 .576.232t.232.576v4.185q0 .355-.232.585q-.233.23-.576.23zM3.808 19q-.343 0-.576-.232T3 18.192v-4.184q0-.356.232-.586t.576-.23H12q.343 0 .576.232t.232.576v4.185q0 .356-.232.585T12 19zm.007-8.192q-.355 0-.585-.232T3 10V5.815q0-.355.232-.585T3.808 5h4.185q.355 0 .585.232t.23.576v4.185q0 .355-.232.585q-.233.23-.576.23zm8.377-1H20V6h-7.808zM4 18h7.808v-3.808H4zm12.192 0H20v-3.808h-3.808zM4 9.808h3.808V6H4zm3.808 0"
                    ></path>
                  </svg>

                  <span className="invisible absolute inset-s-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-green-800 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Dashboard
                  </span>
                </Link>
              </div>

              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <Link
                    to="/ecosmartform"
                    className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-400 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="size-7 opacity-75"
                    >
                      <path
                        fill="#31a044"
                        d="M15.5 7A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-6A2.5 2.5 0 0 1 9.5 7zm-6 1A1.5 1.5 0 0 0 8 9.5v6A1.5 1.5 0 0 0 9.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 8zm1 5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m5 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zM9.65 2.085a2.5 2.5 0 0 1 3.061 1.768L13.286 6h-1.035l-.506-1.888a1.5 1.5 0 0 0-1.837-1.06L4.112 4.604a1.5 1.5 0 0 0-1.06 1.837l1.553 5.795A1.5 1.5 0 0 0 6 13.347v.999a2.5 2.5 0 0 1-2.361-1.85L2.086 6.7a2.5 2.5 0 0 1 1.768-3.062zM10.5 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m5 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"
                      ></path>
                    </svg>
                    <span className="invisible absolute inset-s-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      EcoSmart Form
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <Link
            to="/about"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <svg
              width="0.5em"
              height="0.5em"
              className="size-7 opacity-75 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#31a044"
                fill-rule="evenodd"
                d="M1.25 8.75v8.5h1.5v-5.452l.096-.106c.572-.632 1.306-1.442 2.654-1.442c.29 0 .648.092.912.259c.255.16.338.327.338.491v6.25h1.5v-5.995c.522-.514 1.224-1.005 2.25-1.005c.29 0 .648.092.912.259c.255.16.338.327.338.491v6.25h1.5V11c0-.836-.5-1.42-1.036-1.759A3.3 3.3 0 0 0 10.5 8.75c-1.197 0-2.093.449-2.745.95a2.5 2.5 0 0 0-.541-.459A3.3 3.3 0 0 0 5.5 8.75c-1.182 0-2.09.451-2.75.953V8.75zm22 5h-6.896a2.751 2.751 0 0 0 4.805.954l1.177.93A4.25 4.25 0 1 1 23.25 13zm-6.896-1.5a2.751 2.751 0 0 1 5.293 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="invisible absolute inset-s-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-green-800 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              About
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
