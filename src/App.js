import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PhoneBook from "./components/PhoneBook"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhoneBook/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
