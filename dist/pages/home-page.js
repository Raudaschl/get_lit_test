import { i, _ as __decorate, s, x, e } from '../query-assigned-elements-868cdd0c.js';

let HomePage = class HomePage extends s {
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
        return x `
            <div class="home-content">
                <h1>Welcome Home</h1>
                <p>This is the home page of our LitElement website.</p>
            </div>
        `;
    }
};
HomePage.styles = i `
        :host {
            display: block;
            padding: 1rem;
        }
        h1 {
            color: #333;
        }
    `;
HomePage = __decorate([
    e('home-page')
], HomePage);

export { HomePage };
//# sourceMappingURL=home-page.js.map
