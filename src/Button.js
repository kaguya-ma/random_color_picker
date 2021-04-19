import './Button.css';

function Button() {
    function changeColor() {
        let red = Math.floor(Math.random() * 255) + 1;
        let green = Math.floor(Math.random() * 255) + 1;
        let blue = Math.floor(Math.random() * 255) + 1;
        let color = `rgb(${red}, ${green}, ${blue})`
        let red2 = Math.floor(Math.random() * 255) + 1;
        let green2 = Math.floor(Math.random() * 255) + 1;
        let blue2 = Math.floor(Math.random() * 255) + 1;
        let color2 = `rgb(${red2}, ${green2}, ${blue2})`
        let degrees = Math.floor(Math.random() * 360) + 1;

        document.body.style.background=`linear-gradient(${degrees}deg, ${color} 40%, ${color2} 100%)`
        document.querySelector('#firstColor').innerHTML=color;
        document.querySelector('#secondColor').innerHTML=color2;
        if ((red < 100) || (green < 100) || (blue < 100)) {
            document.querySelector('#firstColor').style.color='white'
            document.querySelector('#secondColor').style.color='white'
            document.querySelector('#title').style.color='white'
        }

        else {
            document.querySelector('#firstColor').style.color='black'
            document.querySelector('#secondColor').style.color='black'
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
