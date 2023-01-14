import { ButtonBuilder } from "./button.builder"
import Close from "../../../assets/close.svg"
import Dart from "../../../assets/angleDeLaFlecheDroite.svg"

export class ButtonFactory {
  constructor() {}

  createSubmitButton(text, onClick, backgroundColor) {
    return new ButtonBuilder()
      .withLabel(text)
      .withOnClick(onClick)
      .setFullWidth()
      .setBackgroundColor(backgroundColor || "#61E5F8")
      .setLabelColor("#fff")
      .setFontWeight("bold")
      .setFontSize(16)
      .build()
  }

  createTextButton(text, onClick, backgroundColor) {
    return new ButtonBuilder()
      .withLabel(text)
      .withOnClick(onClick)
      .setFullWidth()
      .setBackgroundColor(backgroundColor || "#61E5F8")
      .setLabelColor("#fff")
      .setFontSize(20)
      .setBorderRadius(3)
      .build()
  }

  createButtonDart(onClick){
    return new ButtonBuilder()
        .withOnClick(onClick)
        .setWidth(150)
        .setBackgroundColor("#61E5F8")
        .build()
  }
}