/* eslint-disable react/jsx-no-comment-textnodes */
const TodoItem = ({ itemProp }) => {
    return (
      <li>
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <input type="checkbox" />
        // eslint-disable-next-line react/prop-types
        {itemProp.title}
      </li>
    );
  };
  export default TodoItem;
  