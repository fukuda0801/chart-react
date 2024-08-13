type Props = {
  title1: string;
  content1: string;
};

const ThreeBoxContent = (props: Props): JSX.Element => {
  const { title1, content1 } = props;
  return (
    <>
      <div className="p-6 shadow-xl">
        <h3 className="text-xl font-bold">{title1}</h3>
        <p className="mt-4 text-base">{content1}</p>
      </div>
    </>
  );
};

export default ThreeBoxContent;
