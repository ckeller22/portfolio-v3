import { CardInfoItemProps } from '../../model/props';
import Badge from './Badge';

function DefaultImage() {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-zinc-100 shadow-md dark:bg-zinc-400">
      <svg
        className="absolute -left-1 h-12 w-12 text-zinc-400 dark:text-zinc-700"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function CardInfoItem({
  title,
  subtitle,
  time,
  url = undefined,
  descriptionList = undefined,
  technologiesList = undefined,
  imageSource = undefined,
}: CardInfoItemProps) {
  return (
    <li className="flex flex-row">
      <div className="flex flex-shrink-0 items-start">
        {imageSource ? (
          <img
            className="h-10 w-10 rounded-full shadow-md "
            src={imageSource}
            alt=""
          />
        ) : (
          <DefaultImage />
        )}
      </div>
      <dl className="ml-4 flex flex-grow flex-col">
        <dt className="sr-only">{title.screenReaderTitle}</dt>
        <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {url ? (
            <a
              href={url}
              className="transition hover:text-teal-500 hover:underline dark:hover:text-teal-400"
            >
              {title.value}
            </a>
          ) : (
            title.value
          )}
        </dd>
        <div className="mb-2 flex flex-row justify-between">
          <dt className="sr-only">{subtitle.screenReaderTitle}</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {subtitle.value}
          </dd>
          <dt className="sr-only">{time.screenReaderTitle}</dt>
          <dd className="text-right text-xs text-zinc-400 dark:text-zinc-500">
            {time.value}
          </dd>
        </div>
        {descriptionList && (
          <>
            <dt className="sr-only">{descriptionList.screenReaderTitle}</dt>
            <dd className="text-sm text-zinc-500 dark:text-zinc-400">
              <ul className="pl- space-y-2">
                {descriptionList.value.map((listItem) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <li>{listItem}</li>
                  );
                })}
              </ul>
            </dd>
          </>
        )}

        {technologiesList && (
          <>
            <dt className="sr-only">{technologiesList.screenReaderTitle}</dt>
            <dd>
              <ul className="mt-2 flex flex-row flex-wrap gap-2">
                {technologiesList.value.map((tech) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <li>
                      <Badge text={tech} />
                    </li>
                  );
                })}
              </ul>
            </dd>
          </>
        )}
      </dl>
    </li>
  );
}

export default CardInfoItem;
