import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./LoginForm.css";

import {
	Button,
	TextField,
	Paper,
	Box,
	Grid,
	Typography,
	Container,
} from "@mui/material";

function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const errors = useSelector((store) => store.errors);
	const dispatch = useDispatch();

	const login = (event) => {
		event.preventDefault();

		if (username && password) {
			dispatch({
				type: "LOGIN",
				payload: {
					username: username,
					password: password,
				},
			});
		} else {
			dispatch({ type: "LOGIN_INPUT_ERROR" });
		}
	}; // end login

	return (
		<Container
			maxWidth="xs"
			sx={{
				mt: 10,
				mb: 15,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Grid container spacing={0.7}>
				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					lg={12}
					xl={12}
					component={Paper}
					elevation={19}
				>
					<Box
						sx={{
							my: 4,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography variant="h5">Sign in</Typography>
						<Box component="form" onSubmit={login} sx={{ mt: 1 }}>
							<TextField
								value={username}
								onChange={(event) => setUsername(event.target.value)}
								margin="normal"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								autoComplete="off"
								autoFocus
							/>
							<TextField
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="off"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2, p: 2 }}
							>
								Sign In
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default LoginForm;

{
	/* <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form> */
}
