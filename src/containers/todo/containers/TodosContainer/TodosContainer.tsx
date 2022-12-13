import React from 'react';
import { Header, Footer, Filters, Todos } from "@containers/";
import styles from './index.module.scss'



interface IComponentProps{
    children?: React.ReactNode
}
const TodosContainer = (props: IComponentProps)=>{
    return( <div className={styles.styleTest}>
        <Header />
        <Todos />
        <Filters />
        <Footer/>
        

    </div>)
}

export default TodosContainer