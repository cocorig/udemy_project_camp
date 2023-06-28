import useForm from "../hooks/useForm";


function LoginForm(){
    const initialValues = {name: '', email: ''};//객체로 초기 상태 값 설정
    const  {values,handleChange,resetFrom} =  useForm(initialValues)//초기값을 보내고 비구조화 할당을 통해 받아옴

    const handleSubmit = (e)=>{
        e.preventDefault();
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                name="name"
                value={values.name}
                onChange={handleChange}
            />
            <input
            type="text" 
            name="email"
            value={values.email}
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={resetFrom}>Reset</button>
        </form>
    )

}

export default LoginForm;