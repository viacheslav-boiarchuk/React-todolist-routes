import React from 'react';
import {
    TodoHeader,
    TodoFooter,
    TodoSidebar,
    Main,
    TasksContainer,
    RemoveModal,
    TaskModal } from './components/index';
import './App.css';
import {
    headerConnector,
    sideBarConnector,
    tasksConnector,
    removeModalConnector,
    taskModalConnector} from './connector';
import 'bootstrap/dist/css/bootstrap.css';

const HeaderConnected = headerConnector(TodoHeader);
const SideBarConnected = sideBarConnector(TodoSidebar);
const TasksConnected = tasksConnector(TasksContainer);
const RemoveModalConnected = removeModalConnector(RemoveModal);
const TaskModalConnected = taskModalConnector(TaskModal);

/**
 * core App component
 */
class App extends React.Component {

    render() {
        return (
            <div className="App">
                <HeaderConnected />
                <Main>
                    <SideBarConnected/>
                    <TasksConnected/>
                </Main>
                <RemoveModalConnected/>
                <TaskModalConnected/>
                <TodoFooter />
            </div>
        );
    }
}

export default App;
