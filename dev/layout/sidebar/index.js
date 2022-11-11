import style from "styles/layout/sidebar.module.scss";
import Button from "components/form/button";
import logo from "public/assests/tulbalogo.svg";
import Image from "next/image";
import {ImCross} from "react-icons/im"

const Sidebar = ({ setOpen, open }) => {
  return (
    <div>
      <div className={`${style.sidebar} ${open == true ? `${style.active}` : ""}`}>
        <div className={style.sd_header}>
          {/* <h4 className="mb-0">Sidebar Header</h4> */}
          {/* <img src={logo} alt="logo" className="w-28" alt="img" /> */}
          <Image
                src={logo}
                alt="tulbalogo"
                loading="lazy"
                className="h-12 w-12"
              />
          <div
            className={style.cros_btn}
            onClick={setOpen}
          >
            {/* <i className="fa fa-times"></i> */}
            <ImCross />
          </div>
        </div>
        <div className={style.sd_body}>
          <ul>
            <li>
              <a className={style.sd_link}>Menu Item 1</a>
            </li>
            <li>
              <a className={style.sd_link}>Menu Item 2</a>
            </li>
            <li>
              <a className={style.sd_link}>Menu Item 3</a>
            </li>
            <li>
              <a className={style.sd_link}>Menu Item 4</a>
            </li>
            <li>
              <a className={style.sd_link}>Menu Item 5</a>
            </li>
            <li>
              <a className={style.sd_link}>Menu Item 6</a>
            </li>
            <li>
              <a className={style.sd_link}>Menu Item 7</a>
            </li>
            <li>
              <a className={style.sd_link}>Menu Item 8</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${style.sidebar_overlay} ${open == true ? `${style.active}` : ""}`}
        onClick={setOpen}
      ></div>
    </div>
  );
};

export default Sidebar;

// setOpen, open
