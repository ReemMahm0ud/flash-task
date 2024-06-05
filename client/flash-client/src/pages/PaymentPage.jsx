import { useSelector } from "react-redux";
import { Layout } from "../components/Layout";

export const PaymentPage = () => {
  const { paymentLink } = useSelector((state) => state.paymentSlice);
  const { deviceType, customerName } = useSelector((state) => state.authSlice);

  const buttonHandler = (e) => {
    e.preventDefault();
    window.open(
      "intent://#Intent;scheme=https;package=app.useflash.teller;end",
      "_blank"
    );
  };

  return (
    <>
      {deviceType ? (
        <Layout
          headerProps={{ isMobile: deviceType, title: `Hey ${customerName}!` }}
          infoProps={{
            title: "Complete your payment in a Flash ⚡",
            block:
              "Once you’ve confirmed the payment on Flash, you will be automatically redirected to your successful order details here.",
          }}
          buttonProps={{
            isMobile: deviceType,
            text: "Continue on Flash",
            onCall: buttonHandler,
            disabled: false,
          }}
        />
      ) : (
        <Layout
          headerProps={{
            isMobile: deviceType,
            title: `Almost there, ${customerName}!`,
          }}
          infoProps={{
            title: "",
            block:
              "Scan this qr code with the Flash app and the payment process will be over in a flash! Just like that!",
          }}
          buttonProps={{
            isMobile: deviceType,
            text: "Confirm",
            onCall: buttonHandler,
            disabled: false,
          }}
          qrImgProps={{
            qrImage: `https://api.qrserver.com/v1/create-qr-code/?size=211x210&data=${paymentLink}`,
          }}
        />
      )}
    </>
  );
};
