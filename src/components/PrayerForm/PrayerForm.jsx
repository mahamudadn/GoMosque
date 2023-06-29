import { useDispatch, useSelector } from "react-redux";
import  {useState} from 'react';


function prayerForm() {

    const dispatch = useDispatch();
    const [user_id, setUser_Id] = useState("");
    const [prayer_id, setPrayer_Id] = useState(0);
    const [mosque, setMosque] = useState("false");

    
    // const addPrayer = (event)
    //     event.preventDefault();
    //   
    //     console.log(user_id, prayer_id,mosque,);
    //     console.log(history);
    //     dispatch({ type: "POST_PRAYER", payload:history})
 const date = new Date().toJSON();
    const addPrayer = (event) => {
        event.preventDefault();
        const history = {
            prayer_id,
            mosque,
            date
        }
        dispatch({
            type: 'POST_PRAYER',
            payload: history
        });

    }
console.log(prayer_id);
return (
        <>
        <form onSubmit={addPrayer}>
            {/* <label htmlFor="user_id"></label>
            <input 
            type="text" 
            name="user"
            placeholder="User"

            value={user_id}
            onChange={(event) => {
                setUser_Id(event.target.value)
            }}
            />
        
            <label htmlFor="prayer_id"></label>
            <input 
                type="text" 
                placeholder="Prayer"
                value={prayer_id}
                onChange={(event) => {
                    setPrayer_Id(event.target.value)
            }}
            />   */}

            {/* <label htmlFor="mosque"></label>
            <input 
                type="text" 
                name="mosque"
                placeholder="Mosque"
                value={mosque}
                onChange={(event) => {
                    setMosque(event.target.value)
            }}
            />      */}
                <select onChange={(event)=>setPrayer_Id(event.target.value)} name="prayers" id="prayer_id">
                <option value="1">Fajr</option>
                <option value="2">Dhuhr</option>
                <option value="3">Asr</option>
                <option value="4">Magrib</option>
                <option value="5">isha</option>
                </select>

                <label htmlFor="mosque">Mosque or not?</label>
                <select name="mosque" id="">

                    <option value='true'>true</option>
                    <option value='false'>false</option>
                </select>

                
            <input type="submit" value={"Add Prayer"}/> 
        </form>
        
        
        
        
        </>
    )




}

export default prayerForm;
