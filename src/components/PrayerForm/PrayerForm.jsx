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






}

export default prayerForm;
