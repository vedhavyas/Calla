﻿import { Button, H2, P } from "./tags.js";
import { onClick } from "./evts.js";
import { id, style } from "./attrs.js";
import { HtmlCustomTag } from "./HtmlCustomTag.js";

const selectEvt = new Event("select");

export class OptionPanelTag extends HtmlCustomTag {
    constructor(panelID, name, ...rest) {
        super("div",
            id(panelID),
            style({ padding: "1em" }),
            P(...rest));

        this.button = Button(
            id(panelID + "Btn"),
            onClick(() => this.dispatchEvent(selectEvt)),
            name);
    }

    get visible() {
        return this.element.style.display !== null;
    }

    set visible(v) {
        this.element.setOpen(v);
        //this.button.setLocked(v);
        style({
            backgroundColor: v ? "#ddd" : "transparent",
            borderTop: v ? "" : "none",
            borderRight: v ? "" : "none",
            borderBottom: v ? "none" : "",
            borderLeft: v ? "" : "none",
        }).apply(this.button);
    }
}