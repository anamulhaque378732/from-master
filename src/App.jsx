
import './App.css'
import Dada from './components/Dada/Dada'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleFrom from './components/SimpleFrom/SimpleFrom'
// import StatefulForm from './components/StatefullFrom/StatefulForm'
// import ReusableForm from './components/ReusebleForm/ReusableForm'
function App() {


//   const handleSignUpSubmit = data => {
//     console.log('sign up data', data)
//   };
//   const handleUpdate = data => {
//     console.log('update profile', data);

//   }
  return (

    <>
    <Dada></Dada>
      {/* <SimpleFrom></SimpleFrom> */}

      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm handleSubmit={handleSignUpSubmit}
        formTitle={'Sign Up'}>
        <div>
          <h2>Sign up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm handleSubmit={handleUpdate}
        SubmitBtnText='Update'
        formTitle={'Profile update'}>
        <div>
          <h3>Update Profile</h3>
          <p>Always keep your profile update</p>
        </div>

      </ReusableForm> */}
    </>
  )
}

export default App
