"use client"
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ToggleBtn() {
  const [activeTheme, setActiveTheme] = useState<string>("black");

  // const toggleTheme = () => {
  //   const newTheme = activeTheme === 'black' ? 'lofi' : 'black';
  //   setActiveTheme(newTheme);
  // };
  const toggleTheme = (newTheme:any) => {
    setActiveTheme(newTheme);
  };

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', activeTheme);
  }, [activeTheme]);
  return (

    <main>
      {/* <div className="flex flex-row justify-center">
        <div className="form-control">
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="black" onClick={()=>{ setActiveTheme('black')}} >
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            </input>
            <input  value="lofi"  onClick={()=>{ setActiveTheme('lofi')}}>
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </input>
           
          </label>
        </div>
      </div> */}
      {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn ">
              Theme
              <svg
                width="12px"
                height="12px"
                className="h-0.2 w-0.2 fill-current opacity-60 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-0.2 shadow-2xl bg-base-300 rounded-box w-18 sm:w-12"
          >
            <li >
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                onClick={() => toggleTheme("dark")}
                value="default"
              />
              default
            </li>
            <li >
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                onClick={() => toggleTheme("black")}
                value="black"
              />
              black
            </li>
            <li >
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                onClick={() => toggleTheme("lofi")}
                value="lofi"
              />
              lofi
            </li>
            <li >
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                onClick={() => toggleTheme("wireframe")}
                value="wireframe"
              />
              wireframe
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                onClick={() => toggleTheme("light")}
                value="light"
              />
              light
            </li>
          </ul>

          </div> */}
          <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg width="12px" height="12px" className="h-0.2 w-0.2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
          </div>
            <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label= "dark"       onClick={()=>toggleTheme("dark")}  value="dark"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="black"      onClick={()=>toggleTheme("black")} value="black"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="lofi"       onClick={()=>toggleTheme("lofi")}  value="lofi"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="wireframe"  onClick={()=>toggleTheme("wireframe")}  value="wireframe"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="light"       onClick={()=>toggleTheme("light")}  value="light"/></li>
              </ul>
        </div> 
  
    </main>
  );
}
