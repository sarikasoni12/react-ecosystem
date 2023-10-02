import React from "react";
import { connect } from 'react-redux';
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { removeTodo, markTodoAsCompleted } from "./actions";

import  './TodoList.css';

const TodoList = ({todos = [], onRemovePress, onCompletedPress}) => {
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map((todo, key) => <TodoListItem 
                todo={todo} 
                key={key}
                onRemovePress={onRemovePress}
                onCompletedPress={onCompletedPress} />
                )}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePress: text => dispatch(removeTodo(text)),
    onCompletedPress: text => dispatch(markTodoAsCompleted(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);