describe('test', function() {
    it('should navigate', function() {

        // browser.get('http://localhost:8080');
        // THE NEXT LINE WILL RESULT AN INFINITE DIGEST LOOP!
        browser.get('http://user1@localhost:8080');

        element(by.buttonText('Go to 2')).click();
        element(by.buttonText('Go to 1')).click();
        element(by.buttonText('Go to 2')).click();
        element(by.buttonText('Go to 1')).click();
    });
});
