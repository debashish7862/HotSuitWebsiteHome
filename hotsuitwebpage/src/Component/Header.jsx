import'./Header.css';

export default function Header() {
  return (
   <div>

<nav>
    <div className="left">
    <img src="https://mms.businesswire.com/media/20220302005272/en/1376413/22/HS_logo_black_horizonal.jpg" alt="logo" />
    <ul>
        <a href="#">Platform</a>
        <a href="#">Plans</a>
        <a href="#">Enterprise</a>
        <a href="#">Resources</a>
        <a href="#">Education</a>
    </ul>
    </div>
    <div className="right">
        <ul>
            <a href="#">Contact Us</a>
            <a href="#">Log in</a>
            <button class="signup">Sign Up</button>
        </ul>
    </div>

</nav>






   </div>
  )
}

