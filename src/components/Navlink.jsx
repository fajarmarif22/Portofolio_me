const { Link } = require("react-router-dom")

const Navlink = ({href, title}) => {
  return (
    <Link to={href} className="block py-2 pl-3 text-[#ADB7BE]">
      {title}
    </Link>
  )
}

export default Navlink