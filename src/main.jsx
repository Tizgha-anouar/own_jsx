import { createElement, spreadAttrs} from "./../ownLib/utilits.js"


function app(componant) { 
    let myClass = "active";
    let myRef = "myRef";
    let univers = "univers00";
    let fnc = () => { 
        return "2024"
    }
    let attrs = {
        class: "active around",
        style: "bla bla bla",
        data:"data"
    }

    return (<div attrs >
        <h1>test variable :: hello {univers}, are you okey</h1>
        <h1>test function :: {fnc()} </h1>
        {componant()}
    </div>);
}
    
function img() {
    let attrs = {
        style: "width: 100px;",
        src: "https://images.pexels.com/photos/18651005/pexels-photo-18651005/free-photo-of-tram-and-cars-on-street-in-city-in-germany.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "image"
        
    }
    return(<div> test add image and some attrs :: <img attrs /> </div>);
}

document.getElementById("app").innerHTML = app(img);