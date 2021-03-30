import './WelcomeScreen.scss'


const WelcomeScreen = () => {

    const handleBtn = () => {
        const wrapper = document.querySelector('.wrapper')
        wrapper.classList.add('visible')
    }

    return ( 
        <div className="wrapper">
            <div className="content">
                <h1>savePath</h1>
                <p><i className="far fa-arrow-alt-circle-down"></i></p>
                <button className="btn" onClick={handleBtn}>Poznaj zasady gry</button>
            </div>
        </div>
     );
}
 
export default WelcomeScreen;