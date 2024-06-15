import { Route, Routes } from "react-router-dom";
import AuthPage from "../components/AuthPage/AuthPage";
import App from "../App";


function CustomRouter(){
	return (
	<>
		
		<Routes>
		    <Route path="/" element={<App />} />
			<Route path="/login" element={<AuthPage signinOrLogin={false} />} />
			<Route path="/signin" element={<AuthPage signinOrLogin={true} />} />
		</Routes>

		

	</>
	)
}

export default CustomRouter;