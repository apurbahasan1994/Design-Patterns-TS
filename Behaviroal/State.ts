interface LightState{
    swtitchState(lightSwitch: LightSwitch): void;
}

class LightSwitch {
    private state: LightState;

    constructor(state: LightState) {
        this.state = state;
    }

    setState(state: LightState): void {
        this.state = state;
    }

    switch(): void {
        this.state.swtitchState(this);
    }
}

class OnState implements LightState {
    swtitchState(lightSwitch: LightSwitch): void {
        console.log("Turning off the light.");
        lightSwitch.setState(new OffState());
    }
}
class OffState implements LightState {
    swtitchState(lightSwitch: LightSwitch): void {
        console.log("Turning on the light.");
        lightSwitch.setState(new OnState());
    }
}

const lightSwitch = new LightSwitch(new OffState());
lightSwitch.switch(); // Turning on the light.
lightSwitch.setState(new OnState());
lightSwitch.switch(); // Turning off the light.