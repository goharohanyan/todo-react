import React, {useState} from 'react';
import ListItems from "./ListItems";
import ToDoHeader from "./ToDoHeader";
import uniqueId from "uniqid";
import FilterButtons from './FilterButtons';
import Search from './Search';

const wrapperDivStyle = {
    width: '60%',
    margin: '0 auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100vh',
}

function Main() {

    const [inputValue, setInputValue] = useState('');
    const [isFilteredBy, setIsFilteredBy] = useState('');
    const [searchKey, setSearchKey] = useState('');
    const [toDoItems, setToDoItems] = useState([]);

    const onBtnClick = () => {
        addNewItem();
    };

    const addNewItem = () => {
        const newTodosList = [...toDoItems]
        if (inputValue) {
            newTodosList.push({
                done: false,
                name: inputValue,
                id: uniqueId()
            });
        }
        setToDoItems(newTodosList);
        setInputValue("");
    }

    const onInputChange = (event) => setInputValue(event.target.value);

    const onBtnRemove = (id) => {
        
        const arr = [...toDoItems];
        arr.splice(arr.findIndex(el => el.id === id), 1)
        setToDoItems(arr);
    };

    const onCheckboxChange = (id) => {
        
        const arr = [...toDoItems];
        const currentToDo = arr.find((el) => el.id === id);
        const currentToDoIndex = arr.indexOf(currentToDo);
        arr.splice(currentToDoIndex, 1, {
            ...currentToDo,
            done: !currentToDo.done,
        })
        setToDoItems(arr);
    };

    const onAllBtnClick = () => setIsFilteredBy('all');

    const onActiveBtnClick = () => setIsFilteredBy('active');

    const onCompletedBtnClick = () => setIsFilteredBy('completed');

    const onSearchBar = (event) => setSearchKey(event.target.value);

    const afterSearch = () => setSearchKey('');

    const filterToDoItems = () => {
        if (isFilteredBy === 'active') {
            if(searchKey){
                return toDoItems.filter(el => !el.done && el.name.includes(searchKey));
            } else {
                return toDoItems.filter(el => !el.done);
            }
        } else if (isFilteredBy === 'completed') {
            if(searchKey){
                return toDoItems.filter(el => el.done && el.name.includes(searchKey));
            } else {
                return toDoItems.filter(el => el.done);
            }
        } else if(searchKey){
            return toDoItems.filter(el => el.name.includes(searchKey));
        } else {
            return toDoItems;
        }
    }

    return (
        <div style={wrapperDivStyle}>

            <ToDoHeader inputValue={inputValue} onInputChange={onInputChange}
                        onBtnClick={onBtnClick} onEnterPress={addNewItem} />
            <Search onSearch={onSearchBar} onDelete={afterSearch} />
            <ListItems toDoItems={filterToDoItems()} onBtnRemove={onBtnRemove} onCheckboxChange={onCheckboxChange}/>
            <FilterButtons onAllBtnClick={onAllBtnClick} 
                        onActiveBtnClick={onActiveBtnClick} onCompletedBtnClick={onCompletedBtnClick}/>
        </div>
    );
}

export default Main;
