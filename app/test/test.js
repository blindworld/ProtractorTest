describe('test', function() {
    it('should navigate', function() {

        browser.get('http://localhost:8080');

        console.log('running test');

        element(by.buttonText('Go to 2')).click();
        element(by.buttonText('Go to 1')).click();
        element(by.buttonText('Go to 2')).click();
        element(by.buttonText('Go to 1')).click();
        browser.sleep(1000);
    });
});