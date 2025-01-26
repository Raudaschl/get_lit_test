import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-page')
export class AboutPage extends LitElement {
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
            <h1>About Us</h1>
            <p>Learn more about our company and mission.</p>
        `;
    }
}