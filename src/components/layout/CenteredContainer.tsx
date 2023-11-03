import { AppProps } from '../../model/props';

interface CenteredContainerProps extends AppProps {}

function CenteredContainer({ children }: CenteredContainerProps) {
  return (
    <div>
      CenteredContainer
      {children}
    </div>
  );
}

export default CenteredContainer;
