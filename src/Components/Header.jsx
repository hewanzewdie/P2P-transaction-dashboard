import PropTypes from "prop-types";
import {Sun, Moon} from "lucide-react";

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
export default function Header({ darkMode, setDarkMode }) {
    return (
        <div className="mt-4 px-3 w-100 d-flex justify-content-end">
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="border-0 bg-transparent"
            >
                {darkMode ? <Sun size={30} color="white" /> : <Moon size={30} />}
            </button>
        </div>
    )
}