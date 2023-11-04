import * as Icon from 'react-feather';

type CardTitleProps = {
  text: string;
  iconName: keyof typeof Icon;
};

function CardTitle({ text, iconName }: CardTitleProps) {
  const IconComponent = Icon[iconName];

  return (
    <div className="mb-6 flex flex-row">
      <IconComponent className="themed-icon-filled" />
      <h2 className="themed-text-medium pl-4">{text}</h2>
    </div>
  );
}

export default CardTitle;
