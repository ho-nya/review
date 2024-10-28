type Props = {
    show: boolean;
  };
  export const Layout = ({ show }: Props) => {
    return (
      <div
        className={`fixed top-0 w-1 h-2 p-3 z-5 flex justify-between transition-all ease-in duration-500 ${show ? "bg-black" : ""}`}
      >
        <img
          className="fixed left-3 w-5 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <img
          className="fixed right-3 w-5 object-contain"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar"
        />
      </div>
    );
  };