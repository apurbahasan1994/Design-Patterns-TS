

interface Observer {
    update(): void;
}

class AtriclesDialogBox_2 {
    private listBox: ListBox_2 = new ListBox_2();
    private textBox: TextBox_2 = new TextBox_2();
    private button: UIButton_2 = new UIButton_2('Save');

    public simulateuserInteraction() {
        this.listBox.addItem('Article 1');
        this.listBox.addItem('Article 2');
        this.listBox.addItem('Article 3');
        this.listBox.selectItem(0); // Select first article
        this.textBox.setText('Article 1'); // Set text in text box
        console.log(`Selected Article: ${this.listBox.selectedItem}`); // Should print 'Article 1'
        console.log(`Text Box Content: ${this.textBox.text}`); // Should print 'Article 1'
        console.log(`Button Enabled: ${this.button.isEnabled}`); // Should print true
    }

    public constructor() {
        this.listBox.addObserver({
            update: this.articleSelected.bind(this)
        });
        this.textBox.addObserver({
            update: this.titleChanged.bind(this)
        });
    }

    private articleSelected() {
        this.textBox.setText(this.listBox.selectedItem || '');
        this.button.isEnabled = !!this.listBox.selectedItem;
    }
    private titleChanged() {
        const content = this.textBox.text;
        this.button.isEnabled = !!content
    }

}

abstract class UIControl_2 {
    private observers: Observer[] = [];
    public addObserver(observer: Observer) {
        this.observers.push(observer);
    }
    protected notifyObservers() {
        for (const observer of this.observers) {
            observer.update();
        }
    }
}

class ListBox_2 extends UIControl_2 {
    private _items: string[] = [];
    private _selectedIndex: number = -1;
    constructor() {
        super();
    }

    addItem(item: string) {
        this._items.push(item);
    }

    selectItem(index: number) {
        if (index >= 0 && index < this._items.length) {
            this._selectedIndex = index;
            this.notifyObservers();
        }
    }

    get selectedItem(): string | null {
        return this._selectedIndex >= 0 ? this._items[this._selectedIndex] : null;
    }
    get items(): string[] {
        return [...this._items];
    }
}

class TextBox_2 extends UIControl_2 {
    private _text: string = '';
    constructor() {
        super();
    }

    setText(text: string) {
        this._text = text;
        this.notifyObservers();
    }

    get text(): string {
        return this._text;
    }
}

class UIButton_2 extends UIControl_2 {
    private _label: string = '';
    private _isEnabled: boolean = false;
    constructor(label: string) {
        super();
        this._label = label
    }

    setLabel(label: string) {
        this._label = label;
    }

    get label(): string {
        return this._label;
    }
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(value: boolean) {
        this._isEnabled = value;
        this.notifyObservers();
    }
}

const dialog = new AtriclesDialogBox_2();
dialog.simulateuserInteraction();