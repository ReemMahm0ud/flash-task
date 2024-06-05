export const InfoCard = ({ title, block }) => {
  return (
    <>
      <h4 className=" font-light">{title}</h4>
      <p>{block}</p>
    </>
  );
};
