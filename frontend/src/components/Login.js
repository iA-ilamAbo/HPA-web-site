import React from 'react';

function Login(props) {
    return (
        <form className='Login-content'>
        
             <div className='Login-form'>
             <h2></h2>
             &nbsp;&nbsp;&nbsp;
                {/* <label htmlFor='email'>Email </label>&nbsp; */}
                <input className='Login-input' name='email' type='text' placeholder='entrer votre email' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                {/* <label htmlFor='password'>Mot de passe </label>&nbsp; */}
                <input className='Login-input' name='password' type='password' placeholder='entrer votre mot de passe' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button class="btn btn-primary">Connexion</button>&nbsp;&nbsp;&nbsp;
             </div>
        
            
            
        </form>
    );
}

export default Login;
