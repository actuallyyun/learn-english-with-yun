const Footer = () => {
  return (
    <footer className="container text-center pb-10 ">
      <div className="w-24 h-1 my-12 bg-gradient-to-r from-gray-300 to-gray-600 rounded-full mx-auto"></div>
      <div className="flex justify-center items-center">
        <i className="pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </i>
        Need help? Email{" "}
        <a
          href="mailto:this.jiyun@gmail.com"
          className="pl-1 hover:text-gray-800"
        >
          this.jiyun@gmail.com
        </a>
      </div>
      <div className="flex justify-center items-center my-2">
        <a href="" className="font-bold hover:text-gray-800">
          Terms and Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
