import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { useLoginApiMutation } from "../redux/API/AuthApiSlice";
import { useIsRegisteredMutation } from "../redux/API/CheckUserApiSlice";
import { useInitatePaymentMutation } from "../redux/API/PaymentAPI";
import { isMobileDevice } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login, checkDevice, addCustomerName } from "../redux/slices/authSlice";
import { savePaymentLink } from "../redux/slices/paymentSlice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [loginApi] = useLoginApiMutation();
  const [isRegistered] = useIsRegisteredMutation();
  const [initatePayment] = useInitatePaymentMutation();
  const { token, deviceType } = useSelector((state) => state.authSlice);
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const clientLogin = btoa(`${clientId}:${clientSecret}`);
  const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;

  const checkUser = async (token, phone) => {
    await isRegistered({ token, phone })
      .unwrap()
      .then((fulfilled) => {
        if (fulfilled === false) {
          navigate("/download_app");
        } else {
          navigate("/pay_in_flash");
        }
      })
      .catch((rejected) => {
        console.error(rejected);
        toast.error(rejected?.data?.message || "Error occurred", {});
      });
  };

  const generatePaymentLink = async (token, phone) => {
    const payload = {
      integrationId: 58328228,
      aggregatorOrderId: "94fd204c-4f44-477a-8339-471cf6ed41f2",
      description: "Order for product xyz",
      customer: {
        phone: `+2${phone}`,
      },
      amountCents: 5000,
      currency: "EGP",
    };
    await initatePayment({ token, payload })
      .unwrap()
      .then((fulfilled) => {
        dispatch(savePaymentLink(fulfilled.order.paymentLink));
        dispatch(addCustomerName(fulfilled.order.billingInfo.customerName));
      })
      .catch((rejected) => {
        console.error(rejected);
        toast.error(rejected?.data?.message || "Error occurred", {});
      });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (!phone) {
      return toast.error("Please enter a phone number");
    }
    if (!phoneRegex.test(phone)) {
      return toast.error("Please enter a a valid phone number");
    }

    try {
      await generatePaymentLink(token, phone);
      await checkUser(token, phone);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error occurred", {});
    }
  };

  const inputProps = {
    phone,
    setPhone,
  };
  const buttonProps = {
    text: "Next",
    onCall: handlePaymentSubmit,
    disabled: token ? false : true,
  };

  const headerProps = {
    title: "Hey there!",
    subTitle: "Pay with Flash !",
  };

  const getToken = async (clientLogin) => {
    await loginApi(clientLogin)
      .unwrap()
      .then((fulfilled) => {
        console.log("login success");
        dispatch(login(fulfilled.access_token));
      })
      .catch((rejected) => {
        console.error(rejected);
        toast.error(rejected?.data?.message || "Error occurred", {});
      });
  };

  useEffect(() => {
    getToken(clientLogin);
    dispatch(checkDevice(isMobileDevice()));
  }, []);

  return (
    <Layout
      buttonProps={buttonProps}
      headerProps={headerProps}
      inputProps={inputProps}
      isMobile={deviceType}
    />
  );
};
