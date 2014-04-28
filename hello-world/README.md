# hello-world

> The coolest cortex module

## Getting Started
Before anything taking its part, you should install [node](http://nodejs.org) and "cortex".

#### Install Node

Visit [http://nodejs.org](http://nodejs.org), download and install the proper version of nodejs.

#### Install Cortex

    # maybe you should use `sudo`
    npm install -g cortex

## Build an awesome module


#### Init the project
First, make a directory called hello-world, in the directory root path, run 'cortext init' to initialize the project:

	cortex init

cortex will ask you a bunch of questions, and using the default will be fine. If everything goes well, you will find the project structure like this:

	hello-world
	|-test  // where test cases belongs to
	|-index.js	// you module's entry file
	|-package.json	// package info
	
#### Write the module
In index.js, we want to export a method which will say hello to our world:

	exports.sayHello=function(){
		alert('hello world');
	}
	
#### Build the project
Run 'cortex build' to build the project. In development , you can use 'cortex watch' to watch the changes of files, if any file changes, cortex will rebuild the project

	cortex build
	
#### run your code

Alter you test case in hello-world/test/spec/hello-world_test.js

	describe("hello-world", function(){
   		describe("hello-world.sayHello()", function(){
      		it("should return 1", function(done){
         		_use('hello-world@latest', function(exports) {
                	exports.sayHello();
            	});
        	});
    	});
	});

Run 'cortex server' to serve the module

	cortex server
	
Finally open hello-world/test/runner.html in browser, your alert will be shown, done~



