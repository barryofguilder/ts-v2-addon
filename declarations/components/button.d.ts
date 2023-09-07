import Component from '@glimmer/component';
export interface ButtonArgs {
    type?: 'button' | 'submit';
}
export interface ButtonSignature {
    Args: ButtonArgs;
    Blocks: {
        default: [];
    };
    Element: HTMLButtonElement;
}
export default class Button extends Component<ButtonSignature> {
    get type(): string;
}
//# sourceMappingURL=button.d.ts.map