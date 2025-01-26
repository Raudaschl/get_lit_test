import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-page')
export class HomePage extends LitElement {
    static styles = css`
        :host {
            display: block;
        }
        h1 {
            color: #333;
        }
    `;

    render() {
        return html`
            <h1>Welcome to Our Website</h1>
            <p>This is the home page of our LitElement website prototype.</p>
        `;
    }
}