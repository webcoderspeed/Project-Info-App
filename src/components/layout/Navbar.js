import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinked from './SignedInLinked'
import SignedOutLinked from './SignedOutLink'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinked profile={profile}/> : <SignedOutLinked />

    return (
       <nav className="nav-wrapper grey darken-3">
           <div className="container">
                <Link to='/' className="brand-logo">Project App</Link>
                  { links }
           </div>
       </nav>
    )
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
