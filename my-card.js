import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  
header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
}

.info-button {
    background-color: gray;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

@media (max-width: 600px) {
    .info-button {
        display: none;
    }
}

.card-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
}

.product-card {
    width: 300px;
    margin: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
}

.product-card h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.product-card img {
    max-width: 100%;
    height: auto;
}

.product-card p {
    font-style: italic;
}
button#duplicateCardButton:hover,
button#duplicateCardButton:focus,
button#toggleBackgroundColorButton:hover,
button#toggleBackgroundColorButton:focus,
button#changeHeadingButton:hover,
button#changeHeadingButton:focus,
button#deleteLastCardButton:hover,
button#deleteLastCardButton:focus {
    background-color: gray;
    color: white;
}
.card-info .description {
    display: none;
}
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <body>
        <div class="info-button-wrapper">
            <a href="https://hax.psu.edu/">
                <button class="info-button">Info</button>
            </a>
        </div>

        <div class="card-container">
           

            <div class="product-card">
                <div class="card-info">
                    <h2>Bottoms</h2>
                    <img src="https://images.stockx.com/images/FEAR-OF-GOD-ESSENTIALS-Sweatpants-Olive-Khaki.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1608576493"></img>
                    <p>Fall collection</p>
                </div>
            </div>
        </div>
   

   
    <button id="duplicateCardButton">Duplicate Card</button>

    
    <button id="toggleBackgroundColorButton">Toggle Background Color</button>

   
    <button id="changeHeadingButton">Change Heading</button>

    
    <button id="deleteLastCardButton">Delete Last Card</button>

    
    
    <script src="script.js"></script>
</body>
    `;
  }
}

customElements.define('my-card', MyCard);