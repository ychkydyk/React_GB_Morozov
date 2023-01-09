// import {useSelector, useDispatch } from "react-redux"; //selector чтобы получить данные из store; dispatch - чтобы запустить reduser
import {useState} from "react";
import {changeName, toggleProfile} from '../store/profile/actions'
// import {selectName, selectVisible} from "../store/profile/selectors";
import { connect } from "react-redux";



function AboutPage(props) {


    const [value, setValue] = useState('') // state inputa



    // const handleChange = () => {
    //     // dispatch({type: types.Change_Name, payload: value}) // передаем action
    //     // // в диспатч передаем action из store, а в него наш value
    //     setValue('') // обнуляем значение
    // }

    return (
        <>
            <h1>About Page</h1>
            <h2>user:{props.name}</h2>
            <input type="checkbox" checked={props.visible} readOnly/>
            <button onClick={() => props.toggle()}>Change visible</button>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => props.changeName(value)}>Change User</button>
        </>
    )
}
const mapStateToProps = (state) => ({
    name: state.profile.name,
    visible: state.profile.visible
})
const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggleProfile()),
    changeName: (value) => dispatch(changeName(value))
})
export const AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(AboutPage)