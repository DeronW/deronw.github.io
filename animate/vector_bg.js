// $.getScript("http://im-img.qq.com/pcqq/js/200/cav.js",function(){})

(function() {

    var options = {
        width : 2.5,
        height : 1.1,
        depth : 5,
        segments : 40,
        slices : 6,
        xRange : 0.8,
        yRange : 0.1,
        zRange : 1,
        ambient : "#525252", // "#cccccc",
        diffuse : "#ffffff", // "#333333", 
        speed : 0.0002,
        container : document.getElementById("container")
    };

    var G = {
        count : 2,
        xyScalar : 1,
        zOffset : 100,
        ambient : "#ac0908", // "#666666",
        diffuse : "#cd5726", // "#aaaaaa",
        speed : 0.001,
        gravity : 1200,
        dampening : 0.95,
        minLimit : 10,
        maxLimit : null,
        minDistance : 20,
        maxDistance : 400,
        autopilot : false,
        draw : false,
        bounds : CAV.Vector3.create(),
        step : CAV.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1))
    };

    var L = CAV.Vector3.create();
    var k = CAV.Vector3.create();

    var cav, scene, mesh, plane, timeDelta, startTime = Date.now();

    function play() {
        timeDelta = Date.now() - startTime;

        var Q, P, O, T, U, S = options.depth / 2;
        CAV.Vector3.copy(G.bounds, L);
        CAV.Vector3.multiplyScalar(G.bounds, G.xyScalar);
        CAV.Vector3.setZ(k, G.zOffset);
        for (var i = scene.lights.length - 1; i >= 0; i--) {
            T = scene.lights[i];
            CAV.Vector3.setZ(T.position, G.zOffset);
            var N = Math.clamp(CAV.Vector3.distanceSquared(T.position, k), G.minDistance, G.maxDistance);
            var W = G.gravity * T.mass / N;
            CAV.Vector3.subtractVectors(T.force, k, T.position);
            CAV.Vector3.normalise(T.force);
            CAV.Vector3.multiplyScalar(T.force, W);
            CAV.Vector3.set(T.acceleration);
            CAV.Vector3.add(T.acceleration, T.force);
            CAV.Vector3.add(T.velocity, T.acceleration);
            CAV.Vector3.multiplyScalar(T.velocity, G.dampening);
            CAV.Vector3.limit(T.velocity, G.minLimit, G.maxLimit);
            CAV.Vector3.add(T.position, T.velocity)
        }
        for (var i = plane.vertices.length - 1; i >= 0; i--) {
            U = plane.vertices[i];
            Q = Math.sin(U.time + U.step[0] * timeDelta * options.speed);
            P = Math.cos(U.time + U.step[1] * timeDelta * options.speed);
            O = Math.sin(U.time + U.step[2] * timeDelta * options.speed);
            CAV.Vector3.set(U.position, options.xRange * plane.segmentWidth * Q, options.yRange * plane.sliceHeight * P, options.zRange * S * O - S);
            CAV.Vector3.add(U.position, U.anchor)
        }
        plane.dirty = true

        cav.render(scene)
        requestAnimationFrame(play)
    }

    function rePaint() {
        scene.remove(mesh);
        cav.clear();
        plane = new CAV.Plane(options.width * cav.width, options.height * cav.height, options.segments, options.slices);
        mesh = new CAV.Mesh(plane, new CAV.Material(options.ambient, options.diffuse));
        scene.add(mesh);
        for (var i = plane.vertices.length - 1; i >= 0; i--) {
            var O = plane.vertices[i];
            O.anchor = CAV.Vector3.clone(O.position);
            O.step = CAV.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1));
            O.time = Math.randomInRange(0, Math.PIM2)
        }
    }

    function resetSize() {
        var c = options.container, w = c.offsetWidth, h = c.offsetHeight;
        cav.setSize(w, h);
        CAV.Vector3.set(L, cav.halfWidth, cav.halfHeight);
        rePaint()
    }

    (function() {

        cav = new CAV.CanvasRenderer();
        document.getElementById("anitOut").appendChild(cav.element);
        cav.setSize(options.container.offsetWidth, options.container.offsetHeight);

        scene = new CAV.Scene()

        rePaint();

        for (var i = scene.lights.length - 1; i >= 0; i--) {
            scene.remove(scene.lights[i])
        }

        for (var i = 0; i < G.count; i++) {
            var light = new CAV.Light(G.ambient, G.diffuse);
            light.ambientHex = light.ambient.format();
            light.diffuseHex = light.diffuse.format();
            scene.add(light);
            light.mass = Math.randomInRange(0.5, 1);
            light.velocity = CAV.Vector3.create();
            light.acceleration = CAV.Vector3.create();
            light.force = CAV.Vector3.create()
        }

        window.addEventListener("resize", function() {
            resetSize();
            cav.render(scene)
        })
        resetSize();

        play()
    })()

})()
