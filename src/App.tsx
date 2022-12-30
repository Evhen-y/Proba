import React, {useEffect} from "react";
// import { resolve } from 'url';
import {todosActions, TodosContainer, UsersContaiter} from "./containers";
import {useDispatch} from "react-redux";
import {Switch, Route, Redirect} from "react-router";
import {routerAssessor, publicRouter, privateRouter, ROUTER_PATH} from "./router";
import {Main} from "./shared"



const App = () => {
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(todosActions.FETCH_TODOS.REQUEST({}))
    // },[])
    return(
<Switch>
    {publicRouter.map((rout)=> routerAssessor(null, rout))}.
    <Main>
        {privateRouter("ADMIN").map((rout)=> routerAssessor(null, rout))}
    </Main>

    <Redirect to={ROUTER_PATH.LOGIN}/>
    {/*<Route exact={true} path="/todos" component={TodosContainer}/>*/}
</Switch>
  // <div>
  //   <TodosContainer />
  //   <UsersContaiter />
  // </div>
)};

export default App;
