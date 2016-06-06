(function() {

    var World = Matter.World,
        Bodies = Matter.Bodies,
        Runner = Matter.Runner;

    Example.continuousCollisions = function(demo) {
        var engine = demo.engine,
            world = engine.world,
            runner = demo.runner,
            size = 5;

        // Matter.Demo.setManualControl(demo, true);

        world.gravity.y = 0;

        World.add(world, [
            Bodies.rectangle(400, 90, size, size, { 
                continuous: 1, 
                friction: 0, 
                positionPrev: { x: 400 + 10, y: 90 - 40 } 
            }),

            Bodies.rectangle(450, 90, size, size, { 
                continuous: 1,
                restitution: 0.9,
                friction: 0, 
                positionPrev: { x: 450 - 10, y: 90 - 40 } 
            }),

            Bodies.rectangle(100, 400, size, size, { 
                continuous: 1,
                friction: 0, 
                positionPrev: { x: 100 - 60, y: 400 } 
            }),

            Bodies.rectangle(700, 400, size, size, { 
                continuous: 1, 
                friction: 0, 
                positionPrev: { x: 700 + 101, y: 400 } 
            }),

            Bodies.rectangle(600, 450, size, size, { 
                continuous: 1, 
                friction: 0, 
                positionPrev: { x: 600 + 50, y: 450 } 
            }),
            
            Bodies.rectangle(700, 450, size, size, { 
                continuous: 1, 
                friction: 0, 
                positionPrev: { x: 700 + 60, y: 450 } 
            }),

            Bodies.rectangle(400, 300, 800, 5, { isStatic: true })
        ]);

        var renderOptions = demo.render.options;
        renderOptions.showAngleIndicator = false;
        renderOptions.showVelocity = true;
        renderOptions.showBounds = true;
    };

})();
