import './login.css'

function AdminLogin(){
    return(
        <>
        <form className='LoginBod'>
            <h2 className='Headtext'> ADMIN LOGIN </h2> 

            <div className='LoginForm'>
                <div className='loginBox'> 
                    <label className='label'> Admin ID </label><br />
                    <input type='text' placeholder='Admin ID..' />
                </div>
            </div>
            <div className='loginBox'> 
                   <label className='label'> Password </label><br />
                   <input type='text' placeholder='Password' />
            </div>

            <button > Login </button>

            <div className='logininfo'>
                <p> <b>Admin ID : </b> admin </p><br/>
                <p> <b>Password </b> admin </p><br/>

            </div>
        </form>
        </>
    )
}

export default AdminLogin() ;