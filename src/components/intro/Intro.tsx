import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CenteredContainer from '../layout/CenteredContainer';
import links from '../../model/links';
import content from '../../data/content.json';

function LinkItems() {
  return (
    <ul className="mt-6 flex flex-row space-x-4">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.url}>
              <FontAwesomeIcon
                icon={link.icon}
                size="lg"
                className="themed-link-icon"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function Intro() {
  return (
    <CenteredContainer className="my-36">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {content.introHeader}
        </h1>
        <LinkItems />
      </div>
    </CenteredContainer>
  );
}

export default Intro;
