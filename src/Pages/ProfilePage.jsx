import {useSelector} from "react-redux";



export function ProfilePage() {
    const name = useSelector((store) => store.name )

    return (
        <>
            <h1>Profile Page</h1>
            <h2>{name}</h2>
        </>
    )
}