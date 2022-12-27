import React, { useContext, useEffect, useState } from "react";
import { Header, Footer, Filters, Todos, Todo } from "@containers/";
import styles from "./index.module.scss";
import { ITodos, ITodosContainer } from "../../components/Todos/Todos";
import { ThemeConsumer } from "styled-components";

interface IComponentProps {
  children?: React.ReactNode;
}
const TodosContainer = (props: IComponentProps) => {
  return (
    <div className={styles.styleTest}>
      <Header />
      <Todos />
      <Filters />
      <Footer />
    </div>
  );
};

export default TodosContainer;
//-----------------------------> 1 STATELESS
//stateless ----> компонент без изменения состояния\
// <component1 data{data}/> --> дата это наши пропсы которые мы передаем в компонент с наружи
// Children --> Нужны для прокидывания HTML Coda
// interface IProps {
//     data: string;
//      id: number;
//      text: string;
//     children?:React.ReactNode
// }

// const component1 = ({data, children}: IProps, ) =>
//     <div>
//         {children}
//         <div>
//             {data}
//         </div>
// </div>;

// class componet2 extends React.Component<IProps>{
//     constructor(props:IProps) {
//         super(props);
//     }
//         render(){
//             return <div>
//                 <div>{this.props.data}</div>
//                 {this.props.children}
//             </div>
//         }
//
// }

//-----------------> USESTATE
//useState() has 2 state (initState, sateState) setState перезаписывает инитСтэйт
//  const component1 = ({data, children}: IProps, ) =>{
//      const [value, satValue] = useState<string| null>(null)
//   return   <div>
//      {children}
//      <div>
//          {data}
//
//  </div>
//  </div>;
//  }

// class componet3 extends React.Component<IProps>{
//     constructor(props:IProps) {
//         super(props);
//             this.state = {};

//     }
//     clickMe (){
//         this.setState({value: "dsafsa"})
// }
//         render(){
//             return <div>
//                 <div>{this.props.data}</div>
//                 {this.props.children}
//                     <button onClick={() => satValue("test") }>Click Me!</button>
//                  <div>{this.state.value}<div/>
//             </div>
//         }
//
// }.
// useEffect()________________
// useEffect(() => {}) --> будет срабатывать постоянно
// useEffect(()=>{},[]) --> Сработает один раз
// useEffect(() => {},[props.user])  --->  будет срабатывать при каждом изменении юзера

// const Todos = (props) => {
//     const [totos, setTodos] = useState<IProps>([{
//         data: "1",
//         id:1,
//         text: "sadas",
//     }])
//     useEffect(()=>{
//         setTodos((state)=>state.concat([{
//             data: "3",
//             id:3,
//             text: "sadas",
//         },{
//             id:2,
//             text: "sadas",
//             data: "2"
//         }]))
//     },[])
//
//     return <>todos?.map(({text, id})=> <div key = {id}>{text}</div>)</>
// }

// Hook useContext ----

// export const TodosContext = React.createContext<ITodosContainer>({})
// const App () =>{
//
//     const [totos] = useState<ITodosContainer>>([{
//         id: 1,
//         text: "sadas",
//     }])
//     return<TodosContext.Prowider value = {{todos} as TodosContainer}>
//         <TodosContainer todos = {todos} />
//     </TodosContext.Prowider>
// }
// export default App

// const Todos () => {
//     todos = useContext<ITodosContainer>(TodosContainer)
// }

// ThemeConsumer --> Передает пропсы джля классов без прокидывания
// const Todos () => {
//     return{
//  <TodosContainer.Cosuner>
// {todos?.map(({ id, text }) => <React.Fragment key = {id}><Todo text={text} id={id}/></React.Fragment>)}
// <TodosContainer.Cosuner>
// }
