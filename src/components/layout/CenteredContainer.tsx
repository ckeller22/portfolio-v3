import { AppProps } from '../../model/props';

interface CenteredContainerProps extends AppProps {}

function CenteredContainer({
  children,
  className = '',
}: CenteredContainerProps) {
  return (
    <div className={`${className} sm:px-8`}>
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default CenteredContainer;
