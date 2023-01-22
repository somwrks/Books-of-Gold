import React from 'react'

const Profiletabs = () => {
  return (
    <div className="container">
        <form action="" className="row form-container">
            <div className="col-md-6">
                <div className="form">
                    <label for="account-fn"> Username</label>
                    <input type="text" className="form-control" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label for="account-email"> Email Address</label>
                    <input type="email" className="form-control" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label for="account-pass"> New Password</label>
                    <input type="password" className="form-control" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label for="account-fn"> Confrim Password</label>
                    <input type="password" className="form-control" required/>
                </div>
            </div>
            <button type="submit">Update Profile</button>
            
        </form>
    </div>
  )
}

export default Profiletabs