import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../service/loginPost.tsx"; // Adjust the path accordingly
import "../style/login.css"; // Import your CSS file
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // setLoading(true);
    handleOpen();
    setLoginError(false);
    // Call the login service
    const loginService = new LoginService();
    try {
      const isSuccess = await loginService.loginPost(username, password);

      if (isSuccess) {
        // Handle successful login (e.g., redirect to another page)
        console.log("Login successful");
        navigate("/main");
      } else {
        // Handle unsuccessful login (e.g., show error message)
        console.log("Login failed");
        setLoginError(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      //   setLoading(false); // Set loading back to false after the API response
      handleClose();
    }
  };

  const handleCloseErrorDialog = () => {
    setLoginError(false); // Close the error dialog
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Typography variant="h5" className="login-title">
        Login
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="login-button"
      >
        Log In
      </Button>
      {/* {loading && <CircularProgress size={24} style={{ marginTop: 10 }} />}  */}
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>

      <Dialog open={loginError} onClose={handleCloseErrorDialog}>
        <DialogTitle>Login Failed</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Invalid username or password. Please try again.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseErrorDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
