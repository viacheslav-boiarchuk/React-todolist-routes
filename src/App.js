import React from 'react';
import {
    TodoHeader,
    TodoFooter,
    TodoSidebar,
    Main,
    TasksContainer,
    RemoveModal,
    TaskModal,
    ErrorModal,
    DateModal
} from './components/index';
import './App.css';
import {
    headerConnector,
    sideBarConnector,
    tasksConnector,
    removeModalConnector,
    taskModalConnector,
    errorModalConnector,
    dateModalConnector,
} from './connector';
import 'bootstrap/dist/css/bootstrap.css';

const HeaderConnected = headerConnector(TodoHeader);
const SideBarConnected = sideBarConnector(TodoSidebar);
const TasksConnected = tasksConnector(TasksContainer);
const RemoveModalConnected = removeModalConnector(RemoveModal);
const TaskModalConnected = taskModalConnector(TaskModal);
const ErrorModalConnected = errorModalConnector(ErrorModal);
const DateModalConnected = dateModalConnector(DateModal);

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
                <ErrorModalConnected/>
                <DateModalConnected/>
                <TodoFooter />
            </div>
        );
    }
}

export default App;
