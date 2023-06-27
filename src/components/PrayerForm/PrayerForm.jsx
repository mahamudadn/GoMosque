import { useDispatch, useSelector } from "react-redux";
import REACT, {useState} from 'react';
import { useDispatch } from "react-redux";

function prayerForm() {

    const dispatch = useDispatch();
    const [user_id, setUser_Id] = useState("");
    const [prayer_id, setPrayer_Id] = useState("");
    const [mosque, setMosque] = useState("false");

    
    // const addPrayer = (event)
    //     event.preventDefault();
    //   
    //     console.log(user_id, prayer_id,mosque,);
    //     console.log(history);
    //     dispatch({ type: "POST_PRAYER", payload:history})

    const addPrayer = (event) => {
        event.preventDefault();
        const history = {
            user_id,
            prayer_id,
            mosque,
        }
        dispatch({
            type: 'POST_PRAYER',
            payload: history
        });

    }

return (
        <>
        <form onSubmit={addPrayer()}>
            <label htmlFor="user_id"></label>
            <input 
            type="text" 
            name="user"
            value={user_id}
            onChange={(event) => {
                setUser_Id(event.target.value)
            }}
            />

            <label htmlFor="prayer_id"></label>
            <input 
            type="text" 
            name="prayer"
            value={prayer_id}
            onChange={(event) => {
                prayer_id(event.target.value)
            }}
            />  

            <label htmlFor="mosque"></label>
            <input 
            type="text" 
            name="mosque"
            value={prayer_id}
            onChange={(event) => {
                mosque(event.target.value)
            }}
            />     
            
            <input type="submit" value={"SUBMIT"}/> 
        </form>
        
        
        
        
        </>
    )




}

export default prayerForm;
