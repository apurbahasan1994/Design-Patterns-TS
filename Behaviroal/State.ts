/*
 The State Pattern is a behavioral design pattern that allows an object to change its 
 behavior when its internal state changes. The object will appear to change its class by delegating state-specific behavior to different state objects.

Why is it a Behavioral Pattern?
Behavioral patterns are concerned with algorithms and the assignment of responsibilities
between objects. The State Pattern is behavioral because it lets an object alter its behavior dynamically based on its current state, without using complex conditional statements. Instead, behavior is encapsulated in separate state classes.

When to Use the State Pattern (Hint)
When an object’s behavior depends on its state, and it must change its behavior at 
runtime depending on that state.
When you want to avoid large, monolithic conditional statements (like if or switch) 
that handle state-specific behavior.
When related behaviors change together with the object’s state.
Example:
A registration process with multiple stages (start, personal info, payment, confirmation) 
where each stage has different behavior and transitions, as shown in your code. The State
 Pattern keeps each stage’s logic separate and makes transitions clean and maintainable.
 */

interface LightState {
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

// Expample with registration system    

// ...existing code...

interface RegistrationState {
    register(registration: Registration): void;
    nextStage(registration: Registration): void;
    previousStage(registration: Registration): void;
}

class StartState implements RegistrationState {
    register(registration: Registration): void {
        console.log("Starting registration...");
    }
    nextStage(registration: Registration): void {
        registration.setState(new PersonalInfoState());
        console.log("Moved to Personal Info stage.");
    }
    previousStage(registration: Registration): void {
        console.log("Already at the start stage.");
    }
}

class PersonalInfoState implements RegistrationState {
    register(registration: Registration): void {
        console.log("Registering personal info...");
    }
    nextStage(registration: Registration): void {
        registration.setState(new PaymentState());
        console.log("Moved to Payment stage.");
    }
    previousStage(registration: Registration): void {
        registration.setState(new StartState());
        console.log("Returned to Start stage.");
    }
}

class PaymentState implements RegistrationState {
    register(registration: Registration): void {
        console.log("Processing payment...");
    }
    nextStage(registration: Registration): void {
        registration.setState(new ConfirmationState());
        console.log("Moved to Confirmation stage.");
    }
    previousStage(registration: Registration): void {
        registration.setState(new PersonalInfoState());
        console.log("Returned to Personal Info stage.");
    }
}

class ConfirmationState implements RegistrationState {
    register(registration: Registration): void {
        console.log("Registration complete!");
    }
    nextStage(registration: Registration): void {
        console.log("Already at the final stage.");
    }
    previousStage(registration: Registration): void {
        registration.setState(new PaymentState());
        console.log("Returned to Payment stage.");
    }
}

class Registration {
    private state: RegistrationState;

    constructor(state: RegistrationState) {
        this.state = state;
    }

    setState(state: RegistrationState): void {
        this.state = state;
    }

    register(): void {
        this.state.register(this);
    }

    nextStage(): void {
        this.state.nextStage(this);
    }

    previousStage(): void {
        this.state.previousStage(this);
    }
}

// Example usage:
const registration = new Registration(new StartState());
registration.register();         // Starting registration...
registration.nextStage();        // Moved to Personal Info stage.
registration.register();         // Registering personal info...
registration.nextStage();        // Moved to Payment stage.
registration.register();         // Processing payment...
registration.nextStage();        // Moved to Confirmation stage.
registration.register();         // Registration complete!
registration.previousStage();    // Returned to Payment stage.
registration.register();         // Processing payment...

// another 

interface Tool {
    mouseDown(): void;
    mouseUp(): void;
}

class SelectionTool implements Tool {
    mouseDown(): void {
        console.log("Selection Tool: Mouse Down");
    }
    mouseUp(): void {
        console.log("Selection Tool: Mouse Up");
    }
}

class BrushTool implements Tool {
    mouseDown(): void {
        console.log("Brush Tool: Mouse Down");
    }
    mouseUp(): void {
        console.log("Brush Tool: Mouse Up");
    }
}

class EraserTool implements Tool {
    mouseDown(): void {
        console.log("Eraser Tool: Mouse Down");
    }
    mouseUp(): void {
        console.log("Eraser Tool: Mouse Up");
    }
}

// this acts as the State class in the State Pattern
// It encapsulates the current tool and its behavior, allowing the Canvas to change
// the tool dynamically and delegate mouse events to the appropriate tool's methods.
// The ToolState class is responsible for managing the current tool and its behavior.
// It allows the Canvas class to change the tool dynamically and delegate mouse events
// to the current tool's methods, making it easy to switch between different tools like
// selection, brush, and eraser without changing the overall structure of the code.
class ToolState {
    private currentTool: Tool;

    constructor(tool: Tool) {
        this.currentTool = tool;
    }

    setTool(tool: Tool): void {
        this.currentTool = tool;
    }

    mouseDown(): void {
        this.currentTool.mouseDown();
    }

    mouseUp(): void {
        this.currentTool.mouseUp();
    }
}

// Canvas class that uses ToolState to manage different tools
// it is the context class in the State Pattern
// It allows changing the tool dynamically and delegates mouse events to the current tool.
// This is useful in applications like drawing software where the user can switch between tools like selection,
// brush, and eraser without changing the overall structure of the code.
// The Canvas class acts as the context that uses the ToolState to manage the current tool.
// The ToolState class encapsulates the current tool and its behavior, allowing the Canvas to change
// the tool dynamically and delegate mouse events to the appropriate tool's methods.
// This pattern is useful in applications like drawing software where the user can switch between tools
// (like selection, brush, and eraser) without changing the overall structure of the code
// and behavior of the Canvas class.
class Canvas {
    private toolState: ToolState;

    constructor(tool: Tool) {
        this.toolState = new ToolState(tool);
    }

    setTool(tool: Tool): void {
        this.toolState.setTool(tool);
    }

    mouseDown(): void {
        this.toolState.mouseDown();
    }

    mouseUp(): void {
        this.toolState.mouseUp();
    }
}