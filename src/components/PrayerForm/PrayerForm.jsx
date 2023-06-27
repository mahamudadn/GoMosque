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
            
            
            <input type="submit" value={"SUBMIT"}/> 
        </form>
        
        
        
        
        </>
    )




}

export default prayerForm;
