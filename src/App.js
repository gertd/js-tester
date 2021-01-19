import  MyForm from './MyForm';
import Swagger from './Swagger'

//const url = 'https://onebox.aserto.us:8383/openapi/swagger.json';
const url = 'https://localhost:8383/openapi/swagger.json';

function App() {
  return (
    <div>
      { /* <MyForm></MyForm> */ }
      <Swagger url={url}/>
    </div>
  );
}

export default App;
