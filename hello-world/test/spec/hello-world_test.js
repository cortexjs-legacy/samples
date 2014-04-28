describe("hello-world", function(){
    describe("hello-world.sayHello()", function(){
        it("should return 1", function(done){
            _use('hello-world@latest', function(exports) {
                exports.sayHello();
            });
        });
    });
});