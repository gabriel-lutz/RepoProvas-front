import Professors from "./Professors/"
import Header from "./Header/"
import { GlobalStyle } from "../styles/GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Professor from "./Professor/";
import Courses from "./Courses/";
import Course from "./Course/";
import Send from "./Send/";
import Menu from "./Menu/";
import Visualize from "./Visualize/";

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
                <Header></Header>
                <Switch>
                    <Route path="/" exact component={Menu}/>
                    <Route path="/visualize" exact component={Visualize}/>
                    <Route path="/visualize/professors" exact component={Professors}/>
                    <Route path="/visualize/professors/:id" exact component={Professor}/>
                    <Route path="/visualize/courses" exact component={Courses}/>
                    <Route path="/visualize/courses/:id" exact component={Course}/>
                    <Route path="/send" exact component={Send}/>
                </Switch>
        </BrowserRouter>
    )
}