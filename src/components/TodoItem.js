import React from 'react';




const TodoItem = props => {
    return (
        <li>
            {props.todoinList.description}
        </li>
    )
}

// class TodoItem extends Component {
//     render () {
//         return (
//            <div>
//                 <h1>{this.props.itemList}</h1>
//                 <ol>{this.itemList}
//                 <ol>{for(var i = 0; i < itemList.length; i++) {
//                     this.props.itemList[i]}}</ol>
//                     </div>
//         )
//     }
// }

export default TodoItem;
