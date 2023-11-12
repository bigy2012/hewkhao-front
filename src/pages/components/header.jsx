import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  return (
    <nav className="bg-[#F3E6D2]">
      <div className="mx-auto max-w-7xl">
        <div className="flex py-3 mx-6 items-center justify-between border-b-2 border-black">
          <div className="flex items-center">
            <div>
              <div className="flex items-baseline space-x-4">
                <Link
                  href="/"
                  className=" text-black rounded-md text-2xl font-bold"
                  aria-current="page"
                >
                  HewKhao
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href="/profile"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-black hover:text-white "
                // onClick={signIn}
              >
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 0C11.6823 0.00534882 8.92704 0.829258 6.56972 2.37137C4.21239 3.91349 2.35478 6.10725 1.22315 8.68544C0.0915128 11.2636 -0.2653 14.115 0.196169 16.8922C0.657639 19.6694 1.91747 22.2526 3.82222 24.3271C5.18262 25.8005 6.8337 26.9763 8.67144 27.7806C10.5092 28.5848 12.4937 29 14.5 29C16.5063 29 18.4908 28.5848 20.3286 27.7806C22.1663 26.9763 23.8174 25.8005 25.1778 24.3271C27.0825 22.2526 28.3424 19.6694 28.8038 16.8922C29.2653 14.115 28.9085 11.2636 27.7769 8.68544C26.6452 6.10725 24.7876 3.91349 22.4303 2.37137C20.073 0.829258 17.3177 0.00534882 14.5 0ZM14.5 26.127C11.4906 26.1224 8.60022 24.9517 6.43718 22.8611C7.0939 21.2638 8.21105 19.8976 9.6467 18.9361C11.0823 17.9746 12.7717 17.4613 14.5 17.4613C16.2283 17.4613 17.9177 17.9746 19.3533 18.9361C20.7889 19.8976 21.9061 21.2638 22.5628 22.8611C20.3998 24.9517 17.5094 26.1224 14.5 26.127ZM11.5945 11.612C11.5945 11.0378 11.7649 10.4766 12.0841 9.99918C12.4034 9.52179 12.8572 9.1497 13.3881 8.92998C13.919 8.71026 14.5032 8.65277 15.0668 8.76478C15.6305 8.87679 16.1482 9.15328 16.5545 9.55927C16.9609 9.96526 17.2376 10.4825 17.3497 11.0457C17.4618 11.6088 17.4043 12.1925 17.1843 12.7229C16.9644 13.2534 16.592 13.7068 16.1142 14.0258C15.6364 14.3447 15.0747 14.515 14.5 14.515C13.7294 14.515 12.9904 14.2092 12.4455 13.6647C11.9006 13.1203 11.5945 12.3819 11.5945 11.612ZM24.5386 20.321C23.2406 18.1028 21.2428 16.3773 18.8583 15.4149C19.598 14.5769 20.0799 13.5435 20.2463 12.4385C20.4127 11.3336 20.2565 10.2042 19.7964 9.18581C19.3363 8.16742 18.5918 7.30331 17.6524 6.69717C16.7129 6.09104 15.6183 5.76862 14.5 5.76862C13.3817 5.76862 12.2871 6.09104 11.3476 6.69717C10.4082 7.30331 9.66372 8.16742 9.2036 9.18581C8.74348 10.2042 8.58725 11.3336 8.75365 12.4385C8.92005 13.5435 9.40202 14.5769 10.1417 15.4149C7.75716 16.3773 5.75943 18.1028 4.46143 20.321C3.42699 18.5605 2.88042 16.5565 2.87792 14.515C2.87792 11.4353 4.10239 8.48175 6.28195 6.30408C8.46151 4.1264 11.4176 2.903 14.5 2.903C17.5824 2.903 20.5385 4.1264 22.718 6.30408C24.8976 8.48175 26.1221 11.4353 26.1221 14.515C26.1196 16.5565 25.573 18.5605 24.5386 20.321Z" fill="black"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
