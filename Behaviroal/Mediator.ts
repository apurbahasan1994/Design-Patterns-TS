// This is the mediator
abstract class DialogBox {
    abstract changed(uiControl: UIControl): void;
}

class AtriclesDialogBox extends DialogBox {
    private listBox: ListBox = new ListBox(this);
    private textBox: TextBox = new TextBox(this);
    private button: UIButton = new UIButton(this,'Save');

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
    override changed(uiControl: UIControl): void {
        if (uiControl === this.listBox) {
            this.articleSelected(this.listBox.selectedItem ? this.listBox.items.indexOf(this.textBox.text) : -1);
        }
        else if (uiControl === this.textBox) {
            this.titleChanged();
        }
    }

    private articleSelected(index: number) {
        this.listBox.selectItem(index);
        this.textBox.setText(this.listBox.selectedItem || '');
        this.button.isEnabled = !!this.listBox.selectedItem;
    }
    private titleChanged() {
        const content = this.textBox.text;
        this.button.isEnabled = !!content
    }

}

class UIControl {
    protected owner: DialogBox;
    constructor(owner: DialogBox) {
        this.owner = owner;
    }

}

class ListBox extends UIControl {
    private _items: string[] = [];
    private _selectedIndex: number = -1;
    constructor(owner: DialogBox) {
        super(owner);
    }

    addItem(item: string) {
        this._items.push(item);
    }

    selectItem(index: number) {
        if (index >= 0 && index < this._items.length) {
            this._selectedIndex = index;
            this.owner.changed(this);
        }
    }

    get selectedItem(): string | null {
        return this._selectedIndex >= 0 ? this._items[this._selectedIndex] : null;
    }
    get items(): string[] {
        return [...this._items];
    }
}

class TextBox extends UIControl {
    private _text: string = '';
    constructor(owner: DialogBox) {
        super(owner);
    }

    setText(text: string) {
        this._text = text;
        this.owner.changed(this);
    }

    get text(): string {
        return this._text;
    }
}

class UIButton extends UIControl {
    private _label: string = '';
    private _isEnabled: boolean = false;
    constructor(owner: DialogBox,label:string) {
        super(owner);
        this.label;
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
        this.owner.changed(this);
    }
}

const dialog_1 = new AtriclesDialogBox();
dialog_1.simulateuserInteraction();