import React from 'react';
import {TodoHeader, TodoFooter, TodoSidebar, TasksContainer, TodoMain} from './components/index';
import {createUniqueId, addDataToCategory} from './helpers/helpers';
import './App.css';

/**
 * core App component
 */
class App extends React.Component {

    /**
     * constructor
     */
    constructor(...args) {
        super(...args);

        this.state = {
            visibleSidebar: true,
            categories: []
        };
    }

    /**
     * function which add new task in proper category
     */
    addTask = () => {
        let activeLi = document.querySelector('.active-li');
        if (!activeLi) {
            alert('Please choose category');
        }
        else {
            let currentCategoryId = activeLi.closest('.category-item').getAttribute('data-unique-key'),
                taskName = prompt('Please add task', "Need to wake up on 9 o'clock");
            if (taskName != null) {
                let categoryData = {
                        type: 'addTask',
                        taskName
                    },
                    resultArr = addDataToCategory(categoryData, currentCategoryId, this.state.categories);
                this.setState({
                    categories: resultArr
                });
            }
        }
    };

    /**
     * function which add new category
     *
     * @param {String} data - category id
     * @param {Object} e - event object
     */
    addCategory = (e, data) => {
        let categoryName = prompt('Please add category', "React");
        if (categoryName != null) {
            let categoryData = {
                type: 'addCategory',
                id: 0,
                name: categoryName,
                categoryTasksList: [],
                uniqueId: categoryName+createUniqueId(),
                categories: [],
                activeCategory: true
            };
            let resultArr = addDataToCategory(categoryData, data, this.state.categories);
            this.setState({
                categories: resultArr
            });
        }
    };

    /**
     * function which return list of categories from state
     *
     * @returns {Object} return list of category
     */
    getCategories = () => {
        return this.state.categories;
    };

    /**
     * update categories with current info about which one is active
     *
     * @param {Object} data - updated categories data
     */
    modifyActiveCategory = (data) => {
        this.setState({
            categories: data
        });
    };

    /**
     * function that switches the sidebar (shows or hides) depending on the current value
     */
    toggleSidebar = () => {
        this.setState({
            visibleSidebar: !this.state.visibleSidebar
        });
    };

    render() {
        let {visibleSidebar, categories} = this.state;
        return (
            <div className="App">
                <TodoHeader
                    toggleSidebar={this.toggleSidebar}
                    visibleSidebar={visibleSidebar.toString()}
                />
                <TodoMain>
                    <TodoSidebar
                        visibleSidebar = {visibleSidebar.toString()}
                        addCategory = {this.addCategory}
                        getCategories = {this.getCategories}
                        categories = {categories}
                        modifyActiveCategory = {this.modifyActiveCategory}
                    />
                    <TasksContainer
                        addTask={this.addTask}
                        categories = {categories}
                    />
                </TodoMain>
                <TodoFooter />
            </div>
        );
    }
}

export default App;
