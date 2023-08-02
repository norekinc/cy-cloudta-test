class NotImplementedError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotImplementedError";
    }
}

class Page {
    elements = {}

    assertIsDisplayed() {
        throw new NotImplementedError()
    }

    visit() {
        throw new NotImplementedError()
    }
}

export default Page