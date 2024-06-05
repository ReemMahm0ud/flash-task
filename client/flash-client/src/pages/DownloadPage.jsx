// import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
// import { isMobileDevice } from "../utils/utils";
import qrCodeFlashApp from "../assets/qrcode_flash_app.png";
import { useSelector } from "react-redux";

export const DownloadPage = () => {
  //   const [isMobile, setIsMobile] = useState(false);
  const { deviceType } = useSelector((state) => state.authSlice);

  console.log("device type", deviceType);

  const buttonHandler = (e) => {
    e.preventDefault();
    window.open(
      "https://play.google.com/store/apps/details?id=app.useflash.teller&hl=en_US",
      "_blank"
    );
  };

  const buttonProps = {
    isMobile: deviceType,
    text: "Download the App",
    onCall: buttonHandler,
    disabled: false,
  };
  const headerProps = {
    isMobile: deviceType,
    title: "Hey There!",
  };
  const infoProps = {
    title: "Seems like you don't have Flash app.",
    block: "Download it, create an account and pay the easy way!",
  };

  const qrImgProps = {
    qrImage: qrCodeFlashApp,
  };

  //   useEffect(() => {
  //     setIsMobile(isMobileDevice());
  //   }, []);

  return (
    <>
      {deviceType ? (
        <Layout
          buttonProps={buttonProps}
          headerProps={headerProps}
          infoProps={infoProps}
        />
      ) : (
        <Layout
          buttonProps={buttonProps}
          headerProps={headerProps}
          infoProps={infoProps}
          qrImgProps={qrImgProps}
        />
      )}
    </>
  );
};
