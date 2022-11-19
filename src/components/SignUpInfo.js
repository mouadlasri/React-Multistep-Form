import React from "react";

// pass props to SignUpInfo component
function SignUpInfo({formData, setFormData}) {
    return (
        <div className="sign-up-container">
            <input 
                type="text" 
                placeholder="Email..."  
                value={formData.email}
                onChange={(event) => setFormData({...formData, email: event.target.value})}     // alter only one field in the state
            />
            <input 
                type="text"
                placeholder="Password..." 
                value={formData.password}
                onChange={(event) => setFormData({...formData, password: event.target.value})}
            />
            <input 
                type="text"
                placeholder="Confirm Password..."
                value={formData.confirmPassword}
                onChange={(event) => setFormData({...formData, confirmPassword: event.target.value})}   
            />
        </div>
    )
}

export default SignUpInfo;