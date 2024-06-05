import { useDispatch } from "react-redux";
import { addPhone } from "../redux/slices/authSlice";

export const InputField = ({ phone, setPhone }) => {
  const dispatch = useDispatch();
  const phoneHandler = (e) => {
    setPhone(e.target.value);
    dispatch(addPhone(e.target.value));
    console.log(e.target.value);
  };
  return (
    <>
      <label htmlFor="phone-number" className="text-lg text-gray-700 mb-2">
        What is your number?
      </label>
      <input
        type="number"
        id="phone-number"
        placeholder="01XXXXXXXXX"
        className="w-full p-3 border-2 border-[#cbf15e4d] rounded-lg mb-2 text-gray-700 "
        onChange={(e) => phoneHandler(e)}
        value={phone}
      />
      <p className="text-sm text-gray-500 mb-4">
        Enter the number linked to your Flash account.
      </p>
    </>
  );
};
