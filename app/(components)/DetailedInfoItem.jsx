const DetailedInfoItem = ({ title, content }) => {
  return (
    <div className="border-2 border-primary rounded-lg px-6 py-4 flex-grow">
      <h3 className="font-italiana text-center mb-4">{title}</h3>
      <p className="font-instrument-sans text-center">{content}</p>
    </div>
  );
};

export default DetailedInfoItem;
