export class Tile
{
    #tileElement;
    #x;
    #y;
    #value;
    constructor(tileContainer,value = Math.random()>0.5?2:4)
    {
        this.#tileElement = document.createElement("div");
        this.#tileElement.classList.add("tile");
        tileContainer.append(this.#tileElement);
        this.value = value;
    }
    get value()
    {
        return this.#value;
    }
    get x()
    {
        return this.#x;
    }
    get y()
    {
        return this.#y;
    }
    set value(v)//here the value-> v which is sent as a parameter,its value is value only and by default sent from the constructor
    {
        this.#value = v;
        this.#tileElement.textContent = v;
        const power = Math.log2(v);
        const backgroundlightness = 100 - 9*power;
        this.#tileElement.style.setProperty("--background-lightness",`${backgroundlightness}%`);
        this.#tileElement.style.setProperty("--text-lightness",`${backgroundlightness<=50?90:10}%`);

    }
    set x(value)
    {
        this.#x = value;
        this.#tileElement.style.setProperty("--x",value);
    }
    set y(value)
    {
        this.#y = value;
        this.#tileElement.style.setProperty("--y",value);
    }
    remove()
    {
        this.#tileElement.remove();//to get rid out of the dom
    }
    waitForTransition(animation = false)
    {
        return new Promise((resolve) => 
        {   
            this.#tileElement.addEventListener(animation ? "animationend":"transitionend",resolve,{once:true});
        });
    }
}