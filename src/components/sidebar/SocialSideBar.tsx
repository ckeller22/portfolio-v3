import SideBar from '../shared/SideBar';
import email from '../../model/email';

function EmailSideBar() {
  return (
    <SideBar className="right-10">
      <a
        className="text-sm tracking-wider font-extralight icon-hover"
        style={{ writingMode: 'vertical-rl' }}
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </SideBar>
  );
}

export default EmailSideBar;
