import React,{Component} from 'react';
import './Todo.css';



class Todo extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            isediting:false,task:this.props.task
        };
        this.handleRemove=this.handleRemove.bind(this);
        this.toggleform=this.toggleform.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleRemove(){
        this.props.removeTodo(this.props.id);
    }
    toggleform(){
        this.setState({isediting:!this.state.isediting})
    }
    handleUpdate(evt){
        evt.preventDefault();
        //take new task data and pass up to parent
        this.props.updateTodos(this.props.id,this.state.task);
        this.setState({ isediting: false });
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleToggle(evt){
      this.props.toggleTodo(this.props.id);
    }
    render(){
        let result;
        if(this.state.isediting){
        result=(
            <div className="Todo">
                <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                    <input type="text" value={this.state.task} name='task' onChange={this.handleChange}/>
                    <button>Save</button>
                </form>
            </div>
        );
        }
        else{
            result =(
            <div className='Todo'>
                <li className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                onClick={this.handleToggle} >{this.props.task} 
                </li> 

                <div className='Todo-buttons'>
                 <button onClick={this.toggleform}><i class="fas fa-pen" /></button>
            <button onClick={this.handleRemove}><i class="fas fa-trash" /></button>
                </div>
           
         
        
            </div>
            );
        
    }
        return result;
        
    }
}
export default Todo;