import { i, _ as __decorate, s, x, e } from '../query-assigned-elements-868cdd0c.js';

let ContactPage = class ContactPage extends s {
    handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted');
    }
    render() {
        return x `
            <h1>Contact Us</h1>
            <form @submit=${this.handleSubmit}>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        `;
    }
};
ContactPage.styles = i `
        :host {
            display: block;
        }
        h1 {
            color: #333;
        }
        form {
            max-width: 500px;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        label {
            display: block;
            margin-bottom: 0.5rem;
        }
        input, textarea {
            width: 100%;
            padding: 0.5rem;
        }
        button {
            background-color: #333;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #555;
        }
    `;
ContactPage = __decorate([
    e('contact-page')
], ContactPage);

export { ContactPage };
//# sourceMappingURL=contact-page.js.map
