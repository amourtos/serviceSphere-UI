import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm.tsx";
import SignIn from "./components/SignIn.tsx";
import defaultTheme from "./themes/defaultTheme.ts";
import {ThemeProvider} from "@mui/material/styles";
import SignUp from "./components/SignUp.tsx";

function App() {

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <div>
                    <BrowserRouter>
                        <h1>APP.tsx</h1>
                        <Routes>
                            <Route path='/login' element={<LoginForm/>}/>
                            <Route path='/signin' element={<SignIn/>}/>
                            <Route path='/signUp' element={<SignUp/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
