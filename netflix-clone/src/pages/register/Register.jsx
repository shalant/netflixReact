import "./Register.scss"

export default function Register() {
  return (
    <div className="register">
        <div className="top">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
            <button className="loginButton">Sign In</button>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h2>Watch anywere. Cancel anytime</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership
            </p>
        </div>
    </div>
  )
}
