import ReactDOM from 'react-dom';

function Portal({ children }) {
  const parent = document.getElementById('portal');
  return ReactDOM.createPortal(children, parent);
}

export default Portal;
