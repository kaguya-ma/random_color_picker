import './Button.css';

function Button() {
    function changeColor() {
        let red = Math.floor(Math.random() * 255) + 1;
        let green = Math.floor(Math.random() * 255) + 1;
        let blue = Math.floor(Math.random() * 255) + 1;
        let color = `rgb(${red}, ${green}, ${blue})`


        document.body.style.backgroundColor=color;
        document.querySelector('#p').innerHTML=color;
        if ((red < 100) || (green < 100) || (blue < 100)) {
            document.querySelector('#p').style.color='white'
            document.querySelector('#title').style.color='white'
        }

        else {
            document.querySelector('#p').style.color='black'
            document.querySelector('#title').style.color='black'
        }
    }
    return (
        <div>
            <button onClick={changeColor}>Click</button>
        </div>
    );


}

export default Button;
