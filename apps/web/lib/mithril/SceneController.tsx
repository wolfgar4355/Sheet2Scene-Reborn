"use client";

export default class SceneController {
    private isOpen = false;

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    get state() {
        return this.isOpen;
    }
}
