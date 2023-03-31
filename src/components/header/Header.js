import classNames from "classnames";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <>
      <header
        className={classNames("", {
          // 'is-fixed': headerType === 'fixed'
        })}
      >
        <div
          className={classNames("header-btn", {
            // "is-show": mobileHeaderState,
          })}
          // onClick={() => setMobileHeaderState(!mobileHeaderState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={classNames("", {
            // "is-show": mobileHeaderState,
          })}
        >
          <li>
            <Link to="/">메인</Link>
          </li>
          <li className="disabled">
            <Link to="/products">Products</Link>
          </li>
          <li className="disabled">
            <Link to="/three">Carts</Link>
          </li>
          <li className="disabled">
            <Link to="/users">Users</Link>
          </li>
          <li className="disabled">
            <Link to="/posts">Posts</Link>
          </li>
          <li className="disabled">
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
