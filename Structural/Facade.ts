// It involves creating a wrapper interface over a complex system
// to hide its complexities. This pattern invovles a single
// class that provides simplified methods required by the
// client and delegates calls to methods of existing system
// class
/*
When to use : We want to provide a simple interface to
a complex subsystems. Subsystems often get more 
complex as they evolve. When there are many dependencies
between clients and the implementation classes of an 
abstraction. We want to layer the subsystems.
Use a facade to define an entry point to each subsystem 
level.

1. High coupling and complex interactions between classes
or subsystems
2. Complex subsystems with multiple interdependent classes
or operations
3. Client code is overexposed to the internals of subsytem
4. Requirement of multi layered or tiered architecture 
structures.
5. Building libraries or apis with a simple user friendly
interface
 */

/* 


Disadvantages:
1. Over abstraction : Can lead to unnecessary level
of abstraction
2.Limited Flexibility :  Facades limits access to full functionality  of the
subsystem.
3. Hiding Useful information : Encasulation might hide
beneficial subsytem behavior.

*/

class Grinder {
    grindeBeens() {
        console.log('gridning beens');
    }
}

class Boiler {
    boilWater() {
        console.log('Boiling water');
    }
}

class Brewer {
    brewCoffee() {
        console.log('Brewing cofee');
    }
}

// The cofee maker facade is
// abstracting way the complexities
// of making a cofee.
class CofeeMakerFacade {
    private _brewer: Brewer;
    private _boiler: Boiler;
    private _grinder: Grinder;
    constructor() {
        this._brewer = new Brewer();
        this._boiler = new Boiler();
        this._grinder = new Grinder();
    }
    makeCofee() {
        this._grinder.grindeBeens();
        this._boiler.boilWater();
        this._brewer.brewCoffee();
    }
}

let coffeMaker = new CofeeMakerFacade();
coffeMaker.makeCofee();



// -------- Example ---- 2 -----



class Amplifier {


    public turnedOn() {
        console.log("Amplifier turned on");
    }

    public setVolume(level: number) {
        console.log('volume is set to', level);
    }
}



class DvdPlayer {
    turnOn() {
        console.log('The dvd player is turned on');
    }

    public play(movie: string) {
        console.log('Playing the movie', movie);
    }
}


class Projector {
    tunOn() {
        console.log("Projector is turned on");
    }

    setInput(dvdPlayer: DvdPlayer) {
    }
}


class Lights {
    public dim(level: number) {
        console.log('Light dimmed to', level);
    }
}

class HomeTheatereFacade {
    private _amplifier: Amplifier;
    private _dvdPlayer: DvdPlayer;
    private _projector: Projector;
    private _lights: Lights;
    constructor() {
        this._amplifier = new Amplifier();
        this._dvdPlayer = new DvdPlayer();
        this._projector = new Projector();
        this._lights = new Lights();
    }


    public wathchMovie(movie: string, volume: number, level: number) {
        this._lights.dim(level);
        this._amplifier.turnedOn();
        this._amplifier.setVolume(volume);
        this._dvdPlayer.turnOn();
        this._projector.tunOn();
        this._projector.setInput(this._dvdPlayer);
        this._dvdPlayer.play(movie);
    }
}

const cinePlex = new HomeTheatereFacade();
cinePlex.wathchMovie('Goodzilla', 10, 10);