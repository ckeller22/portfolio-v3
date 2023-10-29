import portrait from '../../images/portrait.jpg';

function NavBar() {
  return (
    <div className="flex">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="flex flex-row justify-between px-4 sm:px-8 lg:px-12 py-2 bg-slate-300">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src={portrait}
              alt="Your Company"
            />
          </div>
          <div>list</div>
          <div>button</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
