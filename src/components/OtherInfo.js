import React from "react";

function OtherInfo({formData, setFormData}) {
    return (
        <div className="other-info-container">
            <input 
                type="text"
                placeholder="Nationaliy..." 
                value={formData.nationality}
                onChange={(event) => setFormData({...formData, nationality: event.target.value})}
            />
            <input 
                type="text" 
                placeholder="Phone Number..." 
                value={formData.phoneNumber}
                onChange={(event) => setFormData({...formData, phoneNumber: event.target.value})}
            />
        </div>
    )
}

export default OtherInfo;