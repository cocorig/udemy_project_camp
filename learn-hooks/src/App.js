import Counter from "./components/counter";
import Mycounter from './components/mycounter';
import LoginForm from "./components/loginForm";
function App() {
  return (
    <div>
      <Counter/>
     <Mycounter/>
     <LoginForm/>
    </div>
  );
}

export default App;
//커스텀 훅??
//1. 여러 컴포넌트에서 공통된 로직을 재사용하기 위해 만들어진 함수
//2. 일반적으로 use 접두사를 사용하여 이름이 지정.
//3. 커스텀 훅은 로직을 추상화하고 컴포넌트로부터 분리하여 재사용과 코드 가독성개선