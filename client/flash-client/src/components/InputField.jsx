export const InputField = () => {
  return (
    <>
      <label htmlFor="phone-number" className="text-lg text-gray-700 mb-2">
        What is your number?
      </label>
      <input
        type="text"
        id="phone-number"
        placeholder="01xxxxxxxxx"
        className="w-full p-3 border-2 border-[#cbf15e4d] rounded-lg mb-2 text-gray-700"
      />
      <p className="text-sm text-gray-500 mb-4">
        Enter the number linked to your Flash account.
      </p>
    </>
  );
};
