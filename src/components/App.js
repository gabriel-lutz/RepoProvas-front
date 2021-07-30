import Choices from "./Choices";
import Visualize from "./Visualize";
import Professors from "./Professors"
import Header from "./Header"
import { GlobalStyle } from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Professor from "./Professor";
import Courses from "./Courses";
import Course from "./Course";
import Send from "./Send";
export default function App(){
    return(
        <>
            <BrowserRouter>
                <GlobalStyle/>
                    <Header></Header>
                    <Switch>
                        <Route path="/" exact component={Choices}/>
                        <Route path="/visualize" exact component={Visualize}/>
                        <Route path="/visualize/professors" exact component={Professors}/>
                        <Route path="/visualize/professors/:id" exact component={Professor}/>
                        <Route path="/visualize/courses" exact component={Courses}/>
                        <Route path="/visualize/courses/:id" exact component={Course}/>
                        <Route path="/send" exact component={Send}/>
                    </Switch>
            </BrowserRouter>
        </>
    )
}