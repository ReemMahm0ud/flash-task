export const CardHeader = ({ title, subTitle }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">{title}</h1>
      <h2 className="text-2xl font-bold text-blue-900 mb-6">{subTitle}</h2>
    </>
  );
};
