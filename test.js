const assert = require("assert");
const showBanner = require(".");

describe("node-banner", () => {
  it("should display the banner", async () => {
    await showBanner("Title", "This is the tagline");
    assert.ok("Works fine");
  });

  it("should fail if no arguments were supplied", async () => {
    try {
      await showBanner();
    } catch (err) {
      assert.equal(err, "Error: The argument title is required.");
    }
  });

  it("should work fine if only the title was provided", async () => {
    await showBanner("Title");
    assert.ok("tagLine is optional");
  });

  it("should fail if the title was not provided", async () => {
    try {
      await showBanner("", "This is the tagline");
    } catch (err) {
      assert.equal(err, "Error: The argument title is required.");
    }
  });

  it("should work fine with a custom title-color", async () => {
    await showBanner("Title", "", "magenta");
    assert.ok("tagLine is optional");
  });

  it("ignores whitespaces supplied in place of the tagline", async () => {
    await showBanner("Title", " ", "blue");
    assert.ok("whitespaces are ignored");
  });

  it("it should fail if an unrecognized title-color is supplied", async () => {
    try {
      await showBanner("Title", "", "purple");
    } catch (err) {
      assert.equal(err, "RangeError: Title color out of range.");
    }
  });

  it("it should fail if an unrecognized tagline-color is supplied", async () => {
    try {
      await showBanner("Title", "", "red", "purple");
    } catch (err) {
      assert.equal(err, "RangeError: Tagline color out of range.");
    }
  });

  it("should work fine if all the arguments are supplied", async () => {
    await showBanner("Title", "This is the tagline", "blue");
    assert.ok("Works fine");
  });

  it("capitalizes cli", async () => {
    await showBanner("mevn-cli");
    assert.ok("Works fine");
  });
});
