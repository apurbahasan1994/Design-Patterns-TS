// Explain Command Pattern in TypeScript
// The Command Pattern encapsulates a request as an object, allowing for parameterization of clients with queues, requests, and operations.
// It decouples the sender of a request from the receiver, enabling features like undo/redo operations and logging.
// The Command Pattern is particularly useful in scenarios where you want to queue operations, log requests, or support undo/redo functionality.
// Command Pattern Example
interface Command {
    execute(): void;
    undo(): void;
}
class Light {
    private isOn: boolean = false;

    turnOn(): void {
        this.isOn = true;
        console.log("Light is ON");
    }

    turnOff(): void {
        this.isOn = false;
        console.log("Light is OFF");
    }

    isLightOn(): boolean {
        return this.isOn;
    }
}
class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOn();
    }

    undo(): void {
        this.light.turnOff();
    }
}
class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOff();
    }

    undo(): void {
        this.light.turnOn();
    }
}
class RemoteControl {
    private command: Command;

    setCommand(command: Command): void {
        this.command = command;
    }

    pressButton(): void {
        this.command.execute();
    }

    pressUndo(): void {
        this.command.undo();
    }
}
// Usage
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);
const remoteControl = new RemoteControl();
remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton(); // Output: Light is ON
remoteControl.pressUndo(); // Output: Light is OFF
remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton(); // Output: Light is OFF
remoteControl.pressUndo(); // Output: Light is ON
// The Command Pattern allows for flexible command execution and undo functionality.
// It encapsulates the request to turn the light on or off as command objects,
// which can be executed or undone through the remote control.
// This decouples the command execution from the command implementation,
// allowing for easy extension and modification of commands without changing the client code.
// The Command Pattern is particularly useful in scenarios where you want to queue operations,
// log requests, or support undo/redo functionality.


// When to Use the Command Pattern
// 1. When you need to parameterize objects with operations.
// 2. When you want to queue operations or log requests.
// 3. When you want to support undo/redo functionality.
// 4. When you want to decouple the sender of a request from the receiver.
// 5. When you want to implement a simple event system or callback mechanism.       
// 6. When you want to encapsulate a request as an object, allowing for flexible command execution.
// 7. When you want to create a history of commands for undo/redo operations.
// 8. When you want to implement a macro command that combines multiple commands into one.
// 9. When you want to implement a command queue for asynchronous execution.
// 10. When you want to implement a command pattern for GUI actions, allowing for flexible button actions.
// 11. When you want to implement a command pattern for menu actions, allowing for flexible menu item actions.
// 12. When you want to implement a command pattern for keyboard shortcuts, allowing for flexible key bindings.
// 13. When you want to implement a command pattern for remote control actions, allowing for flexible remote control commands.
// 14. When you want to implement a command pattern for game actions, allowing for flexible game commands.
// 15. When you want to implement a command pattern for network requests, allowing for flexible request handling.
// 16. When you want to implement a command pattern for database operations, allowing for flexible database commands.
// 17. When you want to implement a command pattern for file operations, allowing for flexible file commands.
// 18. When you want to implement a command pattern for logging operations, allowing for flexible logging commands.
// 19. When you want to implement a command pattern for task scheduling, allowing for flexible task execution.
// 20. When you want to implement a command pattern for workflow management, allowing for flexible workflow execution.
// 21. When you want to implement a command pattern for state management, allowing for flexible state transitions.
// 22. When you want to implement a command pattern for event handling, allowing for flexible event processing.
// 23. When you want to implement a command pattern for user input handling, allowing for flexible input processing.
// 24. When you want to implement a command pattern for data processing, allowing for flexible data transformations.
// 25. When you want to implement a command pattern for configuration management, allowing for flexible configuration changes.
// 26. When you want to implement a command pattern for plugin management, allowing for flexible plugin actions.
// 27. When you want to implement a command pattern for service management, allowing for flexible service actions.
// 28. When you want to implement a command pattern for task management, allowing for flexible task actions.
// 29. When you want to implement a command pattern for user interface actions, allowing for flexible UI commands.
// 30. When you want to implement a command pattern for system operations, allowing for flexible system commands.
// 31. When you want to implement a command pattern for application actions, allowing for flexible app commands.
// 32. When you want to implement a command pattern for business logic operations, allowing for flexible business commands.
// 33. When you want to implement a command pattern for data access operations, allowing for flexible data commands.
// 34. When you want to implement a command pattern for security operations, allowing for flexible security commands.
// 35. When you want to implement a command pattern for network operations, allowing for flexible network commands.
// 36. When you want to implement a command pattern for user authentication, allowing for flexible auth commands.
// 37. When you want to implement a command pattern for user authorization, allowing for flexible auth commands.
// 38. When you want to implement a command pattern for user session management, allowing for flexible session commands.
// 39. When you want to implement a command pattern for user profile management, allowing for flexible profile commands.
// 40. When you want to implement a command pattern for user notification management, allowing for flexible notification commands.
// 41. When you want to implement a command pattern for user preference management, allowing for flexible preference commands.
// 42. When you want to implement a command pattern for user activity tracking, allowing for flexible activity commands.
// 43. When you want to implement a command pattern for user feedback management, allowing for flexible feedback commands.
// 44. When you want to implement a command pattern for user analytics, allowing for flexible analytics commands.
// 45. When you want to implement a command pattern for user engagement, allowing for flexible engagement commands.
// 46. When you want to implement a command pattern for user interaction, allowing for flexible interaction commands.
// 47. When you want to implement a command pattern for user experience management, allowing for flexible UX commands.
// 48. When you want to implement a command pattern for user interface customization, allowing for flexible UI commands.
// 49. When you want to implement a command pattern for user interface theming, allowing for flexible theme commands.
// 50. When you want to implement a command pattern for user interface layout management, allowing for flexible layout commands.
// 51. When you want to implement a command pattern for user interface component management, allowing for flexible component commands.          
       