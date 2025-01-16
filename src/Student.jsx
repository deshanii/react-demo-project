import PropTypes from "prop-types"
import propTypes from "prop-types"

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}

Student.propTypes ={
    name : PropTypes.string,
    age: PropTypes.number,
    isStudednt: PropTypes.bool,

}
Student.defaultProps = {
    name : "Guest",
    age: 0,
    isStudednt: false,
}

export default Student