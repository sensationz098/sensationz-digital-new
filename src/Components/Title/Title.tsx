import "./TitleStyle.css";

type TitlePropsType = {
  title: string;
  subtitle: string;
};

export default function Title({ title, subtitle }: TitlePropsType) {
  return (
    <>
      <div className="title">
        <p>{title}</p>
        <h2>{subtitle}</h2>
      </div>
    </>
  );
}
