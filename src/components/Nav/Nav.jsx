import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Nav() {
	const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(()=>{
		dispatch({type: 'FETCH_WEEKLY'});
	}, []);

	return (
		<div className="nav">
			<Link to="/home">
				<h2 className="nav-title">Prayer Tracker App</h2>
			</Link>
			<div>
				{/* If no user is logged in, show these links */}
				{!user.id && (
					// If there's no user, show login/registration links
					<Link className="navLink" to="/login">
						Login / Register
					</Link>
				)}

				{/* If a user is logged in, show these links */}
				{user.id && (
					<>
						<Link className="navLink" to="/user">
							Home
						</Link>

						<Link className="navLink" to="/prayerform">
							Prayers
						</Link>
						<Link className="navLink" to="/weeklyprayer">
							Weekly Prayers
						</Link>

						<Link className="navLink" to="/prayerbar">
							Chart
						</Link>
            <Link className="navLink" to="/historybar">
							Bar
						</Link>

						{/* {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}

						<LogOutButton className="navLink" />
					</>
				)}

				<Link className="navLink" to="/about">
					About
				</Link>
			</div>
		</div>
	);

}

export default Nav;
