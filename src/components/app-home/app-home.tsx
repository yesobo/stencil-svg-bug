import { Component, State } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  @State() items: number[];

  componentWillLoad() {
    this.items = [1];
  }

  addItem() {
    this.items = [...this.items, this.items.length + 1]
  }

  render() {
    return (
      <div>
        <p>
          Add Item is not working but the added html tags are present in DOM tree
        </p>
        <div class="itemsList">
          {this.items.map((item) => {
            return (
              <div class="parent">
                <span class="opening">{item}</span>
                <svg class={item} height="50" width="101" viewBox="0 0 210 400">
                  <path d="M150 0 L75 200 L225 200 Z" />
                </svg>
              </div>
            )
          })}
        </div>
        <button onClick={() => this.addItem()} >Add item</button>
        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
