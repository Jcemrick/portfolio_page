import Typed from 'react-typed';
import "../header.css"

const Header = (props) => {
    return(
        <div className='container'>

            <div className='headerimg'>
                <img src="" />
            </div>

            <div className='title'>
                <p>Joe Emrick{" "}</p>
            </div>

            <div className='animation'>
                <Typed
                    strings={[
                        "Developer",
                        "Designer",
                        "Father",
                        "Husband"
                    ]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                />
            </div>

        </div>
    )
}

export default Header