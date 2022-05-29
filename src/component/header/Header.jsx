import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain"
import HeaderBottom from "./HeaderBottom";

const Header = () => {
    return ( 
        <div className="header text-white ">
                <HeaderTop/>
                <HeaderMain/>
                <HeaderBottom/>
        </div>
     );
}
 
export default Header;