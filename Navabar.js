
import { Link } from "react-router-dom";
import '../components/navbar.css'
function Navabar() {
  return (
    <nav>
      <div>
        <Link to='/todolist'>AllTodos</Link>
      </div>
      <div>
        <Link to='/addtodo'>Add todo</Link>
      </div>
    </nav>
  );
}

export default Navabar;
