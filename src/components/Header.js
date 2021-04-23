import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title }) => {
    const onClick = () => {
        console.log("Click")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="Black" text="Add" onClick={onClick}/>
            <Button color="Black" text="Next Video"/>
        </header>
    )
}

Header.defaultProps = {
    title: "Tasks"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: "red", 
//     backgroundColor: "black"
// }

export default Header
