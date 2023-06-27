import { useDispatch, useSelector } from "react-redux";
import REACT, {useState} from 'react';
import { useDispatch } from "react-redux";

function prayerForm() {

    const useDispatch = useDispatch();
    const [user_id, setUser_Id] = useState("");
    const [prayer_id, setPrayer_Id] = useState("");
    const [mosque, setMosque] = useState("false");

    
    const addPrayer = (event)
        event.preventDefault();
        const history = {
            user_id,
            prayer_id,
            mosque,
        }
        console.log(user_id, prayer_id,mosque,);
        console.log(history);
        dispatchEvent({ type: "POST_PRAYER", payload:history})

return (
        <>
        <form onSubmit={addPrayer}>
            <label for="payers">Choose a prayer:</label>
            <select name="prayers" id="prayers">
            <option value="fajr">fajr</option>
            <option value="dhuhr">dhuhr</option>
            <option value="asr">asr</option>
            <option value="magrib">magrib</option>
            <option value="isha">isha</option>
            </select>
            
            <input type="submit" value={"SUBMIT"}/> 
        </form>
        
        
        
        
        </>
    )




}

export default prayerForm;
