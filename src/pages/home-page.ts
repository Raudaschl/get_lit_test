import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-page')
export class HomePage extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: 1rem;
        }
        h1 {
            color: #333;
        }
    `;

    constructor() {
        super();
        console.log('HomePage component constructed');
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('HomePage connected to DOM');
    }

    render() {
        console.log('HomePage rendering');
        return html`
            <div class="home-content">
                <h1>Welcome Home</h1>
                <p>This is the home page of our LitElement website.</p>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'home-page': HomePage;
    }
}