import { useLocation } from "react-router-dom";
export const Button = ({ text, onCall, disabled, isMobile }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {!isMobile && location.pathname === "/download_app" ? (
        ""
      ) : (
        <button
          onClick={(e) => onCall(e)}
          className="bg-[#2C2C84] text-white text-lg py-3 px-6 rounded-lg w-full sm:w-[70%] bottom-0 disabled:opacity-75 disabled:cursor-not-allowed"
          disabled={disabled}
        >
          {text}
        </button>
      )}
    </>
  );
};
