import { Button } from "./Button";
import { CardHeader } from "./CardHeader";
import { DiscountBanner } from "./DiscountBanner";
import { InputField } from "./InputField";
import { QrcodeImage } from "./QrcodeImage";
import { InfoCard } from "./InfoCard";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const Layout = ({
  headerProps,
  inputProps,
  buttonProps,
  qrImgProps,
  infoProps,
}) => {
  const location = useLocation();
  const { deviceType } = useSelector((state) => state.authSlice);
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="bg-white px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-12 lg:border-2 rounded-2xl w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="flex flex-col lg:items-start items-center justify-between gap-4">
            <div className="flex space-x-2 mb-6">
              <svg
                width="42"
                height="30"
                viewBox="0 0 42 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.325045 23.0933C0.119694 23.2954 0.00281041 23.5707 5.00214e-05 23.859C-0.00271036 24.1472 0.108875 24.4248 0.310319 24.6307L5.67333 30L19.4257 16.2316C19.7886 15.8738 19.9951 15.3866 19.9999 14.8767C20.0047 14.3668 19.8075 13.8758 19.4515 13.5112L5.95602 0L0.490681 5.4717C0.286621 5.67403 0.170839 5.94899 0.168632 6.23651C0.166425 6.52404 0.277976 6.80075 0.478906 7.00619L8.4163 14.9926L0.325045 23.0933Z"
                  fill="#CBF15E"
                ></path>
                <path
                  d="M22.325 23.0933C22.1197 23.2954 22.0028 23.5707 22.0001 23.859C21.9973 24.1472 22.1089 24.4248 22.3103 24.6307L27.6733 30L41.4257 16.2316C41.7886 15.8738 41.9951 15.3866 41.9999 14.8767C42.0047 14.3668 41.8075 13.8758 41.4515 13.5112L27.956 0L22.4907 5.4717C22.2866 5.67403 22.1708 5.94899 22.1686 6.23651C22.1664 6.52404 22.278 6.80075 22.4789 7.00619L30.4163 14.9926L22.325 23.0933Z"
                  fill="#CBF15E"
                ></path>
              </svg>
            </div>
            <div className="grid grid-cols-1 justify-items-start">
              <CardHeader {...headerProps} />
            </div>
            <div className="grid grid-cols-1 justify-items-start w-full">
              {inputProps && <InputField {...inputProps} />}
              {infoProps && <InfoCard {...infoProps} />}
            </div>
            {qrImgProps && (
              <div className=" lg:hidden flex items-center justify-center w-full mt-6">
                <QrcodeImage {...qrImgProps} />
              </div>
            )}
            <DiscountBanner />
            {!deviceType && location.pathname === "/pay_in_flash" ? (
              <span className=" text-left font-light text-sm flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V15H13V17H11ZM11 7V13H13V7H11Z"
                    fill="#F8C300"
                  />
                </svg>
                Make sure you paid before confirming
              </span>
            ) : null}

            <Button {...buttonProps} />
          </div>
          {qrImgProps && (
            <div className=" hidden lg:flex lg:items-center lg:justify-center">
              <QrcodeImage {...qrImgProps} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
