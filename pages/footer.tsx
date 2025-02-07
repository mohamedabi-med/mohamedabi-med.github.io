import Navbar from "./navbar";
export default function Footer() {
  return (
    <>
      <footer className="w-full">

        <footer className="footer p-4 md:p-10 bg-base-200 text-base-content flex flex-wrap md:justify-between">
          <nav className="w-full md:w-1/3">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Website Development</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="w-full md:w-1/3">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="w-full md:w-1/3">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form className="w-full mt-4 md:mt-0 md:w-1/2">
            <h6 className="footer-title">WorldWeb Solutions</h6>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join flex">
                <input type="text" placeholder="username@WorldWebSolutions.com" className="input input-bordered join-item" />
                  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Get Started</button>
              </div>
            </fieldset>
          </form>
        </footer>

        <footer className="footer p-4 bg-neutral text-neutral-content flex justify-between items-center">
          <aside className="flex items-center">
            <img src="logo.png" width="62" height="52" alt="logo" className="mr-2" />
            <p className="text-sm">Copyright © 2024 - All rights reserved</p>
          </aside>
          <nav className="flex gap-4">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
            </a>
          </nav>
        </footer>

      </footer>
    </>
  );
}
