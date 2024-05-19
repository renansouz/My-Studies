class Component {
  #element
  constructor(tagName){
  this.#element = document.createElement(tagName)
  }

  getElement(){
    return this.#element
  }

  build(){
    this.#element = document.createElement(this.#element.tagName)
    return this.#element
  }

  render(target) {
    target.appendChild(this.#element)
  }
}

class Input extends Component {

}

class Label extends Component {
  constructor(value, tagName){
  super(tagName)
  this.value = value
}
}

class form extends Component {
  constructor(content, tagName){
    super(tagName)
    this.content = content
  }
}

const divComponent = new Component('div')
divComponent.getElement.textContent = "hello, world!"
divComponent.render(document.body)

divComponent.build()
divComponent.getElement.textContent = "Hello, World! (rebuilt)";
divComponent.render(document.body)