function App() {
  return (
    <div className="App">
      <form
        onClick={() => alert('form')}
        style={{ width: '200px', height: '200px', backgroundColor: 'red' }}
      >
        FORM
        <div
          onClick={() => {
            alert('div');
          }}
          style={{ width: '100px', height: '100px', backgroundColor: 'green' }}
        >
          DIV
          <p
            onClick={(event) => {
              alert('p');
              event.stopPropagation();
            }}
            style={{ width: '50px', height: '50px', backgroundColor: 'blue' }}
          >
            P
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;
