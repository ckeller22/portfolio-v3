import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type CardTitleProps = {
  text: string;
  faIcon: IconDefinition;
};

function CardTitle({ text, faIcon }: CardTitleProps) {
  return (
    <div className="mb-6 flex flex-row">
      <FontAwesomeIcon
        icon={faIcon}
        className="themed-icon"
        size="lg"
        pull="left"
      />
      <h2 className="themed-text-medium pl-4">{text}</h2>
    </div>
  );
}

export default CardTitle;
