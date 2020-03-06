import supportsWebP from 'supports-webp';

class WebpSupportPlugin {

  constructor(config) {
    this.noWebpSupportedClassName = config.noWebpSupportedClassName;
  }

  async run(element){
    if(!await supportsWebP)
    this._addNoSupportedClasses(element);
  }

  _addNoSupportedClasses(element) {
    const divList = element.querySelectorAll(`div`);

    divList.forEach( div => {
      if (this._hasBackgroundImage(div)) {
        div.classList.add(this.noWebpSupportedClassName);
      }
    });
  }

  _hasBackgroundImage(divElement){
    const style = window.getComputedStyle(divElement, false)
    const backgroundImage = style.getPropertyValue("background-image")
    return backgroundImage !== "none"
  }
}

export default WebpSupportPlugin;